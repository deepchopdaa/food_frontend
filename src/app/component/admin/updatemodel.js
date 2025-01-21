import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap"
const Updatemodel = ({ data }) => {
    const { show, invokeshow } = useState(false)
    const { name, setname } = useState(data.category_name);
    const { status, setstatus } = useState(data.status);
    const initshow = () => {
        return invokeshow(!show)
    }
    useEffect(() => {
        
    })
    return (
        <>
            <Button onClick={initshow}>Update</Button>
            <Modal>
                <Modal.Header>
                    <Modal.Title>Update Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <label>Category name</label>
                        <input type='text' value={name} onChange={(e) => setname(e.target.value)} name='name' />
                        <label>Active</label>
                        <input type='radio' value={status} onChange={(e) => setstatus(e.target.value)} name='status' />
                        <label>Inactive</label>
                        <input type='radio' value={status} onChange={(e) => setstatus(e.target.value)} name='status' />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={initshow}>Update</Button>
                    <Button variant='dark' onClick={initshow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Updatemodel
