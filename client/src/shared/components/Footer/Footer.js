import React, {useState} from "react";
import {MDBCol, MDBContainer, MDBFooter, MDBNavbarBrand, MDBRow} from "mdbreact";
import {NavLink} from "react-router-dom";

import ContactModal from "../ContactModal/ContactModal";

const Footer = () => {
    const [isContactModalOpen, contactModalToggle] = useState(false);

    return (
        <MDBFooter color="indigo" className="font-small mt-auto pt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="12" className="text-center">
                        <MDBNavbarBrand>
                            <NavLink to="/">
                                <img src="/images/logo.svg" width="30" height="30"
                                     className="d-inline-block align-top" alt="logo"/>
                                <strong className="white-text ml-3">Safe <span
                                    className="text-default">Travels</span></strong>
                            </NavLink>
                        </MDBNavbarBrand>
                    </MDBCol>
                    <MDBCol md="12">
                        <ul className="list-unstyled d-flex justify-content-center mt-2">
                            <li className="mx-2">
                                <NavLink to="/about-us">About Us</NavLink>
                            </li>
                            <li className="mx-2">
                                <a href={void(0)}
                                   onClick={() => contactModalToggle(true)}>
                                    Contact Us</a>
                                <ContactModal isModalOpen={isContactModalOpen}
                                              toggleModal={contactModalToggle}
                                              activeTab="contact"/>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3 mt-1">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:
                    <NavLink to="/"> safetravels </NavLink>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}


export default Footer;
