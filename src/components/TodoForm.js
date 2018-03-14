import React from "react";
import style from "./TodoForm.css";

const TodoForm = (props) => (
    <form>
        <input type="text" value={props.value} onChange={(e) => props.fill(e)} placeholder="Task"/>
        <button type="submit" value="Submit" onClick={() => props.submit(props.input)}>Submit</button>
    </form>
);

export default TodoForm;