import AccountService from "./service";
import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    SESSION_ERROR,
    SESSION_LOAD,
    SESSION_SUCCESS
} from "./constants";

/**
 * Action for signing up user.
 * @param data the new user data
 * @returns {function(dispatch): void}
 */
const register = data => {
    return async dispatch => {
        dispatch({type: REGISTER_REQUEST});

        try {
            await AccountService.register(data);
            dispatch({type: REGISTER_SUCCESS});

        } catch (err) {
            dispatch({type: REGISTER_ERROR, err});
            throw err;
        }
    };
}

/**
 * Action for loading session.
 * @param username the username field
 * @param password the password field
 * @returns {function(dispatch): void}
 */
const login = (username, password) => {
    return async dispatch => {
        dispatch({type: LOGIN_REQUEST});

        try {
            const session = await AccountService.login(username, password);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {session: session}
            });

        } catch (err) {
            dispatch({type: LOGIN_ERROR, err});
            throw err;
        }
    };
}

/**
 * Logout active session.
 * @returns {function(dispatch): void}
 */
const logout = () => {
    return async dispatch => {
        await AccountService.logout();
        dispatch({type: LOGOUT});
    }
}

/**
 * Load current user in session.
 * @returns {function(dispatch): void}
 */
const loadSession = () => {
    return async dispatch => {
        dispatch({type: SESSION_LOAD});

        try {
            const session = await AccountService.getCurrentSession() || null;
            dispatch({
                type: SESSION_SUCCESS,
                payload: {session: session}
            });
        } catch (err) {
            dispatch({type: SESSION_ERROR});
        }
    };
}

const AccountActions = {
    register,
    login,
    logout,
    loadSession
};

export default AccountActions;
