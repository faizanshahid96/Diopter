import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";
// import {browserHistory} from 'react-router-dom';
import {Link, Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import DatePicker from "./DatePicker";


const styles = theme => ({
    root: {
        // borderTopWidth: 1,
        // borderColor: "black",
        // borderStyle: "solid",
        margin: 40
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "center",
        shadows: ["none"]
    },

    forForm: {
        marginLeft: 75
    },
    formControl: {
        // margin: theme.spacing.unit,
        minWidth: 120,
        marginTop: 15
    },

    button: {
        margin: theme.spacing.unit
    },

    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

class PostProject extends React.Component {
    state = {
        age: "",
        name: "hai",
        city: "none",
        budget: '',
        labelWidth: 0,
        projectName: "",
        category: 0,
        description: '',
        date :''


    };


    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            index: props.index,
            id: '',
            email: localStorage.email,
            labelWidth: 0,

        };
        console.log("FROM POSTED PROJECTS");
        // console.log(props.data);

        // this.setState({email:props.data});
        console.log(this.state.email);
        //this.props.deletePorject(index);
    }


    setDate=(date)=>{
        this.setState({date:date});
        console.log(this.state.date);
        console.log("hello");
    };


    handleChanger = name => event => {
        this.setState({
            [name]: event.target.value
        });
        if (this.state.budget < 0) {
            console.log("this is bad")
        }
        // console.log(this.state.budget);
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth

        });

        console.log(localStorage.email);
        // console.log(this.props.data.email);

    }

    datachange = event => {

        this.setState({[event.target.name]: event.target.value});


    };

    onSubmit = (e) => {

        e.preventDefault();


        console.log(this.state.email);
        axios.post("/api/postProject", {
            projectName: this.state.projectName,
            city: this.state.city,
            category: this.state.category,
            description: this.state.description,
            budget: this.state.budget,
            email: this.state.email,
            date: this.state.date
        })
            .catch(error => console.log(error));

        // browserHistory.push('/');


    };

    render() {
        const {classes, theme} = this.props;

        return (
            <Fragment>
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                <Grid container justify="center" style={{backgroundColor: "#FAFAFA"}}>
                    <Grid
                        item
                        xs={12}
                        className={classes.root}
                        style={{backgroundColor: "#FAFAFA"}}
                    >
                        <Paper>
                        <form>
                            <Typography
                                component="h1"
                                variant="headline"
                                gutterBottom
                                className={classes.paper}
                            >
                                Post A Project
                            </Typography>
                            <Grid item xs={12}>
                                <Typography
                                    component="h1"
                                    variant="subtitle1"
                                    gutterBottom
                                    className={classes.paper}
                                >
                                    Photographers will get back to you soon
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    component="h1"
                                    variant="subtitle1"
                                    gutterBottom
                                    className={classes.forForm}
                                >
                                    Tell us something about your project
                                </Typography>
                            </Grid>
                            <form onSubmit={this.onSubmit}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <TextField
                                            error
                                            id="outlined-textarea"
                                            label="Description"
                                            placeholder="just give a brief description"
                                            multiline
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            style={{marginLeft: 75}}
                                            name="projectName"
                                            value={this.state.projectName}
                                            onChange={this.datachange}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <FormControl
                                            variant="outlined"
                                            className={classes.formControl}
                                            style={{marginLeft: 100}}
                                        >
                                            <InputLabel
                                                error
                                                ref={ref => {
                                                    this.InputLabelRef = ref;
                                                }}
                                                htmlFor="outlined-age-simple"
                                            >
                                                Category
                                            </InputLabel>
                                            <Select
                                                error
                                                value={this.state.category}
                                                onChange={this.datachange}
                                                input={
                                                    <OutlinedInput
                                                        error
                                                        labelWidth={this.state.labelWidth}
                                                        name="category"
                                                        id="outlined-age-simple"
                                                    />
                                                }
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={'Food Photography'}>Food Photography</MenuItem>
                                                <MenuItem value={'Wedding Photography'}>Wedding Photography</MenuItem>
                                                <MenuItem value={'Product Photography'}>Product Photography</MenuItem>
                                                <MenuItem value={'Event Photography'}>Event Photography</MenuItem>
                                                <MenuItem value={'photojournalism'}>photojournalism</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <br/>
                                <br/>

                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography
                                            component="h1"
                                            variant="subtitle1"
                                            gutterBottom
                                            className={classes.forForm}
                                        >
                                            Eloborate your project
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs={7}>
                                        <TextField
                                            error
                                            id="outlined-multiline-static"
                                            label="Some more information"
                                            multiline
                                            rows="4"
                                            placeholder="anything extra you want to add"
                                            className={classes.textField}
                                            margin="normal"
                                            variant="outlined"
                                            fullWidth
                                            style={{marginLeft: 75}}
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.datachange}
                                        />
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <br/>
                                            <br/>

                                            <FormControl className={classes.formControl}>
                                                <InputLabel
                                                    error
                                                    style={{marginLeft: 75}}
                                                    htmlFor="age-simple">City</InputLabel>
                                                <Select
                                                    error
                                                    value={this.state.city}
                                                    onChange={this.datachange}
                                                    style={{marginLeft: 75}}
                                                    inputProps={{
                                                        name: 'city',
                                                        id: 'age-simple',
                                                    }}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={'Lahore'}>Lahore</MenuItem>
                                                    <MenuItem value={'Karachi'}>Karachi</MenuItem>
                                                    <MenuItem value={'Islamabad'}>Islamabad</MenuItem>
                                                </Select>
                                            </FormControl>


                                        </Grid>
                                        <Grid item xs={5}>
                                            <br/>
                                            <br/>
                                            <TextField
                                                error
                                                style={{marginLeft: 25}}
                                                id="outlined-number"
                                                label="Number"
                                                value={this.state.budget}
                                                onChange={this.handleChanger("budget")}
                                                type="number"
                                                className={classes.textField}
                                                // InputProps={{ inputProps: { min: 0, max: 10 } }}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={4} style={{marginLeft: 70, marginTop: 35}}>
                                                <DatePicker  fun={this.setDate.bind(this)}/>
                                            </Grid>

                                        </Grid>


                                    </Grid>

                                    <Grid container justify="center">
                                        <Button
                                            variant="contained"
                                            style={{ backgroundColor: "#FF5722", marginTop: 75, color : "#ffffff" }}
                                            // color="#FF5722"
                                            className={classes.button}
                                            // style={{marginTop: 75}}
                                            type="submit"
                                        >
                                            Post
                                        </Button>


                                    </Grid>
                                </Grid>
                            </form>
                        </form>
                        </Paper>
                    </Grid>

                </Grid>
            </Fragment>
        );
    }
}

PostProject.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(PostProject);
