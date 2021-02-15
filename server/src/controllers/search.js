import SearchService from "../services/search";

export default class SearchController {

    /**
     * Get country restrictions.
     */
    static async getCountryRestrictions(req, res) {
        const restrictions = await SearchService.getCountryRestrictions(req.query.from, req.query.to);
        return res.json(restrictions);
    }
}
