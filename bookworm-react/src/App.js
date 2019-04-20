import React from "react";
import PropTypes from "prop-types";
import {Link, Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import Home from "./components/pages/Home";
import PostProject from "./components/pages/PostProject";
import OnGoingProjects from "./components/pages/OnGoingProjects"
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import Projects from "./components/pages/PostedProjects";
import IncompleteProjects from "./components/pages/incompleteProjects";
import Profile from "./components/pages/ProfilePage";
import CheckPhotographer from "./components/pages/checkPhotographer";
import i from "./components/pages/I";
import PhotographerOnGoingProjects from './components/pages/photographerOnGoingProjects';
import PincompleteProjects from './components/pages/pIncompleteProjects'

const App = ({location}) => (
    <div>
        <Route location={location} path="/" exact component={HomePage}/>
        <GuestRoute location={location} path="/login" exact component={LoginPage}/>
        <GuestRoute
            location={location}
            path="/signup"
            exact
            component={SignUpPage}
        />

        {/*{!   localStorage.isPhotographer ? (*/}
            {/*<UserRoute location={location} path="/home" exact component={Home}/>*/}
        {/*) : (*/}
            {/*<div>cant reach page</div>*/}
        {/*)}*/}





        <UserRoute location={location} path="/i" exact component={i}/>
        <UserRoute location={location} path="/check" exact component={CheckPhotographer}/>
        <UserRoute location={location} path="/onGoingProjects" exact component={OnGoingProjects}/>
        <UserRoute location={location} path="/projects" exact component={Projects}/>
        <UserRoute location={location} path="/incompleteProjects" exact component={IncompleteProjects}/>
        <UserRoute location={location} path="/profile" exact component={Profile}/>
        <UserRoute location={location} path="/postproject" exact component={PostProject}/>
        <UserRoute location={location} path="/pOngoingProjects" exact component={PhotographerOnGoingProjects}/>
        <UserRoute location={location} path="/pIncompleteProjects" exact component={PincompleteProjects}/>




    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
