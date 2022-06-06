import React from 'react';
import { reduxForm } from 'redux-form/dist/redux-form';
import CustomField from '../CustomField';

class StreamCreate extends React.Component {
  handleSubmit = formProps => {
    console.log(formProps);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
        className="container flex flex-col mx-auto pt-6 gap-4 px-4 sm:px-0"
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

export default reduxForm({ form: 'streamCreate', validate })(StreamCreate);
