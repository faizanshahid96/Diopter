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
import {Message} from "semantic-ui-react";
// import {browserHistory} from 'react-router-dom';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import DatePicker from "./DatePicker";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';


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
        name: "",
        city: "",
        budget: '',
        labelWidth: 0,
        projectName: "",
        category: 0,
        description: '',
        date :'',
        open: false,



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

    // componentDidMount() {
    //     this.setState({
    //         labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    //
    //     });
    //
    //     console.log(localStorage.email);
    //     // console.log(this.props.data.email);
    //
    // }

    datachange = event => {

        this.setState({[event.target.name]: event.target.value});



    };

    onSubmit = (e) => {

        e.preventDefault();


        if (this.state.projectName === undefined  || this.state.city === undefined || this.state.category === undefined || this.state.description === undefined || this.state.budget === undefined
            || this.state.date === undefined || this.state.budget < 0){
            this.setState({error : true});
        }
        else if(this.state.projectName === ''  || this.state.city === ''  || this.state.description === "" || this.state.budget === ""
            || this.state.date === ""){

            console.log('1200')
        }
        else{

            console.log(this.state.projectName);
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
            this.setState({ open: true });
        }

    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        const {classes, theme} = this.props;

        return (
            <Fragment>

                <Grid container justify="center" style={{backgroundColor: "#FAFAFA"}}>
                    <Grid
                        item
                        xs={12}
                        className={classes.root}
                        style={{backgroundColor: "#FAFAFA"}}
                    >
                        <Paper>
                        <form>

                            <Typography component="h1" variant="display1" gutterBottom className={classes.paper}>
                                Post A Project
                            </Typography>
                            <Grid item xs={12}>
                                <Typography
                                    // component="h1"
                                    variant="subheading"
                                    gutterBottom
                                    className={classes.paper}
                                >
                                    Photographers will get back to you soon
                                </Typography>
                            </Grid>

                            <br/>
                            <Grid container justify="center">
                            <Grid item xs={3}>
                                {this.state.error && (
                                    <Message negative className={classes.paper}>
                                        <Message.Header>Empty Fields are not allowed</Message.Header>

                                    </Message>
                                )}
                            </Grid>
                            </Grid>

                            <br/>
                            <Grid item xs={12}>
                                <Typography
                                    component="h1"
                                    variant="caption"
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
                                            label="Title"
                                            placeholder="what are you looking for?"
                                            multiline
                                            fullWidth
                                            inputProps={{maxLength: 100}}
                                            margin="normal"
                                            variant="outlined"
                                            style={{marginLeft: 75}}
                                            name="projectName"
                                            value={this.state.projectName}
                                            onChange={this.datachange}
                                        />
                                    </Grid>
                                    <Grid item xs={5}>









                                        <FormControl className={classes.formControl}
                                                     style={{marginLeft: 200}}
                                                     style={{marginLeft: 200}}

                                        >
                                            <Select
                                                error
                                                value={this.state.category}
                                                onChange={this.datachange}
                                                name="category"
                                                displayEmpty
                                                className={classes.selectEmpty}
                                            >
                                                <MenuItem value="" disabled>
                                                    Select your desired category
                                                </MenuItem>
                                                <MenuItem value={'Food Photography'}>Food Photography</MenuItem>
                                                <MenuItem value={'Wedding Photography'}>Wedding Photography</MenuItem>
                                                <MenuItem value={'Product Photography'}>Product Photography</MenuItem>
                                                <MenuItem value={'Event Photography'}>Event Photography</MenuItem>
                                                <MenuItem value={'photojournalism'}>photojournalism</MenuItem>
                                            </Select>
                                            <FormHelperText>Category</FormHelperText>
                                        </FormControl>





                                    </Grid>
                                </Grid>
                                <br/>
                                <br/>

                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography
                                            component="h1"
                                            variant="caption"
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
                                            inputProps={{maxLength: 500}}
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

                                                {/*<FormControl className={classes.formControl}>*/}
                                                {/*    <InputLabel*/}
                                                {/*        error*/}
                                                {/*        style={{marginLeft: 75}}*/}
                                                {/*        htmlFor="age-simple">City</InputLabel>*/}
                                                {/*    <Select*/}
                                                {/*        error*/}
                                                {/*        value={this.state.city}*/}
                                                {/*        onChange={this.datachange}*/}
                                                {/*        style={{marginLeft: 75}}*/}
                                                {/*        inputProps={{*/}
                                                {/*            name: 'city',*/}
                                                {/*            id: 'age-simple',*/}
                                                {/*        }}*/}
                                                {/*    >*/}
                                                {/*        <MenuItem value="">*/}
                                                {/*            <em>None</em>*/}
                                                {/*        </MenuItem>*/}
                                                {/*        <MenuItem value={'Lahore'}>Lahore</MenuItem>*/}
                                                {/*        <MenuItem value={'Karachi'}>Karachi</MenuItem>*/}
                                                {/*        <MenuItem value={'Islamabad'}>Islamabad</MenuItem>*/}
                                                {/*    </Select>*/}
                                                {/*</FormControl>*/}

                                            <FormControl className={classes.formControl}
                                                         style={{marginLeft: 75}}


                                            >
                                                <Select
                                                    error
                                                    value={this.state.city}
                                                    onChange={this.datachange}
                                                    name="city"
                                                    displayEmpty
                                                    className={classes.selectEmpty}
                                                >
                                                    <MenuItem value="" disabled>
                                                        Select your desired city
                                                    </MenuItem>
                                                    <MenuItem value={'Lahore'}>Lahore</MenuItem>
                                                    <MenuItem value={'Karachi'}>Karachi</MenuItem>
                                                    <MenuItem value={'Islamabad'}>Islamabad</MenuItem>
                                                </Select>
                                                <FormHelperText>City</FormHelperText>
                                            </FormControl>






                                        </Grid>
                                        <Grid item xs={5}>
                                            <br/>
                                            <br/>
                                            <TextField
                                                error
                                                style={{marginLeft: 25}}
                                                id="outlined-number"
                                                label="Budget"
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
                                                <DatePicker  fun={this.setDate.bind(this)} data={'Event Date'}/>
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


                {/*//DIALOUE STARTS FROM HERE*/}


                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Your project has been posted
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                       <Link to='/onGoingProjects'> <Button onClick={this.handleClose} color="primary" autoFocus>
                            Okay
                       </Button></Link>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

PostProject.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(PostProject);
