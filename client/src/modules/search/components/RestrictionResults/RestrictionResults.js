import React from "react";
import ReactMarkdown from "react-markdown"
import {isEmpty} from "lodash";

import {MDBIcon} from "mdbreact";

import "./RestrictionResults.css";

const RestrictionResults = props => {

    return (
        <>
            {isEmpty(props.countryRestrictions) ? (
                <div>No Results</div>
            ) : (
                <>
                    <h3 className="text-default mt-3">Information</h3>
                    <div id="country-restrictions" className="mt-3">
                        <div id="severity" className="d-flex align-items-center">
                            <label className="my-0 mr-2">⚠️
                                <span className="ml-2">Severity:</span>
                            </label>
                            <div className={props.countryRestrictions.entry_restrictions_translation.toLowerCase()}>
                                {props.countryRestrictions.entry_restrictions.toLowerCase() === "major" ?
                                    (<MDBIcon icon="times-circle"/>) :
                                    props.countryRestrictions.entry_restrictions.toLowerCase() === "moderate" ?
                                        (<MDBIcon icon="exclamation-circle"/>) :
                                        props.countryRestrictions.entry_restrictions.toLowerCase() === "low" ?
                                            (<MDBIcon icon="check-circle"/>) :
                                            (<MDBIcon icon="question-circle"/>)
                                }
                                <span className="ml-2">{props.countryRestrictions.entry_restrictions}</span>
                            </div>
                        </div>
                        <div className="mt-2">
                            <label className="my-0 mr-2">🏠
                                <span className="ml-2">Quarantine:</span>
                            </label>
                            <span className="ml-1">
                                    {props.countryRestrictions.destination_self_isolation}
                                </span>
                        </div>
                        <div className="mt-2">
                            <label className="mb-2">ℹ️
                                <span className="ml-2">Information:</span>
                            </label>
                            <ReactMarkdown>
                                {props.countryRestrictions.destination_restrictions_commentary}
                            </ReactMarkdown>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default RestrictionResults;
