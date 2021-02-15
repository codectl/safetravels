import React, {useRef, useState} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {
    MDBBtn,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
} from "mdbreact";

import AccountActions from "../../../modules/account/actions";
import AuthModal from "../../../modules/account/components/AuthModal/AuthModal";

const Navbar = props => {
    const [isAuthModalOpen, authModalToggle] = useState(false);
    const authModalRef = useRef();

    const authModalToggleEvent = () => {
        authModalToggle(true);
        authModalRef.current.changeTab(null, "login");
    }

    return (
        <MDBNavbar color="indigo" expand="md">
            <div className="container">
                <MDBNavbarBrand>
                    <NavLink to="/">
                        <img src="/images/logo.svg" width="30" height="30" className="d-inline-block align-top"
                             alt="logo"/>
                        <strong className="white-text ml-3">Safe <span className="text-default">Travels</span></strong>
                    </NavLink>
                </MDBNavbarBrand>
                {props.account.session ? (
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav className="text-light">
                                    <i className="fas fa-user"/> {props.account.session.username}
                                </MDBDropdownToggle>
                                <MDBDropdownMenu right basic>
                                    <MDBDropdownItem>Settings</MDBDropdownItem>
                                    <MDBDropdownItem divider/>
                                    <MDBDropdownItem onClick={() => props.logout()}>
                                        Logout
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                ) : (
                    <>
                        <MDBBtn className="px-3 py-1 z-depth-0"
                                onClick={authModalToggleEvent}>
                            <i className="fas fa-user mr-2"/>Login
                        </MDBBtn>
                        <AuthModal ref={authModalRef}
                                   isModalOpen={isAuthModalOpen}
                                   toggleModal={authModalToggle}
                                   activeTab="login"/>
                    </>
                )}
            </div>
        </MDBNavbar>
    );
}

const mapStateToProps = state => ({
    account: state.account
});

const mapDispatchToProps = {
    logout: AccountActions.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
