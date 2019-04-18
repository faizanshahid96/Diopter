import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../actions/auth";
import Navbar from "../navbar/Navbar";
import Carousel from "../carousel/Carousel";
import Catagories from "../catagories/Catagories";
import AboutUs from "../info/AboutUs";

const HomePage = ({isAuthenticated, logout}) => (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Carousel/>
        </div>
        <div>
            <AboutUs/>
        </div>
        <div>
            <Catagories/>
        </div>
        <h1>HomePage</h1>
        {isAuthenticated ? (
            <button onClick={() => logout()}>logout</button>
        ) : (
            <div>
                {/* <button onClick={() => logout()}>logout</button> */}
                <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
                <i class="material-icons">more_vert</i>
            </div>
        )}
    </div>
);

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(
    mapStateToProps,
    {logout}
)(HomePage);
