import React, { useState } from 'react'
import '../App.css';
import { toast } from 'https://cdn.skypack.dev/wc-toast';

function Form({ todoList, setTodoList }) {

  const [newTodoText, setNewTodoText] = useState("");

  function addTodo(e) {

    if (e.key === 'Enter') {

      if (newTodoText !== "") {
        const newTodoItem = {
          id: todoList.length,
          text: newTodoText,
          checked: false
        }
        setTodoList([...todoList, newTodoItem]);
        setNewTodoText("");

        toast(
          "Eleman Başarıyla Eklendi...",
          {
            icon: {
              type: 'success'
            },
            duration: 4000,
            theme: {
              type: 'custom',
            },
          });

      } else {

        toast(
          "Kutucuk Boş Bırakılamaz...",
          {
            icon: {
              type: 'error'
            },
            duration: 4000,
            theme: {
              type: 'custom',
            },
          });

      }

    }


  }

  return (
    <>

      <input
        value={newTodoText}
        onKeyDown={(e) => addTodo(e)}
        onChange={(e) => setNewTodoText(e.target.value)}
        class="new-todo"
        placeholder="What needs to be done?"
        autoFocus />

    </>
  )
}

export default Form