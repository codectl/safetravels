import {combineReducers} from "redux";

import accountReducer from "../modules/account/reducer";
import searchReducer from "../modules/search/reducer";

const rootReducer = combineReducers({
    account: accountReducer,
    search: searchReducer
});

export default rootReducer;
