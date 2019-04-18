import React, {Component, Fragment} from "react";
import PostProjecte from "../layout/PostProject";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Appbar from '../layout/AppBar'


const PostProject = ({email}) => (
    <div>
        <Appbar />
        <PostProjecte data={"email"}/>
    </div>
);

PostProject.propTypes = {

    email: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        email: state.user.email


    }
}


export default connect(mapStateToProps)(PostProject);
