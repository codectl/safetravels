import React, {useState} from "react";
import {connect} from "react-redux";
import {MDBBtn, MDBInput} from "mdbreact";
import {useFormik} from "formik";
import * as Yup from "yup";

import AccountActions from "../../actions";

const LoginForm = props => {
    const [validateOnChange, setValidateOnChange] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username or email not specified."),
            password: Yup.string()
                .required("Password not specified.")
        }),
        validateOnChange: validateOnChange,
        validateOnBlur: validateOnChange,
        onSubmit: async (values, actions) => {
            try {
                await props.login(values.username, values.password);
                props.toggleModal(false);
            } catch (err) {
                // Set form errors based on response
                actions.setErrors(err.response.data);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
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
                label="Password"
                id="password"
                group type="password"
                className={formik.errors.password && 'is-invalid'}
                {...formik.getFieldProps("password")}>
                <div className="invalid-feedback">
                    {formik.errors.password}
                </div>
            </MDBInput>

            <div className="text-center pt-3 mb-3">
                <MDBBtn type="submit" color="default" rounded
                        className="btn-block z-depth-1a"
                        onClick={() => setValidateOnChange(true)}>
                    Login
                </MDBBtn>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    account: state.account
});

const mapDispatchToProps = {
    login: AccountActions.login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
