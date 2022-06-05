import React from 'react';
import { reduxForm, Field } from 'redux-form/dist/redux-form';

class StreamCreate extends React.Component {
  render() {
    return (
      <form>
        <Field name="title" component="input" type="text" placeholder="Title" />

        <Field
          name="description"
          component="input"
          type="text"
          placeholder="Description"
        />
      </form>
    );
  }
}

export default reduxForm({ form: 'streamCreate' })(StreamCreate);
