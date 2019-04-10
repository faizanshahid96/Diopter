import React, { Component, Fragment } from "react";
import PropTypes, {array} from "prop-types";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import axios from "axios";
import LoginForm from "../forms/LoginForm";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PostProject from "../layout/PostProject";
import PostedProject from "../layout/PostedProject";
// import OnGoingProjects from "../layout/OnGoingProjects";
import Proposals from "../layout/Proposals";
import Practice from "../layout/Practice";
import IncompleteProjects from "../layout/incompletedProjects"
import AppBar from "../layout/AppBar"
import Drawer from "../layout/Profile_Drawer"
import Profile from "../layout/ProfilePicture"

class incompleteProjects extends Component {



    state = {
        projectsRecieved: []
    };

    constructor(props) {
        super(props);
        let array = [];
        this.state = { isOpen: false, data : [] };
        this.State = {
            testing: []
        }
    }


    receiveData = () =>{


        const user_id = 'shahreyar166@gmail.com';
        axios.get(`/api/projects_proposals/`+user_id)
            .then(res => {


                // console.log(res.data);
                this.setState({data : res.data});
            });

    };


    componentDidMount() {

        this.receiveData();


    }


    render() {


        return (
            <Fragment>


                <AppBar/>

                <Profile/>

                <Drawer/>

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

incompleteProjects.propTypes = {

};

export default incompleteProjects;



