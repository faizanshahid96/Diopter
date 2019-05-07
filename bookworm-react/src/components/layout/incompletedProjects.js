import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import {Link} from "react-router-dom";
var moment = require('moment');



const styles = theme => ({
    root: {
        width: "100%"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary
    },
    appBar: {
        position: "relative"
    },
    flex: {
        flex: 1
    },
    card: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    rootGrid: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        margin: "auto",
        maxWidth: 1000
    }
});


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class IncompleteProjects extends React.Component {
    state = {
        expanded: null,
        open: false,
        dense: false,
        secondary: false,
        openDialogue: false,
        proposal: '',
        budget: '',
        project_id: '',
        photographer_id: '',
        client_id: '',
        uploadedProject:'',
        handleOpen: false,
        report: ''

    };


    constructor(props) {
        super(props);

        this.state = {data: []};

        const link = "/api/setProfile/getPhotographerId/"+this.props.data._id;

        axios.get(link)
            .then(res => {


                this.setState({photographerEmail : res.data[0].final_Photographer});


            });




    }

    handleClickOpenDialogue = (id) => {
        this.setState({openDialogue: true});


        // console.log(this.state.data.filter(object => object._id.includes(id)));


        this.state.data.filter(object => object._id.includes(id)).map((data, index) => {
            this.setState({proposal: data.proposal});
            this.setState({budget: data.budget});
            this.setState({photographer_id: data.pUser_id});
            this.setState({project_id: data.project_id});

            // console.log(this.state.photographer_id);
            return 0;
        })


    };

    handleCloseDialogue = () => {
        this.setState({openDialogue: false});
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    };


    openReport = (id) => {
        this.setState({handleOpen: true});

        this.setState({project_id:id});

    };







    recieveData = (id) => {

        const route = '/api/sendProposal/' + id;
        // `/api/sendProposal/5ca386873452bc1ebcba5b93`
        axios.get(route)
            .then(res => {


                // console.log(res.data);
                this.setState({data: res.data});
            });
    };

    handleClose = () => {

        this.setState({open: false});
    };


    handleOpen = () => {

        this.setState({handleOpen: false});
    };

    datachange = event => {

        this.setState({[event.target.name]: event.target.value});
    };


    reportHere = () => {

        axios.post("/api/customerCare", {
            project_id: this.state.project_id,
            client_id: localStorage.email,
            complain:this.state.report
        }).then()
            .catch(error => console.log(error));


        this.setState({handleOpen: false});


    };


    redirectToProfile = (id) => {

        console.log(id);

        localStorage.profile_id=id;

        this.props.redirect();


    };


    render() {
        const {classes} = this.props;
        const {dense, secondary} = this.state;

        function generate(element) {
            return [0, 1, 2].map(value =>
                React.cloneElement(element, {
                    key: value
                })
            );
        }

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={16}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">

                                            {this.props.data.projectName}
                                            {/*I am looking for an event photographer for a conference in*/}
                                            {/*Lahore*/}
                                        </Typography>
                                        <Grid container>



                                            <Typography   variant="caption" gutterBottom style={{ marginLeft: 6, marginTop: 5}}>
                                                <span style={{color : "#E91E63"}}>Date: </span>
                                                {this.props.data.date}
                                            </Typography>

                                        </Grid>

                                        <Grid container>



                                            <Typography   variant="caption" gutterBottom style={{ marginLeft: 6, marginTop: 5}}>
                                                <span style={{color : "#E91E63"}}> Time: </span>
                                                {this.props.data.time}
                                            </Typography>

                                        </Grid>


                                        <Grid container>

                                            <Typography   variant="caption" gutterBottom style={{ marginLeft: 6, marginTop: 5}}>
                                                <span style={{color : "#E91E63"}}>Location: </span>
                                                {this.props.data.city}
                                            </Typography>

                                        </Grid>


                                        <Grid container>

                                            <Typography   variant="caption" gutterBottom style={{ marginLeft: 6, marginTop: 5}}>
                                                <span style={{color : "#E91E63"}}>Submision data: </span>
                                                {this.props.data.SubmissionDate}
                                            </Typography>

                                        </Grid>
                                    </Grid>
                                </Grid>


                                <Grid item>

                                    <div className="ui basic green button"
                                         id={this.props.data._id}
                                         onClick={this.redirectToProfile.bind(this, this.state.photographerEmail)}
                                    >
                                        View Profile
                                    </div>

                                </Grid>



                                <Grid item>

                                    <div className="ui button"
                                         id={this.props.data._id}
                                         onClick={this.openReport.bind(this, this.props.data._id)}
                                    >
                                        Report


                                    </div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

                {/*dialogue box starts from here*/}

                <div>
                    {/*<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>*/}
                    {/*Open form dialog*/}
                    {/*</Button>*/}
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">You can download the project from here</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                The photographer submitted the project, now you are able to download it from here
                            </DialogContentText>

                            <Grid container justify = "center">

                                {/*<Link to={this.state.uploadedProject}>*/}

                                    <Button color="primary" style={{ color : "#FF1329" }} href={this.state.uploadedProject}>
                                    Download
                                    </Button>

                                {/*</Link>*/}

                            </Grid>




                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCloseAndUpdate} color="primary" style={{ color : "#FF1329" }}>
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="primary" style={{ color : "#80D144" }} >
                                Upload
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>


                {/*dialogue box to report a user can be done here*/}

                <div>
                    {/*<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>*/}
                    {/*Open form dialog*/}
                    {/*</Button>*/}
                    <Dialog
                        open={this.state.handleOpen}
                        onClose={this.handleOpen}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">You can report your complain here</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Your complain will be entertained by customer care service
                            </DialogContentText>

                            <Grid container justify = "center">

                                <TextField
                                    error
                                    id="outlined-error"
                                    label="write your complain here"
                                    name="report"
                                    value={this.state.report}
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.datachange}
                                    fullWidth
                                    multiline
                                />

                            </Grid>




                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCloseAndUpdate} color="primary" style={{ color : "#FF1329" }}>
                                Cancel
                            </Button>
                            <Button onClick={this.reportHere} color="primary" style={{ color : "#80D144" }} >
                                Report
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>



            </div>
            // </div>
        );
    }
}

IncompleteProjects.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IncompleteProjects);
