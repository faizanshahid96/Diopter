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



class OnGoingProjects extends Component {



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


        axios.get(`/api/postProject/email`)
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
                {
                    this.state.data.map((data, index) =>

                    <Proposals data={data} key={"PP" + index} receiveData={this.receiveData.bind(this)}/>
                    )
                }
            </Fragment>

        );
    }
}

OnGoingProjects.propTypes = {

};

export default OnGoingProjects;



