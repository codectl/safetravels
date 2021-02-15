import React, {useState} from "react";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import {MDBBtn, MDBInput} from "mdbreact";

const ContactForm = props => {

    const [validateOnChange, setValidateOnChange] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Name not specified."),
            email: Yup.string()
                .required("Email not specified."),
            message: Yup.string()
                .required("Message not specified.")
        }),
        validateOnChange: validateOnChange,
        validateOnBlur: validateOnChange,
        onSubmit: async (values) => {
            try {
                await axios.post("/api/contact-us", values);
                alert("Message Sent.");
            } catch (_) {
                alert("Message failed to send.")
            }
            props.toggleModal(false);
        }
    });

    return (
        <div className="my-5">
            <h4 className="indigo-text">How Can We Help You With Your Travels?</h4>
            <div className="Contact">
                <form onSubmit={formik.handleSubmit}>
                    <MDBInput
                        label="Name"
                        id="name"
                        type="text"
                        className={formik.errors.name && 'is-invalid'}
                        {...formik.getFieldProps("name")}>
                        <div className="invalid-feedback">
                            {formik.errors.name}
                        </div>
                    </MDBInput>

                    <MDBInput
                        label="Email"
                        id="email"
                        type="text"
                        className={formik.errors.email && 'is-invalid'}
                        {...formik.getFieldProps("email")}>
                        <div className="invalid-feedback">
                            {formik.errors.email}
                        </div>
                    </MDBInput>

                    <MDBInput
                        label="Message"
                        id="message"
                        type="textarea"
                        rows="3"
                        className={formik.errors.message && 'is-invalid'}
                        {...formik.getFieldProps("message")}>
                        <div className="invalid-feedback">
                            {formik.errors.message}
                        </div>
                    </MDBInput>

                    <MDBBtn type="submit" color="default" rounded
                            className="btn-block z-depth-1a"
                            onClick={() => setValidateOnChange(true)}>
                        Send
                    </MDBBtn>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;