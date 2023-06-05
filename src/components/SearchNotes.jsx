import React from 'react';

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    };

    // binding
    this.onSearchHandlerEvent = this.onSearchHandlerEvent.bind(this);
  }

  async onSearchHandlerEvent(event) {
    await this.setState(() => ({
      keyword: event.target.value,
    }));
    await this.props.onSearch(this.state);
  }

  render() {
    return (
      <div className="note-search">
        <input value={this.state.keyword} onChange={this.onSearchHandlerEvent} type="text" placeholder="Search notes by title or content" />
      </div>
    );
  }
}

export default SearchNotes;
