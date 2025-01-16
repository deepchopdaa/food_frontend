import React from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, Value } from "formik";
import * as Yup from "yup";
const restrurent = () => {
    const initialValues = {
        name: "",
        address: "",
        area: ""
    }
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("restrurent name is required"),
        address: Yup.string()
            .required("address of restrurent is required"),
        area: Yup.string()
            .required("area of restrurent is required")
    })
    const onSubmit = (value) => {
        console.log(value)
    }
    return (
        <>
            <h4 className="text-center mb-4">Sign up your account</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label className="mb-1">
                            <strong>Restrurent name</strong>
                        </label>
                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your full name"
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="mb-1">
                            <strong>Address</strong>
                        </label>
                        <Field
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Enter your Address"
                        />
                        <ErrorMessage
                            name="address"
                            component="div"
                            className="text-danger"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="mb-1">
                            <strong>Area</strong>
                        </label>
                        <Field
                            type="text"
                            name="area"
                            className="form-control"
                            placeholder="Enter your Area name"
                        />
                        <ErrorMessage
                            name="area"
                            component="div"
                            className="text-danger"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block shadow"
                        >
                            Add Restrurent
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default restrurent
