import React, {Component, Fragment} from "react";
import PropTypes, {array} from "prop-types";
import AppBar from "../layout/AppBar"
import Profile from "../layout/ClientProfile";

class ProfilePage extends Component {


    state = {};


    render() {


        return (
            <Fragment>
                <AppBar/>
                <br/><br/>
                <Profile/>

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



