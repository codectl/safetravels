import React from "react";
import {MDBCol, MDBRow,} from "mdbreact";

import Layout from "../../layouts";
import SelectCountryForm from "../../../modules/search/components/SelectCountryForm";
import SearchResults from "../../../modules/search/components/SearchResults";

const HomePage = () => {

    return (
        <Layout>
            <div className="container">
                <div className="my-5">
                    <h3 className="text-default">Travel Guide</h3>
                    <MDBRow className="mt-3">
                        <MDBCol md="4" lg="6" className="order-2 order-md-1">
                            <SelectCountryForm/>
                        </MDBCol>
                        <MDBCol md="8" lg="6" className="order-1 order-md-2">
                            <div className="mx-md-3">
                                <p className="font-small">
                                    The latest information on travel restrictions, entry requirements and travel advice
                                    on international flights.
                                </p>
                                <p className="font-small">
                                    Pick the country of origin & destination and get the most up to date* information to
                                    help you plan ahead of time, keeping you safe informed under the scope of COVID-19.
                                </p>
                                <p className="font-small">
                                    <small>
                                        <i>
                                            * Metrics provided by International Air Transport Association (© IATA 2020)
                                        </i>
                                    </small>
                                </p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mt-3">
                        <MDBCol>
                            <SearchResults/>
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
