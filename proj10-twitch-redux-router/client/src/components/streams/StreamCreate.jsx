import React, { Component } from 'react';
// here, Field is a component and reduxForm is a function
import { Field, reduxForm } from 'redux-form';

export class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input
          {...input}
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
        />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        className='ui form'
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

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
