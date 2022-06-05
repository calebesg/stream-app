import { Field } from 'redux-form/dist/redux-form';

const CustomField = function (props) {
  return (
    <div className="flex flex-col">
      <label className="font-bold text-gray-600" htmlFor={props.input.id}>
        {props.label}
      </label>
      <Field
        className="w-full border border-gray-400 rounded-md p-2"
        {...props.input}
      />
    </div>
  );
};

export default CustomField;
