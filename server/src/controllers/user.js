import * as utils from "../internals/utils";
import UserService from "../services/user";
import {ValidationError} from "../internals/errors";

export default class UserController {

    /**
     * Create user request.
     */
    static async createUser(req, res) {
        try {
            // Validate params
            const data = utils.normalizeValues(req.body);

            await UserService.createUser(data);
            return res.sendStatus(201);
        } catch (err) {
            // Respond with an error json object
            if (err instanceof ValidationError)
                return res.status(422).json(err.details);
            else
                return res.sendStatus(500);
        }
    }

    /**
     * Get the user in session.
     */
    static async getSessionUser(req, res) {
        try {
            return await res.json(res.locals.user);
        } catch (err) {
            return res.sendStatus(500);
        }
    }
}
