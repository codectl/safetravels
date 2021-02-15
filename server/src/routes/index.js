import express from "express";

import {router as userRouter} from "./user";
import {router as sessionRouter} from "./session";
import {router as countryRouter} from "./country";
import {router as searchRouter} from "./search";
import {router as contactRouter} from "./contact";

const router = express.Router();

router.use("/api/users", userRouter);
router.use("/api/sessions", sessionRouter);
router.use("/api/countries", countryRouter);
router.use("/api/search", searchRouter);
router.use("/api/contact-us", contactRouter);

// Redirect root to api
router.route("/")
    .get((req, res) => {
        res.redirect('/api');
    });

// Base path
router.route("/api")
    .get((req, res) => {
        res.json({version: "0.1"});
    });

// Defaults to 404
router.route("/*")
    .get((req, res) => {
        res.sendStatus(404);
    });

export {router};
