import React from 'react';
import { connect } from 'react-redux';
import { getFormMeta } from 'redux-form';
import { Field, getFormSyncErrors } from 'redux-form/dist/redux-form';

class CustomField extends React.Component {
  render() {
    const existError =
      this.props?.error && this.props.meta?.visited ? true : false;

    return (
      <fieldset
        className={`flex flex-col w-full border rounded-2xl px-2 pb-2 relative ${
          existError && 'border-red-500'
        }`}
      >
        <legend className="text-gray-600 text-sm">{this.props.label}</legend>

        <Field
          className="w-full h-8 px-2 outline-none text-gray-700 rounded-full placeholder:text-red-600"
          {...this.props.input}
          autoComplete="off"
          aria-label={this.props.label}
          placeholder={existError && this.props.error}
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    meta: getFormMeta('streamCreate')(state)[ownProps.input.id],
    error: getFormSyncErrors('streamCreate')(state)[ownProps.input.id],
  };
};

export default connect(mapStateToProps)(CustomField);
