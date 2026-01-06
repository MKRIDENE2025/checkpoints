import { ListGroup } from "react-bootstrap";
import ToDoItem from "./ToDoItem";

const ToDoList =({ tasks, deleteTask, editTask, saveTask })=> {
  return (
    <ListGroup>
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
          saveTask={saveTask}
        />
      ))}
    </ListGroup>
  );
}

export default ToDoList;
