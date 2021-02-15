import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import SearchActions from "../../actions";
import SelectCountry from "../SelectCountry";
import {COUNTRY_FROM, COUNTRY_TO} from "../../constants"

const SelectCountryForm = props => {
    const [countries, setCountries] = useState([]);
    const [location, setLocation] = useState();
    const [isLoading, setLoading] = useState(true);

    const findOption = value => countries.find(element => element.value === value);

    useEffect(() => {
        (async () => {
            setCountries(await props.loadCountries());
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setLocation(await props.getCurrentLocation());
        })();
    }, []);

    useEffect(() => {
        if (countries && location) {
            props.dispatch({type: COUNTRY_FROM, payload: location.country});
            setLoading(false);
        }
    }, [countries, location]);

    return (
        <>
            <h6 className="text-default">From</h6>
            <SelectCountry options={countries}
                           value={findOption(props.search.from)}
                           onChange={option => props.dispatch({
                               type: COUNTRY_FROM, payload: option ? option.value : null
                           })}
                           isLoading={isLoading}/>
            <h6 className="text-default mt-3">To</h6>
            <SelectCountry options={countries}
                           value={findOption(props.search.to)}
                           onChange={option => props.dispatch({
                               type: COUNTRY_TO, payload: option ? option.value : null
                           })}
                           isLoading={isLoading}/>
        </>
    );
}

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch,
        loadCountries: SearchActions.loadCountries(),
        getCurrentLocation: SearchActions.getCurrentCountryLocation()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCountryForm);
