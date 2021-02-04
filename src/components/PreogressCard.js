import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { DeleteForever, CheckCircle } from "@material-ui/icons";
import EditTodoModal from "./EditTodoModal";

const ProgressCard = (props) => {
  const handleSwitchToDone = (id) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify({ type: "Done" }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };
    fetch("http://localhost:3000/todos/" + id, options)
      .then((response) => response.json())
      .then((json) => props.done())
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    const options = { method: "DELETE" };
    fetch("http://localhost:3000/todos/" + id, options)
      .then(() => props.remove())
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-100 mb-4">
      <Card
        style={{
          borderTop: "4px solid #884EA0",
          boxShadow: "2px 2px 10px #ABB2B9",
        }}
      >
        <Card.Body>
          <Card.Title>{props.todo.title}</Card.Title>
          <Card.Text>{props.todo.description}</Card.Text>
          <Row>
            <Col>
              <CheckCircle
                className="text-success"
                fontSize="large"
                onClick={() => handleSwitchToDone(props.todo.id)}
              ></CheckCircle>
            </Col>
            <Col>
              <EditTodoModal
                todo={props.todo}
                edit={props.edit}
              ></EditTodoModal>
            </Col>
            <Col>
              <DeleteForever
                onClick={() => handleDelete(props.todo.id)}
                className="text-danger"
                fontSize="large"
              ></DeleteForever>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProgressCard;
