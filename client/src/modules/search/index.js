import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import HomePage from "../../shared/pages/Home";
import {joinURL} from "../../shared/helpers";

class Home extends Component {
    render() {
        const url = this.props.match.url;
        return (
            <Switch>
                <Route exact path={url} component={HomePage}/>
                <Route exact path={joinURL(url, "home")} component={HomePage}/>
            </Switch>
        );
    }
}

export default Home;
