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


const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 6  ,
        // textAlign: 'center',
        color: theme.palette.text.secondary,


    },
    root1: {
        flexGrow: 1,

    },

    root2: {
        justifyContent: 'center'
    }
});




class SignupForm extends Component {
    state = {

        confirm : ''
        // value: 'yes',
    };

    constructor(props) {
        super(props);
        this.state = {
            value: 'yes',
            data: {email: "", password: "", check : 'yes'},
            loading: false,
            errors: {},
            // confirm : ''

        };

    }

    handleChange = event => {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
    };

    onChange = e => {

        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

        console.log(this.state.data);

    };

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});


        if (Object.keys(errors).length === 0) {

            if(this.state.confirm !== this.state.data.password){
                this.setState({error: true});
            }else {
                this.props
                    .submit(this.state.data)
                    .catch(err => this.setState({errors: err.response.data.errors}));
            }



        }
    };

    validate = data => {
        const errors = {};
        if (!data.password) errors.password = "Cannot be blank";
        if (!isEmail(data.email)) errors.email = "Invalid email Id";


        return errors;
    };



    check =(event) =>{
        this.setState({[event.target.name]: event.target.value})
    };


    render() {
        const {data, errors, loading} = this.state;
        const {classes} = this.props;
        return (


            <Fragment>


                <div className={classes.root}>
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <Grid item xs={8}>
                            <Paper className={classes.root}>

                                <div>


                                    {this.state.error && (
                                        <Message negative>
                                            <Message.Header>Your Passwords doesn't match</Message.Header>

                                        </Message>
                                    )}

                                    <br/>

                                    {/*error={!!errors.email}*/}

                                    <Form onSubmit={this.onSubmit} loading={loading}>
                                        <Form.Field error={!!errors.email}>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="example@example.com"
                                                value={data.email}
                                                onChange={this.onChange}
                                            />
                                            {errors.email && <InlineError text={errors.email}/>}
                                        </Form.Field>


                                        <Form.Field  error={!!errors.password}>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="make it secure"
                                                value={data.password}
                                                onChange={this.onChange}
                                            />
                                            {errors.password && <InlineError text={errors.password}/>}


                                        </Form.Field>

                                        <Form.Field>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                name="confirm"
                                                id="password"
                                                placeholder="make it secure"
                                                value={this.state.confirm}
                                                onChange={this.check}
                                            />

                                        </Form.Field>

                                        <Typography
                                            component="h1"
                                            variant="subtitle1"
                                            gutterBottom

                                        >
                                            Are you a photographer?
                                        </Typography>

                                        <RadioGroup
                                            aria-label="position"
                                            name="check"
                                            value={data.check}
                                            onChange={this.onChange}
                                            row
                                        >
                                            {/*<Grid item xs={6}>*/}

                                            <FormControlLabel
                                                value="yes"
                                                control={<Radio color="primary" />}
                                                label="yes"
                                                labelPlacement="start"

                                            />
                                            {/*</Grid>*/}
                                            {/*<Grid item xs={6}>*/}
                                            <FormControlLabel
                                                value="no"
                                                control={<Radio color="primary" />}
                                                label="no"
                                                labelPlacement="start"
                                            />



                                        </RadioGroup>

                                        <Button primary style={{ background: '#FF5722'}}>Sign Up</Button>
                                    </Form>

                                </div>
                                    </Paper>
                        </Grid>
                    </Grid>
                </div>

            </Fragment>


        );
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default withStyles(styles)(SignupForm) ;
