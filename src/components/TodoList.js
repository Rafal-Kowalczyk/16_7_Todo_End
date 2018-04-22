import React from "react";
import style from "./TodoList.css";
import Todo from './Todo.js';

const TodoList = (props) => {
    const todoItem = props.items.map((item) => {
        return <li content={item} key={item.id}>
            {item.text}
            <button type="button" onClick={() => props.remove(item.id)}>x</button>
        </li>
    });
    return <ul className={"style.TodoList"}>{todoItem}</ul>
}

export default TodoList;