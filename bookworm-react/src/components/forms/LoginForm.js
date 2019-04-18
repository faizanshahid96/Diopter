import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {Form, Button, Message} from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from "../layout/Header";




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



class LoginForm extends Component {
    state = {
        data: {email: "", password: ""},
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if (Object.keys(errors).length === 0) {


            this.props
                .submit(this.state.data)
                .catch(err => this.setState({errors: err.response.data.errors}));
        }
    };

    validate = data => {
        const errors = {};
        if (!data.password) errors.password = "Cannot be blank";
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email Id";

        return errors;
    };



    render() {

        const {data, errors} = this.state;
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

                                <br/>
                                         <Form onSubmit={this.onSubmit}>
                                            {errors.global && (
                                                <Message negative>
                                                    <Message.Header>Something Went Wrong</Message.Header>
                                                    <p>{errors.global}</p>
                                                </Message>
                                            )}
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
                                            <Form.Field error={!!errors.password}>
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

                                             <br/>
                                             <Grid
                                                 container
                                                 direction="row"
                                                 justify="center"
                                                 alignItems="center"
                                             >
                                                 <Button primary className={classes.root2}>Login</Button>
                                             </Grid>


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

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LoginForm) ;
