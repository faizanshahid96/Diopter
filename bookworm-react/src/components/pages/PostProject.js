import React, { Component, Fragment } from "react";
import PostProjecte from "../layout/PostProject";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';






const PostProject = ({ email }) => (
    <div>
        {/*{console.log(email)}*/}
        <PostProjecte data={"email"}/>
    </div>
);

PostProject.propTypes = {

        email:PropTypes.string.isRequired
    };

function mapStateToProps(state) {
    return {
            email: state.user.email
    }
}


export default connect(mapStateToProps)(PostProject);
