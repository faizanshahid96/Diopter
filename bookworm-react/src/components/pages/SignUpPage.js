import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SignupForm from "../forms/SignupForm";
import Dialog from "./checkPhotographer"
import {signup} from "../../actions/users";
import Navbar from "../navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class SignUpPage extends Component {
    state = {
        open : false
    };


    // handleClickOpen = () => {
    //     this.setState({ open: true });
    // };


    // this.props.history.push("/login")
    submit = data =>
        this.props.signup(data).then(() =>
                this.setState({open : true})

        );

    render() {
        return (


            <div>
                <Navbar/>
                <Grid container justify="center" >
                    <Grid container justify="center">
                        <Grid item>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Typography component="h1" variant="display1" style={{ color: '#FF5722'}} gutterBottom>
                                Sign Up
                            </Typography>
                        </Grid>
                    </Grid>


                    {/*<Grid container justify="center">*/}
                    {/*    <Grid item>*/}
                    {/*        <br/>*/}
                    {/*        <Typography component="h1" variant="headline" gutterBottom>*/}
                    {/*            Don't have an account? Sign Up*/}
                    {/*        </Typography>*/}
                    {/*        <br/>*/}
                    {/*        <br/>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}

                </Grid>
                <SignupForm submit={this.submit}/>
                <Dialog data={this.state.open} />
            </div>

        );
    }
}

SignUpPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default connect(
    null,
    {signup}
)(SignUpPage);
