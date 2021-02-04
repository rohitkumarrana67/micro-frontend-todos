import React, { useState, createRef } from "react";
import { Modal, Button, FormControl, Form } from "react-bootstrap";
import { Edit } from "@material-ui/icons";

const EditTodoModal = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(props.todo.title);
  const [description, setDiscription] = useState(props.todo.description);

  const handleClose = () => setShow(false);

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

  const handleSave = (e) => {
    const todo = {};
    todo.title = title;
    todo.description = description;
    const options = {
      method: "PATCH",
      body: JSON.stringify(todo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    fetch("http://localhost:3000/todos/" + props.todo.id, options)
      .then((response) => response.json())
      .then((json) => {
        props.edit();
        setShow(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Edit
        variant="primary"
        onClick={handleShow}
        className="text-secondary"
        fontSize="large"
      ></Edit>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#EBDEF0" }}>
          <Modal.Title>Edit your Todo</Modal.Title>
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

export default EditTodoModal;
