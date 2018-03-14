import React from "react";

const Todo = (props) => {
    return
    <div className={style.Todo}>
        <li>{props.content.text}</li>
        <button type="button" onClick={() => props.remove(props.content.id)}>x</button>
    </div>
};

export default Todo;