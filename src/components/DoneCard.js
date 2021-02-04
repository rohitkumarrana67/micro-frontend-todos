import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { DeleteForever } from "@material-ui/icons";

const DoneCard = (props) => {
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
              <DeleteForever
                className="text-danger"
                fontSize="large"
                onClick={() => handleDelete(props.todo.id)}
              ></DeleteForever>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DoneCard;
