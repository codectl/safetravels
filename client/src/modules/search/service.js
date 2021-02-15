import axios from "axios";

/**
 * Load countries.
 */
const getCountries = async () => {
    const response = await axios.get("/api/countries");
    return response.data;
}

/**
 * Get country restrictions.
 */
const getCountryRestrictions = async (from, to) => {
    const response = await axios.get("/api/search/restrictions", {
        params: {
            from: from,
            to: to
        }
    });
    return response.data;
}

const SearchService = {
    getCountries,
    getCountryRestrictions
}

export default SearchService;
