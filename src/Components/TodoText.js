import React, { useEffect, useState } from "react";
import "./TodoContainer.css";
import Button from "./Button";
import "./Input.css";

function TodoText({ todos, handleEdit, setTodosCompleted ,date,handleDelete}) {
  const [checkedInput, setChecked] = useState(false);
  const [checkId, setCheckId] = useState(null);
 

  function handleCompleted(id) {
    setTodosCompleted((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item   
      )
    );
    
  }

  

    
  return (
    <div className="todo-text">
      {todos.map((item,index) => (
        <div key={item.id} className="todo-box">
          <div className="sr-no">
            <h3>{index + 1}</h3>
          </div>
          <div className="main-text">
            {item.completed ? (
              <del>
                <h3>{item.todo}</h3>    
         

              </del>
            ) : (
              <>
              <h3>{item.todo}</h3>
              <h5 className="date-created">Date Created-{item.date}</h5>
              </>
            )}
          </div>
          <div className="button-container">
            <div className="checkbox">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
                className='checkbox'
              />
            </div>
            <Button buttonText={"Edit"}  handleClick={() => handleEdit(item.id,item.todo)} />
            <Button className="submit-button"  buttonText={"Delete"} handleClick={() => handleDelete(item.todo,item.id)}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoText;
