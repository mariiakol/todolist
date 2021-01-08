import React, { Component } from "react"
import Task from '../src/Components/Task'
import './App.css'
import Input from '../src/Components/Input'

class App extends Component {
  constructor () {
    super();

    this.state = {
      tasks: [
        { id: 0, title: "Task 1", done: false },
        { id: 1, title: "Task 2", done: false },
        { id: 2, title: "Task 3", done: false },
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

  addTask = (task) => {
    this.setState(state => {
      let {tasks} = state;
      tasks.push({
        id: tasks.length !==0 ? tasks.length : 0,
        title: task,
        done:false
      })
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
      <Input addTask = {this.addTask}></Input>
    </div>
  )
}

}

export default App;
