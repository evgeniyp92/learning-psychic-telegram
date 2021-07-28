import React, { Component } from 'react';
// here, Field is a component and reduxForm is a function
import { Field, formValues, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

export class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    console.log(meta);
    return (
      <div className={`field ${meta.error && meta.touched ? 'error' : ''}`}>
        <label>{label}</label>
        <input
          {...input}
          autoComplete='off'
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        className='ui form error'
        onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label='Title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Description'
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = `You must enter a title`;
  }

  if (!formValues.description) {
    errors.description = `You must enter a description`;
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
