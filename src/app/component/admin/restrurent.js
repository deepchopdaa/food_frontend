import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, Value } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup";
import { Button, Table, Modal } from 'react-bootstrap';

const Restrurent = () => {
    const [show, setShow] = useState(false);
    const [editRestrurent, seteditRestrurent] = useState(null)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setdata] = useState(null);
    const [id, setid] = useState(null)
    const [name, setname] = useState(null)
    const [address, setaddress] = useState(null)
    const [area, setarea] = useState(null)
    const [city, setcity] = useState(null)
    const [state, setstate] = useState(null)
    const [country, setcountry] = useState([])
    const [countries, setCountries] = useState([]);
    const [states1, setStates1] = useState([]);
    const [cities1, setCities1] = useState([]);
    const [country_name1, setcountry_name1] = useState('');
    const [state_name1, setstate_name1] = useState('');
    const [city_name1, setcity_name1] = useState('');
    useEffect(() => {
        get();
        countryget();
    }, [])

    useEffect(() => {
        console.log(country_name1)

        axios.get(`http://localhost:3000/states/${country_name1}`)
            .then((response) => {
                setStates1(response.data);
                setCities1([]); // Clear cities
                console.log(response.data)
            })
            .catch((error) => {
                console.error('Error fetching states:', error);
            });

    }, [country_name1]);

    useEffect(() => {
        console.log(state_name1)
        if (state_name1) {
            axios.get(`http://localhost:3000/cities/${state_name1}`)
                .then((response) => {
                    setCities1(response.data);
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error('Error fetching cities:', error);
                });
        }
    }, [state_name1]);


    /* api get */
    

    const countryget = async () => {
        let data = await axios.get("http://localhost:3000/countryget")
        setcountry(data.data);
        console.log(data.data);
    }

    const get = async () => {
        const token = localStorage.getItem("token")
        console.log(token,"tokentoken")
        const resdata = await axios.get("http://localhost:3000/getrestrurent", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log(resdata,"resdataresdataresdataresdata")
        setdata(resdata.data);
        console.log(resdata.data)
    }

    /* update api */

    const updatedata = async (value) => {
        console.log("update reaquest data : ", value)
        let { name, address, area, country_name, state_name, city_name } = value;
        /* name = name,
        address = address,
        area = area, */
        country_name = country_name1
        state_name = state_name1
        city_name = city_name1
        const updateres = await axios.put(`http://localhost:3000/updaterestrurent/${id}`, { name, address, area, country_name, state_name, city_name })
        console.log(updateres);
        handleClose()
        get();
    }

    const selectReacord = (values) => {
        seteditRestrurent(values)
        setid(values._id)
        setname(values.name)
        setaddress(values.address)
        setarea(values.area)
        setcountry_name1(values.country_name)
        setstate_name1(values.state_name)
        setcity_name1(values.city_name)
        handleShow();
    }

    /* delete api */
    const deletedata = async (id) => {
        const deletedata = await axios.delete(`http://localhost:3000/deleterestrurent/${id}`);
        console.log(deletedata);
        get();
    }

    const initialValues = {
        name: "",
        address: "",
        area: "",
        country_name: "",
        state_name: "",
        city_name: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string()
            .required("restrurent name is required"),
        address: Yup.string()
            .required("address of restrurent is required"),
        area: Yup.string()
            .required("area of restrurent is required"),
        /*  country_name: Yup.string()
             .required("country of restrurent is required"),
         state_name: Yup.string()
             .required("state of restrurent is required"),
         city_name: Yup.string()
             .required("city of restrurent is required"), */
    })
    const onSubmit = async (values) => {
        console.log(values);
        console.log(country_name1)
        let { name, address, area, country_name, state_name, city_name } = values;
        country_name = country_name1
        state_name = state_name1
        city_name = city_name1
        const insert = await axios.post("http://localhost:3000/addrestrurent", { name, address, area, country_name, state_name, city_name })
            .then((res) => {
                console.log(res)
                let notify = () => toast("restrurent register successfully");
                notify();
                get();
            }).catch((err) => {
                console.log(err.response.data)
                let notify = () => toast("restrurent registeration failed");
                notify();
                console.log("restrurent registeration failed");
            })
        console.log(insert)
    }
    return (
        <>
            {/* restrurent get */}

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Area</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item) => (
                            <tr key={item?._id}>
                                <td>{item?.name}</td>
                                <td>{item?.address}</td>
                                <td>{item?.area}</td>
                                <td>{item?.country_name}</td>
                                <td>{item?.state_name}</td>
                                <td>{item?.city_name}</td>
                                <td><Button onClick={() => selectReacord(item)}>Update</Button></td>
                                <td><Button onClick={() => deletedata(item?._id)}>Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            {/* restrurent add */}
            <h4 className="text-center mb-4">Restaurant</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className='w-25 mx-auto' >
                    <div className="mb-3">
                        <label className="mb-1">
                            <strong>Restaurant name</strong>
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

                    <div className="mb-3">
                        <label className="form-label">
                            Country
                        </label>
                        <Field
                            as="select"
                            id="country"
                            name="country_name"
                            className="form-select"
                            value={country_name1}
                            onChange={(e) => setcountry_name1(e.target.value)}
                        >
                            <option value="">Select a country</option>
                            {country.map((country) => (
                                <option key={country._id} value={country._id}>
                                    {country.name}
                                </option>
                            ))}
                        </Field>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            State
                        </label>
                        <Field
                            as="select"
                            id="state"
                            className="form-select"
                            name="state_name"
                            value={state_name1}
                            onChange={(e) => setstate_name1(e.target.value)}
                        >
                            <option value="">Select a state</option>
                            {states1.map((state) => (
                                <option key={state._id} value={state._id}>
                                    {state.state_name}
                                </option>
                            ))}
                        </Field>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            City
                        </label>
                        <Field
                            as="select"
                            id="city"
                            className="form-select"
                            name="city_name"
                            value={city_name1}
                            onChange={(e) => setcity_name1(e.target.value)}
                        >
                            <option value="">Select a city</option>
                            {cities1.map((city) => (
                                <option key={city._id} value={city._id}>
                                    {city.city_name}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <div className="text-center">
                        <Button
                            type="submit"
                        >
                            Add Restrurent
                        </Button>
                    </div>
                </Form>
            </Formik>

            {/* edit form */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        enableReinitialize
                        initialValues={{
                            name: name || "",
                            address: address || "",
                            area: area || "",
                            country_name: country_name1 || "",
                            state_name: state_name1 || "",
                            city_name: city_name1 || ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={updatedata}
                    >
                        <Form>
                            <div className="mb-3">
                                <label className="mb-1">Restrument Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    onChange={(e) => { setname(e.target.value) }}
                                />
                                <ErrorMessage name="name" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label className="mb-1">Address</label>
                                <Field
                                    type="text"
                                    name="address"
                                    className="form-control" onChange={(e) => { setaddress(e.target.value) }}
                                />
                                <ErrorMessage name="address" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label className="mb-1">Area</label>
                                <Field
                                    type="text"
                                    name="area"
                                    className="form-control" onChange={(e) => { setarea(e.target.value) }}
                                />
                                <ErrorMessage name="area" component="div" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Country
                                </label>
                                <Field
                                    as="select"
                                    id="country"
                                    name="country_name"
                                    className="form-select"
                                    value={country_name1}
                                    onChange={(e) => setcountry_name1(e.target.value)}
                                >
                                    <option value="">Select a country</option>
                                    {country.map((country) => (
                                        <option key={country._id} value={country._id}>
                                            {country.name}
                                        </option>
                                    ))}
                                </Field>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    State
                                </label>
                                <Field
                                    as="select"
                                    id="state"
                                    className="form-select"
                                    name="state_name"
                                    value={state_name1}
                                    onChange={(e) => setstate_name1(e.target.value)}
                                >
                                    <option value="">Select a state</option>
                                    {states1.map((state) => (
                                        <option key={state._id} value={state._id}>
                                            {state.state_name}
                                        </option>
                                    ))}
                                </Field>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    City
                                </label>
                                <Field
                                    as="select"
                                    id="city"
                                    className="form-select"
                                    name="city_name"
                                    value={city_name1}
                                    onChange={(e) => setcity_name1(e.target.value)}
                                >
                                    <option value="">Select a city</option>
                                    {cities1.map((city) => (
                                        <option key={city._id} value={city._id}>
                                            {city.city_name}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className="text-center">
                                <Button
                                    type="submit"
                                    className="btn btn-primary mt-3"
                                >
                                    Update
                                </Button>
                            </div>
                        </Form>
                    </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Restrurent
