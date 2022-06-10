import React from 'react';
import { connect } from 'react-redux';
import { createStreamy } from '../../actions';
import Container from '../Container';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  handleSubmit = formProps => {
    this.props.createStreamy(formProps);
  };

  render() {
    return (
      <Container>
        <h1 className="font-bold mb-4">Create Stream</h1>

        <StreamForm onSubmit={this.handleSubmit} />
      </Container>
    );
  }
}

export default connect(null, { createStreamy })(StreamCreate);
