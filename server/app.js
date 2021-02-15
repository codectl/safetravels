import cookieParser from "cookie-parser";
import connectSession from "connect-mongo";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import session from "express-session";

// Load route configurations
import {router} from "./src/routes";

// Load environment variables
require("dotenv").config({path: __dirname + "/.env"})

// Initialize the app express
const app = express();

// Set morgan to log info about requests for development use
app.use(morgan("dev"));

// Enable parsing incoming parameters requests to req.body
app.use(express.json());

// Parse incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: false}));

// Enable cookies stored in the browser
app.use(cookieParser());

// Connect express session to Mongo store
const MongoStore = connectSession(session);

// Enable tracking logged-in users across sessions
app.use(session({

    // The session id
    key: "sid",

    // It holds the secret key for session
    secret: process.env.SESSION_SECRET,

    // A session does not get saved
    // back to the session store if it
    // was not modified
    resave: false,

    // A session that is "uninitialized"
    // does not get saved to the store
    saveUninitialized: false,

    // Link the session store to the
    // local database
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),

    cookie: {
        // Expire cookie after 1 hour
        maxAge: 1000 * 60 * 60,

        // Prevent against XSS since the cookie
        // is not visible to client-side script
        httpOnly: true,

        // Cookie is only sent to the server on
        // on a secure connection
        // secure: true

        // Prevent cookie data from being transferred
        // during cross-domain requests
        sameSite: "strict"
    }
}))

// Root router
app.use("/", router);

export {app};
