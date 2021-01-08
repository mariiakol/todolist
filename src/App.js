import React, { Component } from "react"
import Task from '../src/Components/Task'

class App extends Component {
  constructor () {
    super();

    this.state = {
      tasks: [
        { id: 0, title: "Send CV", done: false },
        { id: 0, title: "Create app", done: true },
        { id: 0, title: "Have a great time", done: true },
      ]
    }
  }
render() {
  const {tasks} = this.state; //реструктуризация ЕС6
  const activeTasks = tasks.filter(task => !task.done)
  const doneTasks = tasks.filter (task => task.done)
  return (
    <div className = "app">
      <h1 className = "top">Active tasks: {activeTasks.length}</h1>
      {
        [...activeTasks, ...doneTasks].map(task => (
          <Task task = {task} key = {task.id}></Task>
        ))
      }
    </div>
  )
}

}

export default App;
