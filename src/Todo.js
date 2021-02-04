import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TodoCard from "./components/TodoCard";
import ProgressCard from "./components/PreogressCard";
import AddTodoModal from "./components/AddTodoModal";
import DoneCard from "./components/DoneCard";

const Todo = () => {
  const [todoState, setTodoState] = useState([]);
  const [progressState, setProgressState] = useState([]);
  const [doneState, setDoneState] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/todos?type=do")
        .then((res) => res.json())
        .then((res) => setTodoState(res))
        .catch((error) => console.log(error));
      await fetch("http://localhost:3000/todos?type=progress")
        .then((res) => res.json())
        .then((res) => setProgressState(res))
        .catch((error) => console.log(error));
      await fetch("http://localhost:3000/todos?type=done")
        .then((res) => res.json())
        .then((res) => setDoneState(res))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);

  const addNewTodo = async () => {
    await fetch("http://localhost:3000/todos?type=do")
      .then((res) => res.json())
      .then((res) => setTodoState(res))
      .catch((error) => console.log(error));
  };

  const handleDeleteProgress = async () => {
    await fetch("http://localhost:3000/todos?type=progress")
      .then((res) => res.json())
      .then((res) => setProgressState(res))
      .catch((error) => console.log(error));
  };

  const handleDeleteDone = async () => {
    await fetch("http://localhost:3000/todos?type=done")
      .then((res) => res.json())
      .then((res) => setDoneState(res))
      .catch((error) => console.log(error));
  };

  const switchIntoProgress = async () => {
    await fetch("http://localhost:3000/todos?type=do")
      .then((res) => res.json())
      .then((res) => setTodoState(res))
      .catch((error) => console.log(error));
    await fetch("http://localhost:3000/todos?type=progress")
      .then((res) => res.json())
      .then((res) => setProgressState(res))
      .catch((error) => console.log(error));
  };

  const switchToDoneFromTodo = async () => {
    await fetch("http://localhost:3000/todos?type=do")
      .then((res) => res.json())
      .then((res) => setTodoState(res))
      .catch((error) => console.log(error));
    await fetch("http://localhost:3000/todos?type=done")
      .then((res) => res.json())
      .then((res) => setDoneState(res))
      .catch((error) => console.log(error));
  };

  const switchToDoneFromProgress = async () => {
    await fetch("http://localhost:3000/todos?type=progress")
      .then((res) => res.json())
      .then((res) => setProgressState(res))
      .catch((error) => console.log(error));
    await fetch("http://localhost:3000/todos?type=done")
      .then((res) => res.json())
      .then((res) => setDoneState(res))
      .catch((error) => console.log(error));
  };

  let todos = null;
  let progress = null;
  let done = null;

  if (todoState) {
    todos = (
      <div style={{ width: "85%" }}>
        {todoState.map((todo, index) => {
          return (
            <TodoCard
              todo={todo}
              index={index}
              switchIntoProgress={switchIntoProgress}
              switchToDoneFromTodo={switchToDoneFromTodo}
              handleTodoDelete={addNewTodo}
              handleTodoEdit={addNewTodo}
            ></TodoCard>
          );
        })}
      </div>
    );
  }

  if (progressState) {
    progress = (
      <div style={{ width: "85%" }}>
        {progressState.map((todo, index) => {
          return (
            <ProgressCard
              todo={todo}
              done={switchToDoneFromProgress}
              remove={handleDeleteProgress}
              edit={handleDeleteProgress}
            ></ProgressCard>
          );
        })}
      </div>
    );
  }

  if (doneState) {
    done = (
      <div style={{ width: "85%" }}>
        {doneState.map((todo, index) => {
          return <DoneCard todo={todo} remove={handleDeleteDone}></DoneCard>;
        })}
      </div>
    );
  }

  return (
    <div style={{ height: "150vh" }}>
      <Container
        fluid
        className="mt-2"
        style={{ backgroundColor: "#EBF5FB", height: "120px" }}
      >
        <h3 className="text-center">MANAGE YOUR TODOS HERE</h3>
        <Row className="p-3">
          <Col>
            <AddTodoModal addNewTodo={addNewTodo} />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid className="mt-2" style={{ height: "90%" }}>
        <Row className="text-center h-100">
          <Col className="h-100 px-0" style={{ backgroundColor: "#FDEDEC" }}>
            <h4
              className="p-2"
              style={{ backgroundColor: "#F1948A", color: "white" }}
            >
              TO-DO
            </h4>
            <div className="d-flex justify-content-center mt-4">{todos}</div>
          </Col>
          <Col className="h-100 px-0" style={{ backgroundColor: "#FEF5E7" }}>
            <h4
              className="p-2"
              style={{ backgroundColor: "#F8C471", color: "white" }}
            >
              IN-PROGRESS
            </h4>
            <div className="d-flex justify-content-center mt-4">{progress}</div>
          </Col>
          <Col className="h-100 px-0" style={{ backgroundColor: "#EAFAF1" }}>
            <h4
              className="p-2"
              style={{ backgroundColor: "#82E0AA", color: "white" }}
            >
              DONE
            </h4>
            <div className="d-flex justify-content-center mt-4">{done}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Todo;
