import React from "react";
import style from "./TodoForm.css";


const TodoForm = (props) => (	
    <form>
        <input type="text" value={props.value} onChange={(e) => props.fill(e)}/>
        <button type="submit" value="Submit" onClick={(e) => props.submit(props.input, e)}>Submit</button>
    </form>
);

export default TodoForm;

