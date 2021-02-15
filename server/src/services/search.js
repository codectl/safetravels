import axios from "axios";

import * as utils from "../internals/utils";
import {countries} from "../internals/constants";

export default class SearchService {

    /**
     * Get restrictions based on countries of origin and destination.
     * Information provided by Skyscanner.
     * @param fromCountry the country of origin.
     * @param toCountry the country of destination.
     * @returns results
     */
    static async getCountryRestrictions(fromCountry, toCountry) {
        const url = "https://skyscanner.com/g/can-i-go-map-api/map/feature-collection-translated"
        const skyscannerId = countries.find(e => e.code === fromCountry).skyscannerId;

        // Query Skyscanner website for metrics
        const response = await axios.get(url, {
            headers: {"user-agent": utils.getUserAgent()},
            params: {
                locale: "en-US",
                originId: skyscannerId
            }
        });
        return response.data.features.find(e => e.properties.country_code === toCountry).properties.restrictions;
    }
}
