import React from 'react';
import { connect } from 'react-redux';
import { getFormMeta } from 'redux-form';
import { Field, getFormSyncErrors } from 'redux-form/dist/redux-form';

class CustomField extends React.Component {
  renderError = () => {
    if (this.props.error && this.props.meta?.visited) {
      return <span className="text-red-500 text-sm">{this.props.error}</span>;
    }
  };

  render() {
    return (
      <div className="flex flex-col">
        <label
          className="font-bold text-gray-600"
          htmlFor={this.props.input.id}
        >
          {this.props.label}
        </label>
        <Field
          className="w-full border border-gray-400 rounded-md p-2"
          {...this.props.input}
          autoComplete="off"
        />
        {this.renderError()}
      </div>
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
