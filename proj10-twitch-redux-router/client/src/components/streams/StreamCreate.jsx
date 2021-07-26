import React, { Component } from 'react';
// here, Field is a component and reduxForm is a function
import { Field, reduxForm } from 'redux-form';

export class StreamCreate extends Component {
  renderInput({ input }) {
    return (
      <input
        {...input}
        // onChange={formProps.input.onChange}
        // value={formProps.input.value}
      />
    );
  }

  render() {
    return (
      <form>
        <Field name='title' component={this.renderInput} />
        <Field name='description' component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate);
