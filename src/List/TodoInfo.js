import React, { useState } from 'react'
import "../App.css"
import { toast } from 'https://cdn.skypack.dev/wc-toast';

function TodoInfo({ item, index, todoList, setTodoList }) {

    const [viewType, setViewType] = useState(0);
    const [color, setColor] = useState("black");
    const [newText, setNewText] = useState(item.text);

    function deleteTargetTodo(todoId) {

        const newList = todoList.filter((todo) => todo.id !== todoId);
        setTodoList(newList);
        toast(
            "Eleman Başarıyla Silindi...",
            {
                icon: {
                    type: 'success'
                },
                duration: 4000,
                theme: {
                    type: 'custom',
                },
            });

    }


    const changeChecked = (item, indexx) => {
        let newTodos = todoList.map((todo, index) => {
            if (parseInt(index) === parseInt(indexx)) {
                return { ...todo, checked: !todo.checked };
            }
            return todo;
        });
        setTodoList(newTodos);
    };

    const changeText = (e) => {
        if (e.key === 'Enter') {

            if (newText !== "") {

                let newTodos = todoList.map((todo, index) => {
                    if (parseInt(todo.id) === parseInt(item.id)) {
                        return { ...todo, text: newText };
                    }
                    return todo;
                });
                setTodoList(newTodos);
                setViewType(0);
                toast(
                    "Eleman Başarıyla Güncellendi...",
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

    };

    return (
        <>
            <wc-toast></wc-toast>
            {
                viewType === 0 ?
                    <li class={item.checked && "completed"}>
                        <div class="view">
                            <input
                                onClick={() => {
                                    changeChecked(item, index)
                                }}
                                defaultChecked={item.checked}
                                class="toggle"
                                type="checkbox" />
                            <label onClick={() => {
                                setViewType(1)
                            }}>{item.text}</label>
                            <button onClick={() => {
                                deleteTargetTodo(item.id);
                            }} class="destroy"></button>
                        </div>
                    </li>
                    :
                    <li>
                        <div class="editing">

                            <span onClick={() => {
                                setViewType(0);
                                setColor("black");
                                setNewText(item.text)
                            }} style={{
                                color: color,
                                float: 'left',
                                marginLeft: 15,
                                marginTop: 20,
                                cursor: 'pointer'
                            }} onMouseOver={() => {
                                setColor("gray");
                            }} onMouseOut={() => {
                                setColor("black");
                            }}>
                                X
                            </span>

                            <input
                                autoFocus
                                class="edit"
                                value={newText}
                                onKeyDown={(e) => changeText(e)}
                                onChange={e => setNewText(e.target.value)}
                                type="text" />

                        </div>
                    </li>
            }
        </>
    )
}

export default TodoInfo