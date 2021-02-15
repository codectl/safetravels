import {COUNTRY_FROM, COUNTRY_TO} from "./constants";

const initialState = {
    from: "",
    to: ""
};

export default (state = initialState, {type, payload}) => {
    switch (type) {

        // Search form
        case COUNTRY_FROM:
            return {
                ...state,
                from: payload
            };
        case COUNTRY_TO:
            return {
                ...state,
                to: payload
            };
        default:
            return state;
    }
}
