import React, {Component, Fragment} from "react";
import axios from "axios";
import IncompleteProjects from "../layout/pIncompleteProjects"
import AppBar from "../layout/PhotographerAppBar"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";



// this page shows the projects that are not submitted this is the photographer's side




class pIncompleteProjects extends Component {


    state = {
        projectsRecieved: [],

    };

    constructor(props) {
        super(props);
        let array = [];
        this.state = {isOpen: false, data: []};
        this.State = {
            testing: [],
        }
    }


    receiveData = () => {


        const user_id = localStorage.email;

        axios.get(`/api/projects_proposals/findF/` + user_id)
            .then(res => {
                this.setState({data: res.data});
                console.log(res.data);

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
                                Projects you have to submit
                            </Typography>
                            <br/>
                            <br/>
                        </Grid>
                    </Grid>

                </Grid>

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



