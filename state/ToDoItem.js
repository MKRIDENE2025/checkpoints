import { useState } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";

const ToDoItem=({ task, deleteTask, editTask, saveTask })=> {
  const [editedText, setEditedText] = useState(task.text);

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      {task.isEditing ? (
        <>
          <Form.Control
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="me-2"
          />
          <Button variant="primary" className="me-2" onClick={() => saveTask(task.id, editedText)}>
            <i className="bi bi-check-circle"></i> 
          </Button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <div>
            <Button variant="warning" size="sm" className="me-2" onClick={() => editTask(task.id)}>
              <i className="bi bi-pencil-square"></i> 
            </Button>
            <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
              <i className="bi bi-trash"></i> 
            </Button>
          </div>
        </>
      )}
    </ListGroup.Item>
  );
}

export default ToDoItem;
