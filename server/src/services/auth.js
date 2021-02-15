import bcrypt from "bcryptjs";

export default class AuthService {

    /**
     * Generate new has password based on bcrypt algorithm.
     * @returns Promise
     * @throws Error if hash fails.
     */
    static async hashPassword(password) {
        const saltRounds = 10;

        return new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err)
                    reject(err);
                else
                    resolve(hash);
            });
        });
    }

    /**
     * Check whether password is valid.
     * @returns boolean true if matches, false otherwise.
     * @throws Error if hash fails.
     */
    static checkPassword(candidate, password) {
        return bcrypt.compare(candidate, password);
    }
}
