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
import CompletedProjects from "../layout/completedProjects"
import AppBar from "../layout/AppBar"
import Drawer from "../layout/Profile_Drawer"
import Profile from "../layout/ProfilePicture"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


// this page shows the projects that are not submitted this is the client's side


class incompleteProjects extends Component {


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
        axios.get(`/api/projects_proposals/completed/` + user_id)
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


                <Grid container justify="center">

                    <Grid container justify="center">
                        <Grid item>
                            <br/>
                            <br/>

                            <br/>

                            <Typography component="h1" variant="display1" gutterBottom>
                                Completed Projects
                            </Typography>
                            <br/>
                            <br/>
                        </Grid>
                    </Grid>

                </Grid>

                {
                    this.state.data.map((data, index) =>

                        <CompletedProjects data={data} key={"PP" + index} receiveData={this.receiveData.bind(this)}/>
                    )
                }


                {/*<IncompleteProjects data={data} key={"PP" + index}/>*/}
            </Fragment>

        );
    }
}

incompleteProjects.propTypes = {};

export default incompleteProjects;



