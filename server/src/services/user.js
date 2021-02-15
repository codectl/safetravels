import User from "../models/user";
import AuthService from "../services/auth";
import {validate as validateUser} from "../validators/user";

export default class UserService {

    /**
     * Find a user based on a given filter.
     * @param filter the filter to apply
     * @returns {User} the user
     */
    static findUser(filter) {
        return User.findOne(filter).exec();
    }

    /**
     * Create a new user.
     * @throws ValidationError if validation fails.
     * @throws Error if hashPassword or save fails.
     */
    static async createUser(params) {
        await validateUser(params);

        // Create a new user
        let user = new User(params);

        // Hashing password
        user.password = await AuthService.hashPassword(user.password);

        // Store user
        user.save();
    }
}
