import React, {useState} from "react";
import {connect} from "react-redux";
import {
    MDBBtn,
    MDBInput
} from "mdbreact";
import {useFormik} from "formik";
import * as Yup from "yup";

import AccountActions from "../../actions";

const RegisterForm = props => {
    const [validateOnChange, setValidateOnChange] = useState(false);

    const formik = useFormik({
        initialValues: {
            displayName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            displayName: Yup.string()
                .min(3, "Must be 3 characters at minimum")
                .max(30, "Must be 30 characters or less"),
            username: Yup.string()
                .min(3, "Must be 3 characters at minimum")
                .max(20, "Must be 20 characters or less")
                .matches(/^[a-zA-Z0-9_]+$/, "Invalid characters"),
            email: Yup.string()
                .required("Email not specified")
                .email("Invalid email address"),
            password: Yup.string()
                .required("Password not specified")
                .min(6, "Must be 6 characters at minimum")
                .max(20, "Must be 20 characters or less"),
            confirmPassword: Yup.string()
                .required("Confirm Password not specified")
        }),
        validateOnChange: validateOnChange,
        validateOnBlur: validateOnChange,
        onSubmit: async (values, actions) => {
            try {
                if (values.password !== values.confirmPassword) {
                    actions.setFieldError("confirmPassword", "Passwords must match");
                } else {
                    await props.register(values);
                    props.toggleModal(false);
                }
            } catch (err) {
                // Set form errors based on response
                actions.setErrors(err.response.data);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <MDBInput
                label="Name"
                id="displayName"
                type="text"
                className={formik.errors.name && 'is-invalid'}
                {...formik.getFieldProps("displayName")}>
                <div className="invalid-feedback">
                    {formik.errors.name}
                </div>
            </MDBInput>

            <MDBInput
                label="Username"
                id="username"
                type="text"
                className={formik.errors.username && 'is-invalid'}
                {...formik.getFieldProps("username")}>
                <div className="invalid-feedback">
                    {formik.errors.username}
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
                label="Password"
                id="password"
                type="password"
                className={formik.errors.password && 'is-invalid'}
                {...formik.getFieldProps("password")}>
                <div className="invalid-feedback">
                    {formik.errors.password}
                </div>
            </MDBInput>

            <MDBInput
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                className={formik.errors.confirmPassword && 'is-invalid'}
                {...formik.getFieldProps("confirmPassword")}>
                <div className="invalid-feedback">
                    {formik.errors.confirmPassword}
                </div>
            </MDBInput>

            <div className="text-center pt-3 mb-3">
                <MDBBtn type="submit" color="default" rounded
                        className="btn-block z-depth-1a"
                        onClick={() => setValidateOnChange(true)}>
                    Register
                </MDBBtn>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    account: state.account
});

const mapDispatchToProps = {
    register: AccountActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
