import React, {useEffect, useState} from "react";
import {isEmpty} from "lodash";

import "./PopulationResults.css";
import {MDBBtn, MDBIcon} from "mdbreact";

const PopulationResults = props => {
    let [population, setPopulation] = useState();
    let [deltaCases, setDeltaCases] = useState();

    useEffect(() => {
        if (!isEmpty(props.countryRestrictions)) {
            setPopulation(props.countryRestrictions.destination_safety_status.population);
            setDeltaCases(props.countryRestrictions.destination_safety_status.casesDeltaPercent7Days);
        }
    }, [props.countryRestrictions])


    return (
        <>
            {isEmpty(props.countryRestrictions) ? (
                <></>
            ) : (
                <>
                    <h3 className="text-default mt-3">Covid-19 Updates</h3>
                    <div id="covid-updates" className="mt-3">
                        <div className="mt-2">
                            <label className="my-0 mr-2">🧑‍🤝‍🧑
                                <span className="ml-2">Population:</span>
                            </label>
                            <span className="ml-1">
                                {population}
                            </span>
                        </div>
                        <div id="infections" className="mt-2">
                            <label className="my-0 mr-2">
                                {deltaCases > 0 ? <>📈</> : <>📉</>}
                                <span className="ml-2">Infections:</span>
                            </label>
                            <span className="ml-1">
                                {deltaCases >= 0 ? <>Up</> : <>Down</>}&nbsp;
                                <span className={deltaCases >= 0 ? 'positive' : 'negative'}>
                                    <strong>{Math.abs(deltaCases)}%</strong></span> in the last 7 days
                            </span>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <MDBBtn type="submit" color="default" rounded
                                className="">
                            <MDBIcon icon="bell"/> Subscribe for Updates
                        </MDBBtn>
                    </div>
                </>
            )}
        </>
    );
}

export default PopulationResults;
