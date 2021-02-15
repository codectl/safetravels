import express from "express";

import SearchController from "../controllers/search";

const router = express.Router();

/* GET restrictions. */
router.route("/restrictions")
    .get(SearchController.getCountryRestrictions)

export {router};
