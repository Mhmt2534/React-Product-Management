import { Form, useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

const ApexiTextInput = ({ ...props }) => {
  //   console.log(props);
  //reflect api useField
  const [field, meta] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <input {...field} {...props} />
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  );
};

export default ApexiTextInput;
