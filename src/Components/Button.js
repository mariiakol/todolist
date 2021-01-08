import React from 'react'

const Button = ({
    task, doneTask, deleteTask
}) => {
    return (
        <div className = "action-btn">
            {!task.done ? <p onClick = {doneTask}>+</p> : <p onClick = {deleteTask}>-</p>}
        </div>
    )
}

export default Button