import axios from "axios";

import SearchService from "./service";

/**
 * Load available countries.
 * @returns {function()}
 */
const loadCountries = () => {
    return async () => {
        try {
            const data = await SearchService.getCountries();
            return data.map(({code, name}) => ({value: code, label: name}));
        } catch (_) {
            return [];
        }
    }
}

/**
 * Get current user country location.
 * @returns {function()}
 */
const getCurrentCountryLocation = () => {
    return async () => {
        try {
            const response = await axios.get("https://ipapi.co/json");
            return response.data;
        } catch (_) {
            return "";
        }
    }
}

/**
 * Get country restrictions.
 * @returns {function()}
 */
const getCountryRestrictions = (from, to) => {
    return async () => await SearchService.getCountryRestrictions(from, to);
}

const SearchActions = {
    loadCountries,
    getCurrentCountryLocation,
    getCountryRestrictions
};

export default SearchActions;
