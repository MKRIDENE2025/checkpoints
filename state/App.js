import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import ToDoList from "./ToDoList";

const App=()=> {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, isEditing: false }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, isEditing: true } : task
    ));
  };

  const saveTask = (id, newText) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, text: newText, isEditing: false } : task
    ));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center text-primary mb-4">Ma To-Do List</h1>
          <Form className="d-flex mb-3">
            <Form.Control
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Ajouter une tâche..."
            />
     <Button variant="success" onClick={addTask}>
  <i className="bi bi-plus-circle "></i> 
</Button>

          </Form>
          <ToDoList
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            saveTask={saveTask}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
