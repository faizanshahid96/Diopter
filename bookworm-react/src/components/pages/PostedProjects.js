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
        this.state = { isOpen: false, data : [] };

    }


    recieveData = () => {

        axios.get(`/api/postProject/`)
            .then(res => {


                // console.log(res.data);
                this.setState({data : res.data});
            });

        console.log('hello');
    };

    componentDidMount() {


    this.recieveData();


    }


    render() {


        return (
            <Fragment>
                {
                    this.state.data.map((data, index) =>
                        <PostedProject data={data}  recieveData={this.recieveData.bind(this)}  /> //this used to populate my projects key={"PP" + index}
                    )
                }

            </Fragment>

        );
    }
}

OnGoingProjects.propTypes = {

};

export default OnGoingProjects;


