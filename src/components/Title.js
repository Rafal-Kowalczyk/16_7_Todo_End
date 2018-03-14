import React from "react";


const Title = (props) => {
    return (
        <div className="header">
            <h1>Task board</h1>
            <p>You have {props.counter} tasks to do</p>
        </div>
    )
}

export default Title;