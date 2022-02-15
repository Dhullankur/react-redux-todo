import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { editTodo } from "../store/actions";

const ModalBox = (props) => {
    const dispatch = useDispatch();
    console.log(props.todo);
    // const [showModal, setShow] = useState(false);
    const [todo, setTodo] = useState({ title: props.todo.title, description: props.todo.description, id: props.todo.id });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodo({ ...todo, [name]: value });
    }


    // const handleSaveChanges = () => {

    // setTodo({ title: "", description: "" })
    // console.log(todo.title);
    // console.log(todo.description);
    // }


    const handleClose = () => {
        props.handleClose()
    }

    const handleSaveChanges = (event) => {
        props.handleClose(todo);
        dispatch(editTodo(todo));
    }
    // const [name, setName] = useState()

    return (
        <Modal show={props.showModal} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>Please Edit here</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Title: </Form.Label>
                    <Form.Control type="text" name="title" value={todo.title} onChange={handleChange} />
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" name="description" value={todo.description} onChange={handleChange} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalBox;
