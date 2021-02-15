import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import PopulationResults from "../PopulationResults"
import RestrictionResults from "../RestrictionResults"
import SearchActions from "../../actions"
import {MDBCol, MDBRow} from "mdbreact";

const SearchResults = props => {
    const [countryRestrictions, setCountryRestrictions] = useState({});
    const [loadingResults, setLoadingResults] = useState(false);

    useEffect(() => {
        (async () => {
            setLoadingResults(true);
            if (props.search.from && props.search.to) {
                setCountryRestrictions(await props.getRestrictions(props.search.from, props.search.to));
            } else
                setCountryRestrictions({});
            setLoadingResults(false);
        })();
    }, [props.search.from, props.search.to]);

    return (
        <MDBRow>
            <MDBCol>
                {loadingResults ? (
                    <div className="text-center mt-5">
                        <div className="spinner-border text-default" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <MDBRow>
                        <MDBCol md="6">
                            <RestrictionResults countryRestrictions={countryRestrictions}/>
                        </MDBCol>
                        <MDBCol md="6">
                            <div className="mx-md-3">
                                <PopulationResults countryRestrictions={countryRestrictions}/>
                            </div>
                        </MDBCol>
                    </MDBRow>
                )}
            </MDBCol>
        </MDBRow>
    );
}

const mapStateToProps = state => ({
    search: state.search
});

const mapDispatchToProps = {
    getRestrictions: SearchActions.getCountryRestrictions
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
