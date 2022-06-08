import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="flex gap-2 text-sm text-white">
          <button className="rounded-md flex items-center gap-1 bg-gray-400 py-2 px-4 hover:bg-gray-600 transition-all">
            <ion-icon name="build-sharp"></ion-icon>
            EDIT
          </button>
          <button className="rounded-md flex items-center gap-1 bg-red-400 py-2 px-4 hover:bg-red-600 transition-all">
            <ion-icon name="trash-sharp"></ion-icon>
            DELETE
          </button>
        </div>
      );
    }
  }

  renderList() {
    return (
      <ul className="list-none pt-4 w-full">
        {this.props.streams.map(stream => (
          <li key={stream.id} className="flex items-center gap-2 text-3xl mb-4">
            <ion-icon name="image-outline"></ion-icon>
            <div className="flex-1">
              <h2 className="text-lg font-bold">{stream.title}</h2>
              <p className="text-sm">{stream.description}</p>
            </div>
            {this.renderAdmin(stream)}
          </li>
        ))}
      </ul>
    );
  }

  renderCreate() {
    if (!this.props.isSignedIn) return null;

    return (
      <Link
        to="/streams/new"
        className="flex gap-2 items-center text-blue-500 hover:text-blue-600"
      >
        <ion-icon name="add-circle"></ion-icon>
        Create new Stream
      </Link>
    );
  }

  render() {
    return (
      <main className="container m-auto pt-8">
        <header className="flex justify-between items-center">
          <h1 className="font-bold">Streams</h1>
          {this.renderCreate()}
        </header>
        {this.renderList()}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
