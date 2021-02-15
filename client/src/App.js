import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";

import Account from "./modules/account";
import AccountActions from "./modules/account/actions";
import AboutUs from "./shared/pages/AboutUs"
import Home from "./shared/pages/Home";
import NotFound from "./shared/pages/404";

const App = props => {

    useEffect(() => {
        props.loadSession();
    }, [])

    return (
        <>
            {props.account.isLoaded ? (
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route component={NotFound}/>
                </Switch>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

const mapStateToProps = state => ({
    account: state.account
});

const mapDispatchToProps = {
    loadSession: AccountActions.loadSession
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
