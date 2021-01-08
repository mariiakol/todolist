import React from "react"
import Button from "./Button"
import '../../src/App.css'

const Task = ({
    task, deleteTask, doneTask
}) => {
 
    const className = 'task ' + (task.done ? 'task-done' : '')
    return (
        <div className = {className}>
            <p>{task.title}</p>
            <Button task = {task}
            doneTask = {doneTask}
            deleteTask = {deleteTask}></Button>
        </div>
    )
}

export default Task