import React from 'react'

const Button = ({
    task, ...props
}) => {
    return (
        <div className = "button">
            {task.done ? <p>✔</p> : <p>no</p>}
        </div>
    )
}

export default Button