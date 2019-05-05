import React, {Component, Fragment} from "react";
import axios from "axios";
import Appbar from '../layout/PhotographerAppBar';
import ViewProjects from '../layout/ViewProjects';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";



class OnGoingProjects extends Component {


    state = {
        projectsRecieved: []
    };

    constructor(props) {
        super(props);
        this.state = {isOpen: false, data: []};
    }


    receiveData = () => {

        const route = '/api/postProject/getProject/'+ localStorage.email;

        console.log(localStorage.email);

        axios.get(route)
            .then(res => {


                console.log(res.data);
                this.setState({data: res.data});


                // console.log(res.data);
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
                                You sent proposals to
                            </Typography>
                            <br/>
                            <br/>
                        </Grid>
                    </Grid>

                </Grid>


                {/*<ViewProjects/>*/}

                {
                    this.state.data.map((data, index) =>

                        <ViewProjects data={data} key={"PP" + index} receiveData={this.receiveData.bind(this)}/>
                    )
                }


            </Fragment>

        );
    }
}

OnGoingProjects.propTypes = {};

export default OnGoingProjects;



