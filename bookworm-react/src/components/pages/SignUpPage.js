import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignUpPage extends Component {
  state = {};

  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/home"));

  render() {
    return (
      <div>
        <h1>SignPage</h1>
        <SignupForm submit={this.submit} />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(
  null,
  { signup }
)(SignUpPage);
