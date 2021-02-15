import express from "express";

import ContactController from "../controllers/contact";

const router = express.Router();

/* POST contact. */
router.route("/")
    .post(ContactController.contactUs)

export {router};
