import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

import Container from '../Container';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { fetchStream, match } = this.props;
    fetchStream(match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

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
        <h1 className="text-lg text-gray-700">Edit Stream</h1>

        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
