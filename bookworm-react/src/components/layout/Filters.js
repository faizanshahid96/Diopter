import React, {Component, Fragment} from "react";
import Validator from "validator";
import PropTypes from "prop-types";
import {Form, Button, Message} from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import isEmail from 'validator/lib/isEmail';
// import FormControlLabel from "../pages/checkPhotographer";
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Snackbar from "./Snackbar";
import DialogContent from "@material-ui/core/DialogContent";
// import FormControl from '@material-ui/core/FormControl';




const styles = theme => ({

    paper: {
        padding: theme.spacing.unit * 2,
        margin: "auto",
        maxWidth: 800
    },
});




class SignupForm extends Component {
    state = {


    };

    constructor(props) {
        super(props);
        this.state = {
            city:'none',
            expert:'none',
            snack : false,
            message:'You have selected nothing'

        };

    }
    check =(event) =>{
        this.setState({[event.target.name]: event.target.value})
    };

    filter = () => {

        const location=this.state.city;
        const expertise=this.state.expert;



        if(expertise === 'none' && location === 'none'){
                this.props.recieveDataAgain();
                this.setState({snack : true});

        }
        else{
            const link = "/api/customerCare/"+location+"/"+expertise+"/"+localStorage.email;
            console.log(link);
            axios.get(link)
                .then(res => {
                    console.log(res);
                    this.props.recieveData(res.data);
                });

            this.setState({snack : false});
        }




    };

    datachange = event => {

        this.setState({[event.target.name]: event.target.value});


    };


    render() {
        const {data, errors, loading} = this.state;
        const {classes} = this.props;
        return (


            <Fragment>




                {this.state.snack ? (
                    <Snackbar data={this.state.message}/>
                ) : (
                    <div>

                    </div>
                )}


                <br/>
                <br/>
                <br/>
                <Grid  container spacing={24} justify="center">
                    <Paper className={classes.paper}>



                        <Grid container justify = "center">

                            <div style={{marginLeft: 10}}>

                                <FormControl className={classes.formControl}>
                                    <Select
                                        error
                                        value={this.state.city}
                                        onChange={this.datachange}
                                        name="city"
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="" disabled>
                                            City
                                        </MenuItem>
                                        <MenuItem value={'none'}>None</MenuItem>
                                        <MenuItem value={'Lahore'}>Lahore</MenuItem>
                                        <MenuItem value={'Karachi'}>Karachi</MenuItem>
                                        <MenuItem value={'Islamabad'}>Islamabad</MenuItem>
                                    </Select>
                                    <FormHelperText>City</FormHelperText>
                                </FormControl>

                            </div>


                            <div style={{marginLeft: 30}}>

                                <FormControl className={classes.formControl}>
                                    <Select
                                        error
                                        value={this.state.expert}
                                        onChange={this.datachange}
                                        name="expert"
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="" disabled>
                                            Category
                                        </MenuItem>
                                        <MenuItem value={'none'}>None</MenuItem>
                                        <MenuItem value={'Food Photography'}>Food Photography</MenuItem>
                                        <MenuItem value={'Wedding Photography'}>Wedding Photography</MenuItem>
                                        <MenuItem value={'Product Photography'}>Product Photography</MenuItem>
                                        <MenuItem value={'Event Photography'}>Event Photography</MenuItem>
                                        <MenuItem value={'photojournalism'}>photojournalism</MenuItem>
                                    </Select>
                                    <FormHelperText>Category</FormHelperText>
                                </FormControl>

                            </div>


                            <div style={{marginLeft: 60}}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={this.filter}
                                    style={{ background: '#E91E63'}}
                                >
                                    Go
                                </Button>
                            </div>
                        </Grid>



                    </Paper>
                </Grid>





            </Fragment>


        );
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default withStyles(styles)(SignupForm) ;
