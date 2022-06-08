import { startCase } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="flex gap-2 text-sm text-white">
          <button className="rounded-md bg-gray-400 py-2 px-4 hover:bg-gray-600 transition-all">
            EDIT
          </button>
          <button className="rounded-md bg-red-400 py-2 px-4 hover:bg-red-600 transition-all">
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

  render() {
    return (
      <main className="container m-auto pt-8">
        <h1 className="font-bold">Streams</h1>
        {this.renderList()}
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
