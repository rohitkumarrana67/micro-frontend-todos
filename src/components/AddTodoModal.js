import React, { useState, createRef, useEffect } from "react";
import { Modal, Button, FormControl, Form } from "react-bootstrap";

const AddTodoModal = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");

  const handleClose = () => setShow(false);
  [];

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    if (name == "title") {
      setTitle(value);
    } else {
      setDiscription(value);
    }
  };

  const handleSave = async (e) => {
    const todo = {};
    todo.title = title;
    todo.description = description;
    const options = {
      method: "POST",
      body: JSON.stringify(todo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    await fetch("http://localhost:3000/todos", options)
      .then((response) => response.json())
      .then((json) => {
        props.addNewTodo();
        setShow(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD TODO
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#EBDEF0" }}>
          <Modal.Title>Add your Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <FormControl
            name="title"
            value={title}
            onChange={handleChange}
          ></FormControl>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            name="description"
            onChange={handleChange}
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#EBDEF0" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTodoModal;
