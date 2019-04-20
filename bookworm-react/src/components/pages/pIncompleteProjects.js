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
import IncompleteProjects from "../layout/pIncompleteProjects"
import AppBar from "../layout/AppBar"
import Drawer from "../layout/Profile_Drawer"
import Profile from "../layout/ProfilePicture"



// this page shows the projects that are not submitted this is the client's side


class pIncompleteProjects extends Component {


    state = {
        projectsRecieved: []
    };

    constructor(props) {
        super(props);
        let array = [];
        this.state = {isOpen: false, data: []};
        this.State = {
            testing: []
        }
    }


    receiveData = () => {


        const user_id = localStorage.email;

        axios.get(`/api/projects_proposals/findF/` + user_id)
            .then(res => {


                console.log(res.data);
                this.setState({data: res.data});
            });

    };


    componentDidMount() {

        this.receiveData();


    }


    render() {


        return (
            <Fragment>


                <AppBar/>

                {/*<Profile/>*/}

                {/*<Drawer/>*/}

                <h1>hello</h1>

                {
                    this.state.data.map((data, index) =>

                        <IncompleteProjects data={data} key={"PP" + index} receiveData={this.receiveData.bind(this)}/>
                    )
                }


                {/*<IncompleteProjects data={data} key={"PP" + index}/>*/}
            </Fragment>

        );
    }
}

pIncompleteProjects.propTypes = {};

export default pIncompleteProjects;



