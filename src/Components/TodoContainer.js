import React, { useEffect, useState } from "react";
import "./TodoContainer.css";
import Form from "./InputField";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import TodoText from "./TodoText";
import Dropdown from "./Dropdown";


function TodoContainer() {

  const [todoValue, setTodoValue] = useState("");
  const [editTodo, setEditTodo] = useState(false);
  const [editTodoValue, setEditTodoValue] = useState("");
  const [editTodoID, setEditTodoId] = useState(null);
  const [dropdownValue,setDropdownValue] = useState('')
  const [todoText, setTextTodos] = useState([
    {
      id: uuidv4(),
      todo: "Hello World, myself Shikhar Singh",
      completed: false,
      date:`30/5`
    },
    {
      id: uuidv4(),
      todo: "Let's Connect on LinkedIn and GitHub",
      completed: false,
      date:`30/5`
    },
  ]);

  function handleTodoForm(e) {

    e.preventDefault();
  
    let newTodo = {
      id: uuidv4(),
      todo: todoValue,
      completed: false,
      date:`${new Date().getDate()}/${new Date().getMonth() + 1}`
    };
    setTextTodos([...todoText, newTodo]); //Updating the todo Value by Keeping the Previous one in List
   
    setTodoValue(""); //Clearing the Input Value Field after the form submits
  }



  function handleEditTodo(id, todo) {
    setEditTodoValue(todo);
    setEditTodo(true);
    setEditTodoId(id);
  
  }

  function handleDeleteTodo(todo,id){
   
    setTextTodos(todoText.filter((todo) => todo.id !== id));
  }
  const handleEditTodoSubmit = (e) => {
    e.preventDefault();

     setTextTodos((prevTodo) => {
     return prevTodo.map((todo) =>
        todo.id === editTodoID ? { ...todo, todo: editTodoValue } : todo
      );
    });

    setEditTodoValue("");
    setEditTodoId(null);
    setEditTodo(false);
   
  };

  function  handleSelectOption(e){
    console.log(e.target.value)
    
    setDropdownValue(e.target.value)
 
}

const getFilteredTodos = () => {
  switch (dropdownValue) {
    case "completed":
      return todoText.filter((todo) => todo.completed);
    case "incompleted":
      return todoText.filter((todo) => !todo.completed);
    case "all":
    default:
      return todoText;
  }
};

  return (
    <div>
      <div className="parent-container">
        <div className="child-container">
          <h1 style={{ marginBottom: "9px" }} className="todo-head">Todo List</h1>

          <Dropdown  handleDropdown={handleSelectOption}
            
          />
          {editTodo ? (
            <Form
              formSubmit={handleEditTodoSubmit}
              buttonText={"Save"}
              formValue={editTodoValue}
              setFormValue={setEditTodoValue}
            />
          ) : (
            <Form
              buttonText={"Add Todo"}
              formSubmit={handleTodoForm}
              formValue={todoValue}
              setFormValue={setTodoValue}
            />
          )}

          <div className="todo-container">
            <TodoText
              todos={getFilteredTodos()}
              handleEdit={handleEditTodo}
              setTodosCompleted={setTextTodos}
              handleDelete={handleDeleteTodo}
            //  date={date}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
