import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import NotFound from "../../shared/pages/404";
import Profile from "./pages/Profile";

class Account extends Component {
    render() {
        const url = this.props.match.url;
        return (
            <Switch>
                <Route exact path={url} component={Profile}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}

export default Account;
