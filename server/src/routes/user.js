import express from "express";

import UserController from "../controllers/user";

const router = express.Router();

/* POST users. */
router.route("/")
    .post(UserController.createUser)

export {router};
