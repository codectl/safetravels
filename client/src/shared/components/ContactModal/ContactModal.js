import React from "react";
import {MDBModal, MDBModalBody} from "mdbreact";

import ContactForm from "../ContactForm/ContactForm";

const ContactModal = props => {

    return (
        <MDBModal isOpen={props.isModalOpen} toggle={props.toggleModal}
                  className="fade-scale" size="medium" fade={false}>
            <MDBModalBody className="px-4">
                <ContactForm {...props}/>
            </MDBModalBody>
        </MDBModal>
    );
}

export default ContactModal;
