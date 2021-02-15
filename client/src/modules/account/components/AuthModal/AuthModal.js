import React, {forwardRef, useImperativeHandle, useState} from "react";
import {MDBLink, MDBModal, MDBModalBody, MDBModalFooter, MDBTabContent, MDBTabPane} from "mdbreact";

import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const AuthModal = (props, ref) => {
    const [activeTab, toggleTab] = useState(props.activeTab);

    const changeTab = (event, targetTab) => {
        if (event) {
            event.preventDefault();
            const target = event.target;
            targetTab = target.href.replace(target.baseURI, "");
        }
        toggleTab(targetTab);
    }

    useImperativeHandle(ref, () => ({
        changeTab
    }), [changeTab])

    return (
        <MDBModal isOpen={props.isModalOpen} toggle={props.toggleModal}
                  className="fade-scale" size="sm" fade={false}>
            <MDBTabContent activeItem={activeTab} className="d-inline-flex">
                <MDBTabPane tabId="login" role="tabpanel"
                            className={`w-100 flex-shrink-0 animated
                            ${activeTab === "login" && "fadeIn"}`}>
                    <MDBModalBody className="px-4">
                        <LoginForm {...props}/>
                    </MDBModalBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1 justify-content-center">
                        <small className="grey-text d-flex">
                            Not a member?
                            <MDBLink to="register" className="d-flex p-0 ml-1 text-default"
                                     onClick={changeTab}>Register</MDBLink>
                        </small>
                    </MDBModalFooter>
                </MDBTabPane>
                <MDBTabPane tabId="register" role="tabpanel"
                            className={`w-100 flex-shrink-0 animated
                            ${activeTab === "register" && "fadeIn"}`}>
                    <MDBModalBody className="px-4">
                        <RegisterForm {...props}/>
                    </MDBModalBody>
                    <MDBModalFooter className="mx-5 pt-3 mb-1 justify-content-center">
                        <small className="grey-text d-flex">
                            Already a member?
                            <MDBLink to="login" className="d-flex p-0 ml-1 text-default"
                                     onClick={changeTab}>Login</MDBLink>
                        </small>
                    </MDBModalFooter>
                </MDBTabPane>
            </MDBTabContent>
        </MDBModal>
    );
}

export default forwardRef(AuthModal);
