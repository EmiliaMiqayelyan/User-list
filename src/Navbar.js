import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdAddCircleOutline } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { create } from "./userstore"

let list = {
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
};

function NavbarPart() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const dispatch = useDispatch();

    const onSave = () => {
        dispatch(create(list))

        list = {
            id: uuid(),
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };
        setShow(false);
    }

    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <h2>User List</h2>
                        <Button variant="secondary" size="lg" onClick={handleShow}>
                            <MdAddCircleOutline />
                            <h6>Add New User</h6>
                        </Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="firstName"
                                placeholder="first name"
                                name="firstName"
                                onChange={(e) => list.firstName = e.target.value}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="lastName"
                                placeholder="last name"
                                name="lastName"
                                onChange={(e) => list.lastName = e.target.value}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email address"
                                name="email"
                                onChange={(e) => list.email = e.target.value}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="phone number"
                                name="phone"
                                onChange={(e) => list.phone = e.target.value}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="outline-secondary" onClick={onSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavbarPart;