import React from 'react';
import { reduxForm } from 'redux-form/dist/redux-form';
import CustomField from '../CustomField';

class StreamForm extends React.Component {
  handleSubmit = formProps => {
    this.props.onSubmit(formProps);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
        className="mt-4 flex flex-col gap-4 items-end"
      >
        <CustomField
          input={{
            id: 'title',
            name: 'title',
            component: 'input',
            type: 'text',
          }}
          label="Enter a Title"
        />

        <CustomField
          input={{
            id: 'description',
            name: 'description',
            component: 'input',
            type: 'text',
          }}
          label="Enter a Description"
        />

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-full text-white w-full sm:w-28 h-12 mt-4 bg-gray-700 hover:bg-gray-800 transition-all"
        >
          Salvar
          <ion-icon name="send"></ion-icon>
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

export default reduxForm({ form: 'streamCreate', validate })(StreamForm);
