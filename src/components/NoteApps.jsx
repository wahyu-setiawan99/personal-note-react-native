import React from 'react';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';
import getInitialNotes from '../utils/notes';
import showFormattedDate from '../utils/formatDate';

class NoteApps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialNotes(),
      keyword: '',

    };

    // bindingHandler
    this.onDeleteHandlerEvent = this.onDeleteHandlerEvent.bind(this);
    this.onArchiveHandlerEvent = this.onArchiveHandlerEvent.bind(this);
    this.onMoveHandlerEvent = this.onMoveHandlerEvent.bind(this);
    this.onSubmitHandlerEvent = this.onSubmitHandlerEvent.bind(this);
    this.onSearchNoteEventHandler = this.onSearchNoteEventHandler.bind(this);
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
          id: `note-${new Date()}`,
          title,
          body,
          archived: false,
          createdAt: showFormattedDate(new Date()),
        },
      ],
    }));
  }

  onSearchNoteEventHandler({ keyword }) {
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
          onSubmitNotes={this.onSubmitHandlerEvent}
          onSearch={this.onSearchNoteEventHandler}
        />
      </div>
    );
  }
}

export default NoteApps;
