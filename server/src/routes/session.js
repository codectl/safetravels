import express from "express";

import SessionController from "../controllers/session";
import UserController from "../controllers/user";

const router = express.Router();

/* POST token. */
router.route("/")
    .post(SessionController.createSession)

/* GET / DELETE current session. */
router.route("/me")
    .get(SessionController.verifySession,
        UserController.getSessionUser)
    .delete(SessionController.deleteSession)

export {router};
