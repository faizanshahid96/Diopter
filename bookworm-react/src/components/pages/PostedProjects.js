import React, {Component, Fragment} from "react";
import PropTypes, {array} from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/auth";
import axios from "axios";
import LoginForm from "../forms/LoginForm";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PostProject from "../layout/PostProject";
import PostedProject from "../layout/PostedProject";
import Filters from "../layout/Filters"
import AppBar from "../layout/PhotographerAppBar"
// import {logout} from "../../actions/auth";
// import OnGoingProjects from "../layout/OnGoingProjects";
import Proposals from "../layout/Proposals";
import Practice from "../layout/Practice";
import Grid from "@material-ui/core/Grid";
import {Message} from "semantic-ui-react";


class OnGoingProjects extends Component {


    state = {
        projectsRecieved: []
    };

    constructor(props) {
        super(props);
        this.state = {isOpen: false, data: []};

        // if (!localStorage.isPhotographer){
        //     this.props.logout();
        // }

    }


    recieveData = () => {

            const link = "/api/postProject/"+localStorage.email;

        axios.get(link)
            .then(res => {

                this.setState({data: res.data});
            });






    };

    newRecieveData = (lol) => {

        this.setState({data:lol});
    };

    componentDidMount() {




        this.recieveData();


    }


    render() {


        return (
            <Fragment>


                <AppBar/>

                <Filters recieveData={this.newRecieveData.bind(this)} recieveDataAgain={this.recieveData.bind(this)}/>

                {
                    this.state.data.map((data, index) =>
                        <PostedProject data={data} recieveData={this.recieveData.bind(this)}/> //this used to populate my projects key={"PP" + index}
                    )
                }

            </Fragment>

        );
    }
}

OnGoingProjects.propTypes = {
    logout: PropTypes.func.isRequired

};

export default connect(
    null,
    {logout}
)(OnGoingProjects);



