import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import { Modal, Button, Table } from "react-bootstrap";

const Category = () => {
    const [category, setCategory] = useState([]);
    const [show, setShow] = useState(false);
    const [editCategory, setEditCategory] = useState(null); // For editing a specific category

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialValues = {
        category_name: editCategory?.category_name || "",
        status: editCategory?.status || "active",
    };

    const validationSchema = Yup.object({   
        category_name: Yup.string().required("Category name is required"),
        status: Yup.string().required("Status is required"),
    });

    const insertData = async (values, resetForm) => {
        try {
            await axios.post("http://localhost:3000/addcategory", values);
            toast.success("Category added successfully");
            list(); // Refresh the category list
            resetForm();
        } catch (error) {
            toast.error("Failed to add category");
        }
    };

    const updateCategory = async (values) => {
        try {
            await axios.put(`http://localhost:3000/updatecategory/${editCategory._id}`, values);
            toast.success("Category updated successfully");
            list();
            handleClose();
        } catch (error) {
            toast.error("Failed to update category");
        }
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        if (editCategory) {
            await updateCategory(values);
        } else {
            await insertData(values, resetForm);
        }
        setSubmitting(false);
    };

    const list = async () => {
        try {
            const response = await axios.get("http://localhost:3000/getcategory");
            setCategory(response.data);
        } catch (error) {
            toast.error("Failed to fetch categories");
        }
    };

    useEffect(() => {
        list();
    }, []);

    const handleEdit = (category) => {
        setEditCategory(category);
        handleShow();
    };

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/deletecategory/${id}`);
            toast.success("Category deleted successfully");
            list();
        } catch (error) {
            toast.error("Failed to delete category");
        }
    };

    return (
        <>
            <ToastContainer />
            <Table>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((item) => (
                        <tr key={item._id}>
                            <td>{item.category_name}</td>
                            <td>{item.status}</td>
                            <td>
                                <Button  variant="success" onClick={() => handleEdit(item)}>Update</Button>
                            </td>
                            <td>
                                <Button variant="secondary" onClick={() => deleteCategory(item._id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Add/Edit Form */}
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="p-4 border rounded shadow-sm bg-white">
                        <h3 className="text-center mb-4 text-dark">Category Form</h3>

                        {/* Category Name Field */}
                        <div className="form-group mb-3 w-25 mx-auto">
                            <label htmlFor="category_name" className="form-label">
                                <strong>Category Name</strong>
                            </label>
                            <Field
                                type="text"
                                name="category_name"
                                id="category_name"
                                className="form-control"
                                placeholder="Enter category name"
                            />
                            <ErrorMessage name="category_name" component="div" className="text-danger mt-1" />
                        </div>

                        {/* Status Radio Buttons */}
                        <div className="form-group mb-3 w-25 mx-auto">
                            <label className="form-label">
                                <strong>Status</strong>
                            </label>
                            <div className="d-flex align-items-center ">
                                <div className="form-check me-3  mx-auto">
                                    <Field
                                        type="radio"
                                        name="status"
                                        value="active"
                                        id="status_active"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="status_active" className="form-check-label ms-1">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check mx-auto">
                                    <Field
                                        type="radio"
                                        name="status"
                                        value="inactive"
                                        id="status_inactive"
                                        className="form-check-input"
                                    />
                                    <label htmlFor="status_inactive" className="form-check-label ms-1">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                            <ErrorMessage name="status" component="div" className="text-danger mt-1" />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="btn btn-primary px-5"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>


            {/* Modal for Update */}
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            category_name: editCategory?.category_name || "",
                            status: editCategory?.status || "active",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="mb-3">
                                    <label className="mb-1">Category Name</label>
                                    <Field
                                        type="text"
                                        name="category_name"
                                        className="form-control"
                                    />
                                    <ErrorMessage name="category_name" component="div" className="text-danger" />
                                </div>
                                <div className="d-flex ms-5">
                                    <div className="m-2">
                                        <label>Active</label>
                                        <Field type="radio" name="status" value="active" />
                                    </div>
                                    <div className="m-2">
                                        <label>Inactive</label>
                                        <Field type="radio" name="status" value="inactive" />
                                    </div>
                                </div>
                                <ErrorMessage name="status" component="div" className="text-danger" />
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-primary mt-3"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Updating..." : "Update"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Category;



/* import React, { useState, useEffect } from 'react'
import axios from "axios";
//import { Form } from "react-bootstrap"; 
import { Formik, Field, Form, ErrorMessage, Value } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import { Modal, Button } from "react-bootstrap"
import { Table } from 'react-bootstrap';
const Category = () => {
    const [category, setcategory] = useState([]);
    const [category_name, setcategory_name] = useState("");
    const [status, setstatus] = useState("");
    const [id, setid] = useState(null);
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
    const insertdata = (value) => {
        try {
            axios.post("http://localhost:3000/addcategory", value)
                .then((res) => {
                    console.log(res)
                    let notify = () => toast("category added successfully");
                    notify();
                    list();
                }).catch((err) => {
                    console.log(err.response.data)
                    let notify = () => toast("category added failed");
                    notify();
                    console.log("category added failed");
                })
        } catch (e) {
            console.log("category not added successfully")
        }

    }
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log("Form Submitted", values);
        setSubmitting(false); // Stop the submitting state
        resetForm(); // Reset the form after submission
        insertdata(values)
      };

    const list = () => {
        try {
            console.log("list function called")
            axios.get("http://localhost:3000/getcategory")
                .then((res) => {
                    console.log(res.data)
                    setcategory(res.data)
                    if (res.status === 200) {
                        console.log("data featch successfully")
                    } else {
                        console.log("data feaching error")
                    }
                })
        } catch (e) {
            console.log('dara fetching error', e)
        }
    }
    useEffect(() => {
        list();
    }, []);

    const setdata = (value) => {
        setid(value._id);
        setcategory_name(value.category_name);
        setstatus(value.status)
        console.log(id)
        console.log(category_name)
        console.log(status)
        handleShow();
    }
    const updatecategory = (event) => {
        console.log(category_name);
        console.log(status);
        try {
            event.preventDefault();
            axios.put(`http://localhost:3000/updatecategory/${id}`, { category_name, status })
                .then((res) => {
                    console.log(res.data);
                    list();
                    handleClose();
                })
                .catch((e) => {
                    console.log("updated record api error", e);
                })
        } catch (e) {
            console.log("data not updated", e)
        }
    }
    const deletedata = (id) => {
        axios.delete(`http://localhost:3000/deletecategory/${id}`)
            .then((res) => {
                console.log(res.data)
                let notify = () => toast("Category Deleted");
                notify();
                list();
            }).catch(() => {
                let notify = () => toast("Category not Deleted");
                notify();
            })
    }
    const deletecategory = (reacordid) => {
        const id = reacordid;
        console.log(id)
        deletedata(id)
    }
    return (
        <>
            <ToastContainer></ToastContainer>
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
                                <td><Button onClick={() => { setdata(item) }}>update</Button></td>
                                <td><Button onClick={() => { deletecategory(item._id) }}>Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <h4 className="text-center mb-4">Sign up your account</h4>
            <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          // Category Name Field 
          <div className="mb-3">
            <label className="mb-1">
              <strong>Category Name</strong>
            </label>
            <Field
              type="text"
              name="category_name"
              className="form-control"
              placeholder="Enter category name"
            />
            <ErrorMessage
              name="category_name"
              component="div"
              className="text-danger"
            />
          </div>

           //Status Radio Buttons 
          <div className="d-flex ms-5">
            <div className="m-2">
              <label>
                <strong>Active</strong>
              </label>
              <Field type="radio" name="status" value="active" />
            </div>
            <div className="m-2">
              <label>
                <strong>Inactive</strong>
              </label>
              <Field type="radio" name="status" value="inactive" />
            </div>
          </div>
          <ErrorMessage name="status" component="div" className="text-danger" />

          // Submit Button 
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mt-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
            // update model 
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                        <Form.Group className="mb-3" controlId="categoryName">
                            <Form.Label className="fw-semibold">Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter category name"
                                value={category_name}
                                onChange={(e) => setcategory_name(e.target.value)}
                            />
                        </Form.Group>

                      
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Status</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label="Active"
                                    name="status1"
                                    type="radio"
                                    id="statusActive"
                                    value="active"
                                    onChange={(e) => setstatus(e.target.value)}
                                    checked={status === "active"}
                                />
                                <Form.Check
                                    inline
                                    label="Inactive"
                                    name="status1"
                                    type="radio"
                                    id="statusInactive"
                                    value="inactive"
                                    onChange={(e) => setstatus(e.target.value)}
                                    checked={status === "inactive"}
                                />
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updatecategory}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )

}

export default Category
 */ 