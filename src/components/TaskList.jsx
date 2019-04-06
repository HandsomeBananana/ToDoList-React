import React from 'react';
import Task from './Task';

const TaskList = props => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);
  console.log(active, done);


  done.sort((a, b) => {
    return b.finishDate - a.finishDate;
  })

  active.sort((a, b) => {

    a = a.text.toLowerCase();
    b = b.text.toLowerCase();

    if (a < b) {
      return 1
    }
    if (a > b) {
      return -1
    }
    return 0
  })

  const activeTasks = active.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change} />)

  const doneTasks = done.map(task => <Task key={task.id}
    task={task} delete={props.delete} change={props.change} />)


  return (
    <>
      <div className='active'>
        <h1>Lista Tasków:</h1>
        {activeTasks.length > 0 ? activeTasks : <p style={{ fontSize: '20px', color: "#e74c3c" }}>Brak zadań</p>}
      </div>
      <hr />
      <div className='done'>
        <h3>Zrobione zadania <em>{done.length}</em></h3>
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
}

export default TaskList;