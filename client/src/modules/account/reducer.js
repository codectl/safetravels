import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    SESSION_LOAD,
    SESSION_SUCCESS,
    SESSION_ERROR
} from "./constants";

const initialState = {
    session: null,
    isLoaded: false,
    isLoading: false,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {

        // Register
        case REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case REGISTER_ERROR:
            return {
                ...state,
                isLoading: false,
            };

        // Login
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                session: payload.session,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
            };

        // Logout
        case LOGOUT:
            return {
                ...state,
                session: null
            };

        // Session
        case SESSION_LOAD:
            return {
                ...state,
                isLoading: true
            };
        case SESSION_SUCCESS:
            return {
                ...state,
                session: payload.session,
                isLoading: false,
                isLoaded: true,
            };
        case SESSION_ERROR:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
            };

        default:
            return state;
    }
}
