import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SignupForm from "../forms/SignupForm";
import Dialog from "./checkPhotographer"
import {signup} from "../../actions/users";

class SignUpPage extends Component {
    state = {
        open : false
    };


    // handleClickOpen = () => {
    //     this.setState({ open: true });
    // };


    // this.props.history.push("/login")
    submit = data =>
        this.props.signup(data).then(() =>
                this.setState({open : true})

        );

    render() {
        return (
            <div>
                <h1>SignPage</h1>
                <SignupForm submit={this.submit}/>
                <Dialog data={this.state.open} />
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
    {signup}
)(SignUpPage);
