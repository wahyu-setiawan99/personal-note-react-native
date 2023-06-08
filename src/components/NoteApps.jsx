import React from 'react';
import PropTypes from 'prop-types';
import NoteAppBody from './NoteAppBody';
import NoteAppHeader from './NoteAppHeader';
import { getInitialNotes } from '../utils/notes';

class NoteApps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialNotes(),
      keyword: props.defaultKeyword || '',

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
          id: `notes-${+new Date()}`,
          title,
          body,
          archived: false,
          createdAt: new Date().toDateString(),
        },
      ],
    }));
  }

  onSearchNoteEventHandler(keyword) {
    this.setState(() => ({
      keyword,
    }));

    this.props.keywordChange(keyword);
  }

  render() {
    const filteredNotes = this.state.notes.filter(
      (note) => note.title.toUpperCase().includes(this.state.keyword.toUpperCase()),
    );
    return (
      <div>
        <NoteAppHeader sitetitle="MyNotes" archivePage="Archives" />
        <NoteAppBody
          keyword={this.state.keyword}
          notes={filteredNotes}
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

NoteApps.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

NoteApps.defaultProps = {
  defaultKeyword: '',
};

export default NoteApps;
