import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage, Value } from "formik";
import * as Yup from "yup";

const Register = () => {
    const initialValues = {
        fullname: "",
        email: "",
        password: "",
        number: null,
        gender: "",
        confirm: "",
    };

    const validationSchema = Yup.object({
        fullname: Yup.string()
            .min(3, "fullname must be at least 3 characters")
            .required("fullname is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
        number: Yup.string()
            .min(10, "number must be at least 10 characters")
            .max(10, "number must be at least 10 characters")
            .required("number is required"),
        gender: Yup.string()
            .required("gender is required"),
        confirm: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Password is required"),
    });
    const onSubmit = (values) => {
        console.log("Form values:", values);
        if (values.password === values.confirm) {
            axios.post("http://localhost:3000/insert", values)
                .then((res) => {
                    console.log(res);
                    console.log("data inserted sucesfull");
                }).catch((err) => {
                    console.log(err.response.data)
                    let notify = () => toast(err.response.data);
                    notify();
                    console.log("data is not inserted")
                })
        } else {
            console.log("password are not match")
        }
    }
    // Add form submission logic here
    return (
        <>
            <div className="authincation">
                <div className="container">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                        <div className="auth-form">
                                            <div className="text-center mb-3">
                                                <a href="index.html">
                                                    <img src="images/logo-full.png" alt="Logo" />
                                                </a>
                                            </div>
                                            <h4 className="text-center mb-4">Sign up your account</h4>
                                            <Formik
                                                initialValues={initialValues}
                                                validationSchema={validationSchema}
                                                onSubmit={onSubmit}
                                            >
                                                <Form>
                                                    <div className="mb-3">
                                                        <label className="mb-1">
                                                            <strong>Full name</strong>
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="fullname"
                                                            className="form-control"
                                                            placeholder="Enter your full name"
                                                        />
                                                        <ErrorMessage
                                                            name="fullname"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="mb-1">
                                                            <strong>Email Address</strong>
                                                        </label>
                                                        {<ToastContainer />}
                                                        <Field
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            placeholder="Enter your email"
                                                        />
                                                        <ErrorMessage
                                                            name="email"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="mb-1">
                                                            <strong>Phone NO</strong>
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            name="number"
                                                            className="form-control"
                                                            placeholder="Enter your Phone number"
                                                        />
                                                        <ErrorMessage
                                                            name="number"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                    <div className="mb-3 ">
                                                        <label className="mb-1">
                                                            <strong>gender </strong>
                                                        </label>
                                                        <div className="d-flex ms-5">

                                                            <div className="m-2">
                                                                <label><strong>male</strong></label>
                                                                <Field
                                                                    type="radio"
                                                                    name="gender"
                                                                    /*    className="form-control" */
                                                                    value="male"
                                                                />
                                                            </div>
                                                            <div className="m-2">
                                                                <label><strong>female</strong></label>

                                                                <Field
                                                                    type="radio"
                                                                    name="gender"
                                                                    /* className="form-control" */
                                                                    value="female"
                                                                />
                                                            </div>
                                                            <div className="m-2">
                                                                <label><strong>other</strong></label>
                                                                <Field type="radio" name="gender" value="other" />
                                                            </div>
                                                            <ErrorMessage
                                                                name="gender"
                                                                component="div"
                                                                className="text-danger"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="mb-1">
                                                            <strong>Password</strong>
                                                        </label>
                                                        <Field
                                                            type="password"
                                                            name="password"
                                                            className="form-control"
                                                            placeholder="Enter your password"
                                                        />
                                                        <ErrorMessage
                                                            name="password"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="mb-1">
                                                            <strong>confirm Password</strong>
                                                        </label>
                                                        <Field
                                                            type="password"
                                                            name="confirm"
                                                            className="form-control"
                                                            placeholder="Enter your password"
                                                        />
                                                        <ErrorMessage
                                                            name="confirm"
                                                            component="div"
                                                            className="text-danger"
                                                        />
                                                    </div>
                                                    <div className="row d-flex justify-content-between mt-4 mb-2">
                                                        <div className="mb-3">
                                                            <div className="form-check custom-checkbox ms-1">
                                                                <Field
                                                                    type="checkbox"
                                                                    name="remember"
                                                                    className="form-check-input"
                                                                    id="basic_checkbox_1"
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="basic_checkbox_1"
                                                                >
                                                                    Remember my preference
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="mb-3">
                                                            <a href="page-forgot-password.html">
                                                                Forgot Password?
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary btn-block shadow"
                                                        >
                                                            Sign Me In
                                                        </button>
                                                    </div>
                                                </Form>
                                            </Formik>
                                            <div className="new-account mt-3">
                                                <p>
                                                    Already have an account?{" "}
                                                    <a className="text-primary" href="page-login.html">
                                                        Sign in
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
