import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Todo = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Container fluid className="mt-2" style={{ backgroundColor: "#EBF5FB" }}>
        <h3 className="text-center">MANAGE YOUR TODOS HERE</h3>
        <Row className="p-3">
          <Col>
            <Button className="btn-block">ADD</Button>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid className="mt-2">
        <Row className="text-center">
          <Col>
            <h4
              className="p-2"
              style={{ backgroundColor: "#F1948A", color: "white" }}
            >
              TO-DO
            </h4>
          </Col>
          <Col>
            <h4
              className="p-2"
              style={{ backgroundColor: "#F8C471", color: "white" }}
            >
              IN-PROGRESS
            </h4>
          </Col>
          <Col>
            <h4
              className="p-2"
              style={{ backgroundColor: "#82E0AA", color: "white" }}
            >
              DONE
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Todo;
