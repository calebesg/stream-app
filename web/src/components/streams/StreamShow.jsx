import React from 'react';
import FlvJs from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import Container from '../Container';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) return;

    const { id } = this.props.match.params;

    this.player = FlvJs.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    this.player.play();
  }

  render() {
    if (!this.props.stream) return <div>Loading...</div>;

    const { title, description } = this.props.stream;

    return (
      <Container>
        <video
          ref={this.videoRef}
          className="w-full max-w-4xl rounded-3xl"
          controls
        />
        <h1 className="mt-4 text-xl text-gray-800 font-bold">{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
