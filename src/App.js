import React, { Component } from "react"
import Task from '../src/Components/Task'
import './App.css'

class App extends Component {
  constructor () {
    super();

    this.state = {
      tasks: [
        { id: 0, title: "Send CV", done: true },
        { id: 1, title: "Create app", done: false },
        { id: 2, title: "Have a great time", done: false },
      ]
    }
  }

  doneTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    })
  }

  deleteTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    })
  }

render() {
  const {tasks} = this.state; //реструктуризация ЕС6
  const activeTasks = tasks.filter(task => !task.done)
  const doneTasks = tasks.filter (task => task.done)
  return (
    <div className = "App">
      <h1 className = "top">Active tasks: {activeTasks.length}</h1>
      {
        [...activeTasks, ...doneTasks].map(task => (
          <Task 
            doneTask = {() => this.doneTask(task.id)} 
            deleteTask = {() => this.deleteTask(task.id)}
            task = {task} 
            key = {task.id}>
          </Task>
        ))
      }
    </div>
  )
}

}

export default App;
