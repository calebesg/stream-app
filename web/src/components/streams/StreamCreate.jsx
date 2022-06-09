import React from 'react';
import { reduxForm } from 'redux-form/dist/redux-form';
import { connect } from 'react-redux';
import { createStreamy } from '../../actions';
import CustomField from '../CustomField';
import Container from '../Container';

class StreamCreate extends React.Component {
  handleSubmit = formProps => {
    this.props.createStreamy(formProps);
  };

  render() {
    return (
      <Container>
        <form
          onSubmit={this.props.handleSubmit(this.handleSubmit)}
          className="flex flex-col gap-4"
        >
          <CustomField
            input={{
              id: 'title',
              name: 'title',
              placeholder: 'Title',
              component: 'input',
              type: 'text',
            }}
            label="Enter a Title"
          />

          <CustomField
            input={{
              id: 'description',
              name: 'description',
              placeholder: 'Description',
              component: 'input',
              type: 'text',
            }}
            label="Enter a Description"
          />

          <button
            type="submit"
            className="bg-slate-700 rounded-md text-white p-2 hover:bg-slate-400 transition-all mt-8"
          >
            Submit
          </button>
        </form>
      </Container>
    );
  }
}

const validate = formValue => {
  const errors = {};

  if (!formValue.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValue.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const formWrapper = reduxForm({ form: 'streamCreate', validate })(StreamCreate);

export default connect(null, { createStreamy })(formWrapper);
