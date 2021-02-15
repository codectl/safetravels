import express from "express";

import CountryController from "../controllers/country";

const router = express.Router();

/* GET countries. */
router.route("/")
    .get(CountryController.getCountries)

export {router};
