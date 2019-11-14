import React, { Fragment } from "react";
import { Input } from "reactstrap";
import _ from "lodash";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import moment from "moment";
import momentLocaliser from "react-widgets-moment";
import "react-widgets/dist/css/react-widgets.css";

import "./formFields.css";

momentLocaliser(moment);

export const renderTextField = ({ input, meta: { touched, error } }) => {
  return (
    <Fragment>
      <Input type="text" {...input} />
      <span className="error">{touched && error}</span>
    </Fragment>
  );
};

export const renderSelectField = ({
  input,
  options,
  meta: { touched, error }
}) => {
  return (
    <Fragment>
      <Input type="select" {...input} className="form-control">
        {_.map(options, option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Input>
      <span className="error">{touched && error}</span>
    </Fragment>
  );
};

export const renderDateField = ({ input: { onChange, value }, showTime }) => (
  <DateTimePicker
    onChange={onChange}
    format="DD MMM YYYY"
    time={showTime}
    value={!value ? null : new Date(value)}
  />
);

export const renderNumberField = ({
  input,
  label,
  meta: { touched, error }
}) => {
  return (
    <Fragment>
      <Input type="number" className="form-control" {...input} />
      {label}
      <span className="error">{touched && error}</span>
    </Fragment>
  );
};
