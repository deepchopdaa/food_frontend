import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, Value } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
const Category = () => {
    const [category, setcategory] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const initialValues = {
        category_name: "",
        status: "active"
    }
    const validationSchema = Yup.object({
        category_name: Yup.string()
            .required("category name is required"),
    })
    const onSubmit = (value) => {
        console.log(value)
        axios.post("http://localhost:3000/addcategory", value)
            .then((res) => {
                console.log(res)
                let notify = () => toast("category added successfully");
                notify();
            }).catch((err) => {
                console.log(err.response.data)
                let notify = () => toast("category added failed");
                notify();
                console.log("category added failed");
            })
    }
    useEffect(() => {
        axios.get("http://localhost:3000/getcategory")
            .then((res) => {
                console.log(res.data)
                setcategory(res.data)
            }).catch((err) => {
                console.log(err.data)
                setcategory("not not fetched")
            })
    }, [])

    const updatecategory = (record) => {
        initialValues.category_name=record.category_name
        initialValues.status=record.status
    }
    
    const deletecategory = (reacordid) => {
        const id=reacordid;
        console.log(id)
        axios.delete(`http://localhost:3000/deletecategory/${id}`)
            .then((res) => {
                console.log(res.data)
                let notify = () => toast("Category Deleted");
                notify();
            }).catch(() => {
                let notify = () => toast("Category not Deleted");
                notify();
            })
    }
    return (
        <>
            <Table>
                <thead>
                    <th>category Name</th>
                    <th>status</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    {
                        category?.map((item) => (
                            <tr key={item._id}>
                                <td>{item.category_name}</td>
                                <td>{item.status}</td>
                                <td><Button onClick={(item) => { updatecategory(item) }}>update</Button></td>
                                <td><Button onClick={(item) => { deletecategory(item._id) }}>Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
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
                            name="category_name"
                            className="form-control"
                            placeholder="Enter your full name"
                        />
                        <ErrorMessage
                            name="category_name"
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
                        <button type="submit" className="btn btn-primary btn-block shadow">
                            Add Category
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )

}

export default Category
