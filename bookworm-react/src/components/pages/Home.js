import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/confirmEmailMessage";

const Home = ({ isConfirmed }) => (
  <div>

    <div>{!isConfirmed && <ConfirmEmailMessage />}</div>
    <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
  </div>
);

Home.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed
  };
}

export default connect(mapStateToProps)(Home);
