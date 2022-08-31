import React, { useState } from 'react'
import "../App.css"

function Menu({ todoList, setTodoList, menuType, setMenuType }) {

  const [selectedAll, setSelectedAll] = useState(false)

  function clearCompleted() {

    const newList = todoList.filter((todo) => todo.checked !== true);
    setTodoList(newList);

  }

  function selectAll() {

    if (selectedAll) {
      let newTodos = todoList.map((todo, index) => {
        if (parseInt(index) !== parseInt(-1)) {
          return { ...todo, checked: false };
        }
        return todo;
      });
      setTodoList(newTodos);
    } else {
      let newTodos = todoList.map((todo, index) => {
        if (parseInt(index) !== parseInt(-1)) {
          return { ...todo, checked: true };
        }
        return todo;
      });
      setTodoList(newTodos);
    }

  }

  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>
          {todoList.filter(todo => todo.checked === false).length + " "}
        </strong>
        items left
      </span>

      <ul class="filters">
        <li>
          <button style={{ cursor: "pointer" }} onClick={() => { setSelectedAll(!selectedAll); selectAll(); }}>Select All</button>
        </li>
        <li>
          <button style={{ cursor: "pointer", marginLeft: 10 }} onClick={() => { setMenuType(0) }} class="selected">All</button>
        </li>
        <li>
          <button style={{ margin: "0px 10px", cursor: "pointer" }} onClick={() => { setMenuType(1) }}>Active</button>
        </li>
        <li>
          <button style={{ cursor: "pointer" }} onClick={() => { setMenuType(2) }}>Completed</button>
        </li>
      </ul>

      <button onClick={() => {
        clearCompleted();
      }} class="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Menu