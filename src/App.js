import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

class App extends Component {
  counter = 2;
  state = {
    tasks: [
      {
        id: 0,
        text: 'eloeloeloeloelo',
        date: "2019-02-14",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'ayeayeaye',
        date: "2019-02-14",
        important: true,
        active: true,
        finishDate: null
      },
    ],
  }


  addTask = (text, date, important) => {
    console.log('dodano obiekt')
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
  }

  deleteTask = (id) => {
    console.log('delete ' + id)
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id)
    // tasks.splice(index, 1);
    // console.log(index)
    // this.setState({
    //   tasks: tasks,
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log('change ' + id)
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })

  }

  render() {
    return (<div className='App'>
      <AddTask add={this.addTask} />
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
    </div>);
  }
}

export default App;

