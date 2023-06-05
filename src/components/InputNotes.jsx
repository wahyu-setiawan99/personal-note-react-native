import React from 'react';
import CharLimit from './CharLimit';

class InputNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleLenght: 0,
    };

    // binding event handler
    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => ({
      title: event.target.value,
      titleLenght: event.target.value.length,
    }));
  }

  onBodyChangeHandler(event) {
    this.setState(() => ({
      body: event.target.value,
    }));
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.submitNotes(this.state);
    this.setState(() => ({
      title: '',
      body: '',
      titleLenght: 0,
    }));
  }

  render() {
    return (
      <div className="note-input">
        <h2>Add notes</h2>
        <CharLimit number={this.state.titleLenght} />
        <form onSubmit={this.onSubmitHandler}>
          <input className="note-input__title" type="text" placeholder="Notes title ..." value={this.state.title} onChange={this.onTitleChangeHandler} required maxLength={50} />
          <textarea className="note-input__body" placeholder="Write your notes here ..." value={this.state.body} onChange={this.onBodyChangeHandler} required maxLength="300" />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default InputNotes;
