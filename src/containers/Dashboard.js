import React from 'react';
import { connect } from 'react-redux';
import {
  fetchMyNotes,
  createNote,
} from '../actions/note';
import Button from '../components/Button/Button';
import NoteList from '../components/NoteList/NoteList';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMyNotes());
  }

  render() {
    // eslint-disable-next-line no-shadow
    const note = this.props.notes.find((note) => note.id === Number(this.props.params.id));
    return (<div className="page-Dashboard">
      <div className="page-Dashboard-list">
        <div className="page-Dashboard-listHeader">
          <Button onClick={this.props.onClickNewNote}>New Note</Button>
        </div>
        <div role="navigation">
          <NoteList notes={this.props.notes} selectedNoteId={this.props.params.id} />
        </div>
      </div>
      <div className="page-Dashboard-main" role="form">
        {this.props.children ? React.cloneElement(this.props.children, { note }) : null}
      </div>
    </div>);
  }
}


const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    onClickNewNote: () => { dispatch(createNote()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
