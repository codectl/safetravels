import axios from "axios";

/**
 * Login user.
 * @returns {Promise<json>}
 */
const register = async (data) => {
    try {
        await axios.post("/api/users", data);
    } catch (err) {
        throw err;
    }
}

/**
 * Login user.
 * @returns {Promise<json>}
 */
const login = async (username, password) => {
    try {
        const response = await axios.post("/api/sessions", {
            username: username,
            password: password
        });
        return response.data;
    } catch (err) {
        throw err;
    }
}

/**
 * Load the current session.
 * @returns {Promise<json>}
 */
const logout = async () => {
    try {
        await axios.delete("/api/sessions/me");
    } catch (err) {
        throw err;
    }
}

/**
 * Load the current session.
 * @returns {Promise<json>}
 */
const getCurrentSession = async () => {
    try {
        const response = await axios.get("/api/sessions/me");
        return response.data;
    } catch (err) {
        throw err;
    }
}

const AccountService = {
    register,
    login,
    logout,
    getCurrentSession
}

export default AccountService;
