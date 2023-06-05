import React from 'react';
import { getInitialData, showFormattedDate } from '../utils';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';

class NoteApps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: '',

    };

    // bindingHandler
    this.onDeleteHandlerEvent = this.onDeleteHandlerEvent.bind(this);
    this.onArchiveHandlerEvent = this.onArchiveHandlerEvent.bind(this);
    this.onMoveHandlerEvent = this.onMoveHandlerEvent.bind(this);
    this.onSubmitHandlerEvent = this.onSubmitHandlerEvent.bind(this);
    this.SearchNoteEventHandler = this.SearchNoteEventHandler.bind(this);
  }

  onDeleteHandlerEvent(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandlerEvent(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(
        (note) => (note.id === id ? { ...note, archived: true } : note),
      ),
    }));
  }

  onMoveHandlerEvent(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(
        (note) => (note.id === id ? { ...note, archived: false } : note),
      ),
    }));
  }

  onSubmitHandlerEvent({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: showFormattedDate(new Date()),
        },
      ],
    }));
  }

  SearchNoteEventHandler({ keyword }) {
    this.setState(() => ({
      keyword,
    }));
  }

  render() {
    return (
      <div>
        <NoteAppHeader sitetitle="MyNotes" />
        <NoteAppBody
          keyword={this.state.keyword}
          notes={this.state.notes}
          onDelete={this.onDeleteHandlerEvent}
          onArchive={this.onArchiveHandlerEvent}
          onMove={this.onMoveHandlerEvent}
          submitNotes={this.onSubmitHandlerEvent}
          onSearch={this.SearchNoteEventHandler}
        />
      </div>
    );
  }
}

export default NoteApps;
