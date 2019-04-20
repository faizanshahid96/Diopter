import React, {Component, Fragment} from "react";
import axios from "axios";
import Proposals from "../layout/Proposals";
import Appbar from '../layout/AppBar'



class OnGoingProjects extends Component {


    state = {
        projectsRecieved: []
    };

    constructor(props) {
        super(props);
        this.state = {isOpen: false, data: []};
    }


    receiveData = () => {

        const route = '/api/postProject/email/'+localStorage.email;

        axios.get(route)
            .then(res => {


                // console.log(res.data);
                this.setState({data: res.data});


                console.log(res.data.photographer_id);
            });

    };


    componentDidMount() {

        this.receiveData();


    }


    render() {


        return (
            <Fragment>

                <Appbar />

                {
                    this.state.data.map((data, index) =>

                        <Proposals data={data} key={"PP" + index} receiveData={this.receiveData.bind(this)}/>
                    )
                }
            </Fragment>

        );
    }
}

OnGoingProjects.propTypes = {};

export default OnGoingProjects;



