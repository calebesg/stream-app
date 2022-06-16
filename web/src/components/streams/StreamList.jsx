import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import Container from '../Container';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="flex gap-2 text-base text-gray-700 group-hover:text-white">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="w-8 h-8 rounded-full flex items-center justify-center border group-hover:border-gray-800 group-hover:bg-gray-800"
          >
            <ion-icon name="build-sharp"></ion-icon>
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="w-8 h-8 rounded-full flex items-center justify-center border group-hover:bg-gray-800 group-hover:border-gray-800"
          >
            <ion-icon name="trash-sharp"></ion-icon>
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return (
      <ul className="list-none mt-4 w-full flex flex-col gap-4">
        {this.props.streams.map(stream => (
          <li
            key={stream.id}
            className="flex items-center gap-4 text-gray-700 hover:text-gray-100 text-3xl p-4 border rounded-2xl cursor-pointer hover:bg-gray-700 transition-all group"
          >
            <ion-icon name="image-outline"></ion-icon>
            <div className="flex-1 flex flex-col ">
              <Link
                to={`/streams/${stream.id}`}
                className="text-sm text-gray-700 group-hover:text-gray-100"
              >
                {stream.title}
              </Link>
              <p className="text-xs text-gray-500 group-hover:text-gray-300">
                {stream.description}
              </p>
            </div>
            {this.renderAdmin(stream)}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Container>
        <h1 className="text-lg text-gray-700">Transmitindo agora</h1>

        {this.renderList()}
      </Container>
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
