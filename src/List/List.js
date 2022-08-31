import React from 'react'
import "../App.css"
import TodoInfo from './TodoInfo'

function List({ todoList, setTodoList, menuType }) {

  return (
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      <label for="toggle-all">
        Mark all as complete
      </label>

      <ul class="todo-list">

        {
          menuType === 0 &&
          todoList.map((item, index) => {
            return (
              <TodoInfo
                item={item}
                index={index}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            )
          })
        }

        {
          menuType === 1 &&
          todoList.filter(todo => todo.checked === false).map((item, index) => {
            return (
              <TodoInfo
                item={item}
                index={index}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            )
          })
        }

        {
          menuType === 2 &&
          todoList.filter(todo => todo.checked === true).map((item, index) => {
            return (
              <TodoInfo
                item={item}
                index={index}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            )
          })
        }

      </ul>
    </section>
  )
}

export default List