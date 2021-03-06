import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Validator from "validator";
import {Form} from "semantic-ui-react/dist/commonjs/collections/Form";
import {Message} from "semantic-ui-react/dist/commonjs/collections/Message";
import InlineError from "../forms/LoginForm";
import Navbar from "../navbar/Navbar";


function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500
    },

    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: "none"
    }
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
        option: "none",
        data: {email: "", password: ""},
        loading: false,
        errors: {}
    };


    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});

        console.log('i am here');

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

    onItemClick = event => {
        if ((this.state.option = "none")) {
            console.log(this.state.option);
            return <h1>Good hy jani</h1>;
        }
    };

    // handleChange = event => {
    //   this.setState({ value: event.target.value });
    // };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    handleChanger = event => {
        this.setState({option: event.target.value});
    };

    render() {
        const {classes, theme} = this.props;
        const {data, errors} = this.state;

        return (
            <Fragment>

                <Navbar/>
                <Grid container justify="center" className={classes.background}>
                    <Grid container justify="center">
                        <Grid item>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Typography component="h1" variant="display1" style={{ color: '#FF5722'}} gutterBottom>
                                Login
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

                    {/*<Grid container container justify="center">*/}
                        {/*<div className={classes.root}>*/}
                            {/*<AppBar position="static" color="default">*/}
                                {/*<Tabs*/}
                                    {/*value={this.state.value}*/}
                                    {/*onChange={this.handleChange}*/}
                                    {/*indicatorColor="primary"*/}
                                    {/*textColor="primary"*/}
                                    {/*variant="fullWidth"*/}
                                {/*>*/}
                                    {/*<Tab label="Login"/>*/}
                                    {/*<Tab label="Sign Up"/>*/}
                                {/*</Tabs>*/}
                            {/*</AppBar>*/}
                            {/*<SwipeableViews*/}
                                {/*axis={theme.direction === "rtl" ? "x-reverse" : "x"}*/}
                                {/*index={this.state.value}*/}
                                {/*onChangeIndex={this.handleChangeIndex}*/}
                            {/*>*/}
                                {/*<TabContainer dir={theme.direction}>*/}
                                    {/*<br/>*/}
                                    {/*<br/>*/}



                                    {/*<div>*/}
                                        {/*<Form onSubmit={this.onSubmit}>*/}
                                            {/*{errors.global && (*/}
                                                {/*<Message negative>*/}
                                                    {/*<Message.Header>Something Went Wrong</Message.Header>*/}
                                                    {/*<p>{errors.global}</p>*/}
                                                {/*</Message>*/}
                                            {/*)}*/}
                                            {/*<Form.Field error={!!errors.email}>*/}
                                                {/*<label htmlFor="email">Email</label>*/}
                                                {/*<input*/}
                                                    {/*type="email"*/}
                                                    {/*name="email"*/}
                                                    {/*id="email"*/}
                                                    {/*placeholder="example@example.com"*/}
                                                    {/*value={data.email}*/}
                                                    {/*onChange={this.onChange}*/}
                                                {/*/>*/}
                                                {/*{errors.email && <InlineError text={errors.email}/>}*/}
                                            {/*</Form.Field>*/}
                                            {/*<Form.Field error={!!errors.password}>*/}
                                                {/*<label htmlFor="password">Password</label>*/}
                                                {/*<input*/}
                                                    {/*type="password"*/}
                                                    {/*name="password"*/}
                                                    {/*id="password"*/}
                                                    {/*placeholder="make it secure"*/}
                                                    {/*value={data.password}*/}
                                                    {/*onChange={this.onChange}*/}
                                                {/*/>*/}
                                                {/*{errors.password && <InlineError text={errors.password}/>}*/}
                                            {/*</Form.Field>*/}

                                            {/*<Button primary>Login</Button>*/}
                                        {/*</Form>*/}
                                    {/*</div>*/}
                                {/*</TabContainer>*/}

                                {/*<TabContainer dir={theme.direction}>*/}
                                    {/*<form*/}
                                        {/*className={classes.container}*/}
                                        {/*noValidate*/}
                                        {/*autoComplete="off"*/}
                                    {/*>*/}
                                        {/*<TextField*/}
                                            {/*id="outlined-full-width"*/}
                                            {/*label="EMAIL"*/}
                                            {/*style={{margin: 8}}*/}
                                            {/*placeholder="example@example.com"*/}
                                            {/*fullWidth*/}
                                            {/*margin="normal"*/}
                                            {/*variant="outlined"*/}
                                            {/*InputLabelProps={{*/}
                                                {/*shrink: true*/}
                                            {/*}}*/}
                                        {/*/>*/}
                                        {/*<br/>*/}
                                        {/*<br/>*/}
                                        {/*<br/>*/}

                                        {/*<TextField*/}
                                            {/*id="outlined-full-width"*/}
                                            {/*label="NAME"*/}
                                            {/*style={{margin: 8}}*/}
                                            {/*placeholder="example@example.com"*/}
                                            {/*fullWidth*/}
                                            {/*margin="normal"*/}
                                            {/*variant="outlined"*/}
                                            {/*InputLabelProps={{*/}
                                                {/*shrink: true*/}
                                            {/*}}*/}
                                        {/*/>*/}
                                        {/*<br/>*/}
                                        {/*<br/>*/}
                                        {/*<br/>*/}

                                        {/*<TextField*/}
                                            {/*id="outlined-full-width"*/}
                                            {/*label="PASSWORD"*/}
                                            {/*style={{margin: 8}}*/}
                                            {/*placeholder="example@example.com"*/}
                                            {/*fullWidth*/}
                                            {/*margin="normal"*/}
                                            {/*variant="outlined"*/}
                                            {/*InputLabelProps={{*/}
                                                {/*shrink: true*/}
                                            {/*}}*/}
                                        {/*/>*/}
                                        {/*<br/>*/}
                                        {/*<br/>*/}
                                        {/*<br/>*/}
                                        {/*<Grid container justify="center">*/}
                                            {/*<RadioGroup*/}
                                                {/*aria-label="position"*/}
                                                {/*name="position"*/}
                                                {/*value={this.state.option}*/}
                                                {/*onChange={this.handleChanger}*/}
                                                {/*row*/}
                                            {/*>*/}
                                                {/*<FormControlLabel*/}
                                                    {/*value="photographer"*/}
                                                    {/*control={<Radio color="primary"/>}*/}
                                                    {/*label="Photographer"*/}
                                                    {/*labelPlacement="start"*/}
                                                {/*/>*/}

                                                {/*<FormControlLabel*/}
                                                    {/*value="buyer"*/}
                                                    {/*control={<Radio color="primary"/>}*/}
                                                    {/*label="Buyer"*/}
                                                    {/*labelPlacement="start"*/}
                                                {/*/>*/}
                                            {/*</RadioGroup>*/}
                                        {/*</Grid>*/}

                                        {/*<br/>*/}
                                        {/*<br/>*/}

                                        {/*<Grid container justify="center">*/}
                                            {/*<Button*/}
                                                {/*variant="outlined"*/}
                                                {/*color="primary"*/}
                                                {/*className={classes.button}*/}
                                                {/*onClick={this.onItemClick}*/}
                                            {/*>*/}
                                                {/*LOGIN*/}
                                            {/*</Button>*/}
                                        {/*</Grid>*/}
                                    {/*</form>*/}
                                {/*</TabContainer>*/}
                            {/*</SwipeableViews>*/}
                        {/*</div>*/}
                    {/*</Grid>*/}
                {/*</Grid>*/}
            </Fragment>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    submit: PropTypes.func.isRequired
};

export default withStyles(styles, {withTheme: true})(FullWidthTabs);
