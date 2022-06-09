import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

import Container from '../Container';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;

    fetchStream(match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return (
        <Container>
          <div>Loading...</div>
        </Container>
      );
    }

    return (
      <Container>
        <h1 className="font-bold">Edit Stream</h1>

        <div>{this.props.stream.title}</div>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
