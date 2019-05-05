import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import {withStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import {Router, Route, Switch} from "react-router";
import moment from 'moment';
import {Message} from "semantic-ui-react";


const styles = theme => ({
    appBar: {
        position: "relative"
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60
    },
    bigAvatar: {
        margin: 10,
        width: 130,
        height: 130
    },
    flex: {
        flex: 1
    },
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: "auto",
        maxWidth: 800
    },
    paper2: {
        padding: theme.spacing.unit * 2,
        margin: "auto",
        width: 1200,
        marginLeft: 60,
        marginRight: 50
    },
    image: {
        width: 128,
        height: 128
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    }
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class PostedProject extends React.Component {
    state = {
        open: false,
        openDialogue: false,
        name: "hai",
        para: "",
        proposal: "",
        budget: '',
        projects: [],

    };

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            index: props.index,
            id: '',


        };

        const link = "/api/clientProfile/getProfile/"+this.props.data._id;

        console.log(link);
        axios.get(link)
            .then(res => {

                // console.log(res.data);

                this.setState({pictureLink: res.data[0].profilePicture});
                this.setState({name: res.data[0].name});



                const opp = "http://localhost:8080/"+this.state.pictureLink.substring(7, 100);

                this.setState({pictureLink:opp});

                console.log(this.state.pictureLink);
            });

        console.log('hello');



    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({data: nextProps.data});
    }

    datachange = event => {

        this.setState({[event.target.name]: event.target.value});
        console.log(this.state.proposal);

    };

    handleChanger = name => event => {
        this.setState({
            [name]: event.target.value
        });


    };


    handleClickOpen = (id) => {

        this.setState({open: true});

        this.setState({id: id});
        console.log(this.state.id);
    };

    handleClose = () => {
        this.setState({open: false});
        // this.props.hello('shahreyra');
    };

    handleClickOpenDialogue = () => {
        this.setState({openDialogue: true});
        this.setState({error : false});

    };

    sendData = () => {

        if(this.state.proposal === undefined || this.state.budget === undefined){
            this.setState({error : true});

        }else if(this.state.proposal === '' || this.state.budget === ""){
            this.setState({error : true});
        }
        else{
            axios.post("/api/sendProposal", {
                proposal: this.state.proposal,
                budget: this.state.budget,
                project_id: this.state.id,
                user_id: localStorage.email,
            }).catch(error => console.log(error));


            this.props.recieveData();
            this.setState({openDialogue: false});
            this.setState({open: false});
        }




    };


    handleCloseDialogue = () => {
        this.setState({openDialogue: false});
    };






    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div>





                    {/*{this.props.data}*/}
                    {/* this code is for the stuff inside dialougue box */}

                    <Dialog
                        fullScreen
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar className={classes.appBar}>
                            <Toolbar>

                                <Typography
                                    variant="h6"
                                    color="inherit"
                                    onClick={this.handleClose}
                                    className={classes.flex}
                                >
                                    Close
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    className={classes.button}
                                    onClick={this.handleClickOpenDialogue}
                                >
                                    Send Proposal
                                </Button>
                            </Toolbar>
                        </AppBar>

                        {/* start changing code from here */}


                        <Grid container style={{backgroundColor :"#FAFAFA" , width : "auto" ,height : 250} } >


                            <Grid container justify="center">
                                <Avatar
                                    alt="Remy Sharp"
                                    src={this.state.pictureLink}
                                    className={classes.bigAvatar}
                                    style={{marginTop: 40}}
                                />
                            </Grid>


                            <Grid container justify="center">
                                <br/>
                                <Typography gutterBottom component="h2" variant="display2" style={{marginTop: 20}}>
                                    {this.state.name}
                                </Typography>
                            </Grid>


                        </Grid>



                        <Grid container style={{backgroundColor :"#FAFAFA" , width : "auto" ,height : "auto" } } >



                            <Paper className={classes.paper2} style={{marginTop: 100}}>

                                <Grid container justify="center" style={{marginTop: 10, marginLeft: 4}}>
                                    <Typography component="h2" variant="display1" gutterBottom>
                                        Details
                                    </Typography>
                                </Grid>


                                <Grid container>
                                    <Grid
                                        item
                                        xs={12}
                                        style={{marginTop: 70, marginRight: 20, marginLeft: 70}}
                                    >
                                        <Typography gutterBottom component="h2" variant="display1">
                                            Project Title
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid
                                        item
                                        xs={12}
                                        style={{marginTop: 20, marginRight: 20, marginLeft: 70}}
                                    >
                                        <Typography gutterBottom variant="subtitle1">
                                            {this.props.data.projectName}
                                        </Typography>
                                    </Grid>
                                </Grid>


                                <Grid container>
                                    <Grid
                                        item
                                        xs={12}
                                        style={{marginTop: 70, marginRight: 20, marginLeft: 70}}
                                    >
                                        <Typography gutterBottom component="h2" variant="display1">
                                            Project Description
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid
                                        item
                                        xs={10}
                                        style={{marginTop: 20, marginRight: 20, marginLeft: 70}}
                                    >
                                        <Typography gutterBottom variant="subtitle1">
                                            {this.props.data.description}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid xs={4} sm={4}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            label="Budget"
                                            defaultValue={this.props.data.budget}
                                            className={classes.textField}
                                            margin="normal"
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            variant="outlined"
                                            style={{marginTop: 70, marginRight: 20, marginLeft: 70}}
                                        />
                                    </Grid>

                                    <Grid xs={6} sm={6}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            label="Location"
                                            defaultValue={this.props.data.city}
                                            className={classes.textField}
                                            margin="normal"
                                            InputProps={{
                                                readOnly: true
                                            }}
                                            variant="outlined"
                                            style={{marginTop: 70, marginLeft: 70}}
                                        />
                                    </Grid>
                                </Grid>


                            </Paper>






                        </Grid>











                        {/* this is the code for card */}
                    </Dialog>
                    <div className={classes.root}>
                        <br/>
                        <br/>
                        <br/>
                        <Paper className={classes.paper}>
                            <Grid container spacing={16}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={this.state.pictureLink}
                                            className={classes.avatar}
                                        />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={16}>
                                        <Grid item xs>
                                            <br/>
                                            <Typography gutterBottom component="h2" variant="display1">
                                                {this.props.data.projectName}
                                            </Typography>
                                            <Grid container>
                                                <i className="material-icons" style={{ color: '#FF5722' }}>
                                                    category
                                                </i>

                                                <Typography gutterBottom style={{marginTop: 3, marginLeft: 3}}>
                                                    {this.props.data.category}
                                                </Typography>
                                            </Grid>

                                            <Grid container style={{marginTop: 8}}>
                                                <i className="material-icons" style={{ color: '#FF5722' }}>
                                                    calendar_today
                                                </i>

                                                <Typography gutterBottom style={{marginTop: 3, marginLeft: 3}}>
                                                    {(moment(this.props.data.createdAt).format("L LTS")).substring(0, 10)}
                                                </Typography>

                                            </Grid>

                                            <Grid container style={{marginTop: 8}}>
                                                <i className="material-icons" style={{ color: '#FF5722' }}>
                                                    pin_drop
                                                </i>

                                                <Typography color="textSecondary" style={{marginTop: 3, marginLeft: 3}}>
                                                    {this.props.data.city}
                                                </Typography>

                                            </Grid>


                                        </Grid>
                                        <Grid container justify="center">
                                            <Grid xs={5}>
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={this.handleClickOpen.bind(this, this.props.data._id)}
                                                    style={{ color: '#FF5722'}}
                                                >
                                                    VIEW MORE
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>

                                        <div style={{marginLeft: 4}}>
                                            <i className="material-icons" style={{ color: '#FF5722' }}>
                                                attach_money
                                            </i>
                                        </div>
                                        <Typography variant="subtitle1">{this.props.data.budget}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                    <br/>
                    <br/>
                </div>
                {/* this dialogue box is for writing proposal */}

                <Dialog
                    open={this.state.openDialogue}
                    onClose={this.handleCloseDialogue}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Write Proposal</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Start writing your proposal, try to be brief and clear.
                        </DialogContentText>

                        <Grid container justify="center">
                            <Grid item xs={12}>
                                {this.state.error && (
                                    <Message negative>
                                        <Message.Header>Empty Fields are not allowed</Message.Header>

                                    </Message>
                                )}
                            </Grid>
                        </Grid>


                        <Grid container>
                            <Grid xs={12}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="max 500 words"
                                    multiline
                                    rows="4"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    inputProps={{maxLength: 500}}
                                    name="proposal"
                                    value={this.state.proposal}
                                    onChange={this.datachange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={5}>
                                <TextField
                                    id="outlined-number"
                                    label="Number"
                                    name="proposal"
                                    value={this.state.budget}
                                    onChange={this.handleChanger("budget")}
                                    type="number"
                                    className={classes.textField}
                                    InputProps={{inputProps: {min: 0, max: 10}}}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialogue} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.sendData} color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

PostedProject.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostedProject);
