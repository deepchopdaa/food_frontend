import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
        remember: false,
    };
    const navigate = useNavigate("")
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });


    const onSubmit = (values) => {


        console.log("Form data", values);
        axios.post("http://localhost:3000/login", values)
            .then((res) => {
                console.log(res);
                if (!res.data.token) {
                    let notify = () => toast(res.data)  
                    notify()
                    
                } else {
                    localStorage.setItem("token", res.data.token)
                    let notify = () => toast("Login sucessfully")
                    notify()
                    navigate("/admin/")
                    console.log("data inserted sucesfull");
                }
            }).catch((err) => {
                console.log("data is not inserted")

            })

        // Add logic for submitting form data
    };



    return (
        <div className="container mt-0">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-12 mt-5">
                    <div className="card border-0">
                        <div className="card-body login-bx">
                            <div className="row mt-5">
                                <div className="col-xl-8 col-md-6 sign text-center">
                                    <div>
                                        <img
                                            src="images/login-img/pic-5.jpg"
                                            className="food-img"
                                            alt="Login Illustration"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 pe-0">
                                    <div className="sign-in-your">
                                        <div className="text-center mb-3">
                                            <img
                                                src="images/logo-full.png"
                                                className="mb-3"
                                                alt="Logo"
                                            />
                                            <h4 className="fs-20 font-w800 text-black">
                                                Create an Account
                                            </h4>
                                            <span className="dlab-sign-up">Sign Up</span>
                                        </div>
                                        <Formik
                                            initialValues={initialValues}
                                            validationSchema={validationSchema}
                                            onSubmit={onSubmit}
                                        >
                                            {({ values, handleChange, handleBlur }) => (
                                                <Form>
                                                    <div className="mb-3">
                                                        <label className="mb-1">
                                                            <strong>Email Address</strong>
                                                        </label>
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
                                                        <ToastContainer />
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                        <div className="text-center mt-3">
                                            <span>
                                            <Link to='/register'>Do not have Account ?</Link>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
