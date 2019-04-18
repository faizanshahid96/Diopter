import React, {Component, Fragment} from "react";
import PropTypes, {array} from "prop-types";
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import axios from "axios";
import LoginForm from "../forms/LoginForm";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PostProject from "../layout/PostProject";
import PostedProject from "../layout/PostedProject";
// import OnGoingProjects from "../layout/OnGoingProjects";
import Proposals from "../layout/Proposals";
import Practice from "../layout/Practice";
import ProfilePicture from "../layout/ProfilePicture"
import AppBar from "../layout/AppBar"


class ProfilePage extends Component {


    state = {};


    // componentDidMount() {
    //     this.props.history.push("/postproject");
    // }

    render() {


        return (
            <Fragment>
                <AppBar/>
                <br/><br/>
                <ProfilePicture/>

            </Fragment>

        );
    }
}

ProfilePage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,

};

export default ProfilePage;



