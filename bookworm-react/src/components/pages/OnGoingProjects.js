import React, {Component, Fragment} from "react";
import axios from "axios";
import Proposals from "../layout/Proposals";
import Appbar from '../layout/AppBar'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



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

                <Grid container justify="center">

                    <Grid container justify="center">
                        <Grid item>
                            <br/>
                            <br/>

                            <br/>

                            <Typography component="h1" variant="display1" gutterBottom>
                                Projects posted by you
                            </Typography>
                            <br/>
                            <br/>
                        </Grid>
                    </Grid>

                </Grid>

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



