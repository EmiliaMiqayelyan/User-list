import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { remove } from "./userstore";
import { update } from './userstore';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function UserList() {
    const dispatch = useDispatch()
    const lists = useSelector(state => state.lists.value);

    const onRemove = (id) => {
        dispatch(remove(id))
    }

    const [show, setShow] = useState(false);
    const [list, setList] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const onUpdate = (editedToDo) => {
        setShow(true)
        setList(editedToDo)
    }

    const onUpdateList = (property, value) => {
        let newUpdate = { ...list };

        newUpdate[property] = value;
        setList(newUpdate);
    }

    const handleClose = () => {
        setShow(false);
    };

    const onSave = () => {
        dispatch(update(list))

        setList({
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });

        setShow(false);
    }

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Update</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map(list => (
                        <tr key={list.id}>
                            <td>{list.firstName}</td>
                            <td>{list.lastName}</td>
                            <td>{list.email}</td>
                            <td>{list.phone}</td>
                            <td> <Button variant="primary" onClick={() => onUpdate(list)}>Update</Button></td>
                            <td><Button variant="danger" onClick={() => onRemove(list.id)}>Remove</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="firstName"
                                placeholder="first name"
                                id="firstName"
                                name="firstName"
                                value={list.firstName}
                                onChange={(e) => onUpdateList('firstName', e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="lastName"
                                placeholder="last name"
                                id="lastName"
                                name="lastName"
                                value={list.lastName}
                                onChange={(e) => onUpdateList('lastName', e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="email address"
                                id="email"
                                name="email"
                                value={list.email}
                                onChange={(e) => onUpdateList('email', e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="phone"
                                placeholder="phone number"
                                id="phone"
                                name="phone"
                                value={list.phone}
                                onChange={(e) => onUpdateList('phone', e.target.value)} autoFocus
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
    );
}

export default UserList;