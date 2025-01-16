import React from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, Value } from "formik";
import * as Yup from "yup";
const category = () => {
    const initialValues = {
        name: "",
        status: "active"
    }
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("category name is required"),
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
                            <strong>category name</strong>
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
                    <div className="d-flex ms-5">

                        <div className="m-2">
                            <label><strong>Active</strong></label>
                            <Field
                                type="radio"
                                name="status"
                                /*    className="form-control" */
                                value="active"
                            />
                        </div>
                        <div className="m-2">
                            <label><strong>Inactive</strong></label>

                            <Field
                                type="radio"
                                name="status"
                                /* className="form-control" */
                                value="inactive"
                            />
                        </div>
                        <ErrorMessage
                            name="status"
                            component="div"
                            className="text-danger"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block shadow"
                        >
                            Add Category
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )

}

export default category
