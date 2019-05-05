import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Rating from 'material-ui-rating';
import {Link} from "react-router-dom";




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

        this.state = {data: [], star:0};


        //check if this project is already is rated


        console.log(this.props.data.rating);


        this.setState({rateCheck : this.props.data.rating});







    }



    handleClickOpen = (id) => {
        this.setState({open: true});

        const route = '/api/postProject/getSubmission/' + id;

        axios.get(route)
            .then(res => {

                this.setState({uploadedProject: res.data[0].uploadedProject });

                const opp = "http://localhost:8080/"+this.state.uploadedProject.substring(7, 100);

                this.setState({uploadedProject:opp});

                console.log(this.state.uploadedProject);

            });

    };

    openRate = (id) => {
        this.setState({handleOpen: true});

        const link = "/api/setProfile/getPhotographerId/"+id;

        axios.get(link)
            .then(res => {


                this.setState({photographerEmail : res.data[0].final_Photographer});


            });


        this.setState({project_id : id});

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


    rate = () => {

        console.log(this.state.photographerEmail);

        axios.post("/api/setProfile/rating", {
            photographer : this.state.photographerEmail,
            rating : this.state.star,
            project_id : this.state.project_id
        })
            .catch(error => console.log(error));

        this.setState({handleOpen: false});


        this.props.receiveData();



    };

    handleCloseAndUpdate = () => {
        this.setState({open: false});
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



                                        <Typography gutterBottom>21 days left</Typography>
                                    </Grid>
                                </Grid>


                                <Grid item>

                                    <div className="ui basic green button"
                                         id={this.props.data._id}
                                         onClick={this.handleClickOpen.bind(this, this.props.data._id)}
                                    >
                                        View


                                    </div>

                                </Grid>


                                { this.props.data.rating ? (

                                    <div></div>

                                ) : (

                                    <Grid item>

                                        <div className="ui button"
                                             id={this.props.data._id}
                                             onClick={this.openRate.bind(this, this.props.data._id)}
                                        >
                                            Rate & Pay

                                        </div>

                                    </Grid>



                                )}

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
                            <br/>
                            <br/>

                            <Grid container justify = "center">

                                <img id="target"  src="http://localhost:8080/zip.png"   width='100' height='100'/>

                            </Grid>



                            <Grid container justify = "center">


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
                        <DialogTitle id="form-dialog-title">Rate your photographer</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Your rating will help other people in selecting photographer
                            </DialogContentText>

                            <Grid container justify = "center">

                                <Rating
                                    value={this.state.star}
                                    max={5}
                                    onChange={(value) => this.setState({star:value})}
                                />

                            </Grid>




                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCloseAndUpdate} color="primary" style={{ color : "#FF1329" }}>
                                Cancel
                            </Button>
                            <Button onClick={this.rate} color="primary" style={{ color : "#80D144" }} >
                                Rate
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
