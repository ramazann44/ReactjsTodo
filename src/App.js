import React, { useState } from 'react'
import './App.css';
import Form from './Form/Form'
import List from './List/List'
import Menu from './Menu/Menu'

function App() {

  const firstList = [
    {
      id: 0,
      text: "Learn JavaScript",
      checked: true
    }, {
      id: 1,
      text: "Learn React",
      checked: false
    }, {
      id: 2,
      text: "Have a life!",
      checked: false
    },
  ];

  const [todoList, setTodoList] = useState(firstList);
  const [menuType, setMenuType] = useState(0);

  return (
    <div className="App">
      <section class="todoapp">
        <header class="header">
          <h1>Todos</h1>

          <Form
            todoList={todoList}
            setTodoList={setTodoList}
          />

        </header>

        <List
          todoList={todoList}
          setTodoList={setTodoList}
          menuType={menuType}
        />

        {
          todoList.length !== 0 &&
          <Menu
            todoList={todoList}
            setTodoList={setTodoList}
            menuType={menuType}
            setMenuType={setMenuType}
          />
        }

      </section>

      <footer class="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div >
  );
}

export default App;
