import React from "react"
import Button from "./Button"

const Task = ({
    task, ...props
}) => {
 
    const className = 'task' + (task.done ? 'task-done' : '')
    return (
        <div className = {className}>
            <p>{task.title}</p>
            <Button task = {task}></Button>
        </div>
    )
}

export default Task