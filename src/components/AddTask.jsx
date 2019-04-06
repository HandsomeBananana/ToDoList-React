import React from 'react';
import './AddTask.css';




class AddTask extends React.Component {
  state = {
    text: '',
    active: false,
    date: new Date().toISOString().slice(0, 10)
  }

  handleActive = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    })
  }

  handleText = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = () => {

    console.log('działa')
    const { text, date, active } = this.state;
    const add = this.props.add(text, date, active)

    if (add) {
      this.setState({
        text: '',
        active: false,
        date: new Date().toISOString().slice(0, 10)
      })
    }
  }

  render() {

    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = new Date().toISOString().slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31"

    return (
      <div className='form'>
        <input type="text" placeholder='dodaj zadanie' value={this.state.text} onChange={this.handleText} />
        <input type="checkbox" checked={this.state.active} id='important' onChange={this.handleActive} />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input type="date" value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate} id='date' />
        <br />
        <button onClick={this.state.text === '' ? null : this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;