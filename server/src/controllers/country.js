import {countries} from "../internals/constants";

export default class CountryController {

    /**
     * Get all available countries.
     */
    static async getCountries(req, res) {
        return res.json(countries);
    }
}
