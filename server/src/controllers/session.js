import AuthService from "../services/auth";
import UserService from "../services/user";
import * as utils from "../internals/utils";

export default class SessionController {

    /**
     * Create a new user session.
     * @returns {Promise<Object>} the user data
     */
    static async createSession(req, res) {

        // Check if user exists given its username/email
        const searchField = utils.emailIsValid(req.body.username) ? "email" : "username";
        const user = await UserService.findUser({[searchField]: req.body.username});
        if (!user)
            return res.status(401).json({username: "invalid user"});

        // Validate credentials
        if (!await AuthService.checkPassword(req.body.password, user.password))
            return res.status(401).json({password: "wrong credentials"});

        // Save user in session
        req.session.user = user;

        return res.json(user);
    }

    /**
     * Validate existing session.
     */
    static verifySession(req, res, next) {

        // Check if session cookie is present in the browser
        if (req.cookies.sid) {

            // Clear browser session cookie if user is not in session anymore
            if (!req.session.user)
                res.clearCookie("sid");
        }

        // Pass on user in session
        res.locals.user = req.session.user || null;

        return next();
    };

    /**
     * Delete session.
     */
    static deleteSession(req, res) {

        // Pass on user in session
        req.session.destroy();

        // Clear user session cookie
        res.clearCookie("sid");

        return res.sendStatus(204);
    };
}
