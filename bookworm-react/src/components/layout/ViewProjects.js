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
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';


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
    },
    margin:{
        marginLeft: 40
    }
});


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ControlledExpansionPanels extends React.Component {
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
        info_dialogue:'',
        time:'',
        date:''

    };


    constructor(props) {
        super(props);

        this.state = {data: []};

    }

    //
    // setDate=(date)=>{
    //     this.setState({date:date});
    //     console.log(this.state.date);
    // };
    //
    // setTime=(time)=>{
    //     this.setState({time:time});
    //     console.log(this.state.time);
    // };
    //
    //
    //
    // handleClickOpenDialogue = (id) => {
    //     this.setState({openDialogue: true});
    //
    //
    //     // console.log(this.state.data.filter(object => object._id.includes(id)));
    //
    //
    //     this.state.data.filter(object => object._id.includes(id)).map((data, index) => {
    //         this.setState({proposal: data.proposal});
    //         this.setState({budget: data.budget});
    //         this.setState({photographer_id: data.pUser_id});
    //         this.setState({project_id: data.project_id});
    //
    //         console.log(this.state.photographer_id);
    //         return 0;
    //     })
    //
    //
    // };
    //
    // handleCloseDialogue = () => {
    //     this.setState({openDialogue: false});
    // };
    //
    // handleChange = panel => (event, expanded) => {
    //     this.setState({
    //         expanded: expanded ? panel : false
    //     });
    // };
    //
    handleClickOpen = (id) => {
        this.setState({open: true});
        const pUser_id = localStorage.email;


        console.log(localStorage.email);
        const route = '/api/postProject/'+pUser_id;

        axios.get(route)
                .then(res => {


                    console.log(res.data);

                });





        // this.recieveData(id);
    };
    //
    //
    // recieveData = (id) => {
    //
    //     const route = '/api/sendProposal/' + id;
    //     // `/api/sendProposal/5ca386873452bc1ebcba5b93`
    //     axios.get(route)
    //         .then(res => {
    //
    //
    //             // console.log(res.data);
    //             this.setState({data: res.data});
    //         });
    // };
    //
    // handleClose = () => {
    //     this.setState({open: false});
    // };
    //
    // closeInfoDialogue = () => {
    //     this.setState({info_dialogue: false});
    // };
    //
    //
    // projectDone = ()=>{
    //     const route = 'api/postProject/' + this.state.project_id;
    //
    //     axios.get(route)
    //         .then(res => {
    //
    //
    //             // console.log(res.data);
    //             this.setState({client_id: res.data});
    //
    //         });
    //
    //     axios.post("/api/projects_proposals", {
    //         project_id: this.state.project_id,
    //         client_id: localStorage.email,
    //         photographer_id: this.state.photographer_id,
    //         date: this.state.date,
    //         time: this.state.time
    //     }).then()
    //         .catch(error => console.log(error));
    //
    //     this.props.receiveData();
    // };
    //
    //
    // startProject = () => {
    //
    //
    //
    //     this.setState({info_dialogue: true});
    //
    //
    //
    //     this.setState({openDialogue: false});
    //     this.setState({open: false});
    //
    // };

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
                                    <Grid item xs className={classes.margin}>

                                        <Typography gutterBottom variant="subheading">

                                            {this.props.data.projectName.substring(0, 200)}

                                        </Typography>



                                        <Typography gutterBottom variant="overline">

                                            {this.props.data.description.substring(0, 300)}

                                        </Typography>

                                        <Typography  variant="caption" gutterBottom style={{marginTop: 10}}> Location: {this.props.data.city}</Typography>

                                        <Typography   variant="caption" gutterBottom> Event Date: {this.props.data.date}</Typography>

                                    </Grid>


                                </Grid>
                                {/*<Grid item>*/}
                                {/*    <Button*/}
                                {/*        variant="outlined"*/}
                                {/*        color="primary"*/}
                                {/*        id={this.props.data._id}*/}
                                {/*        onClick={this.handleClickOpen.bind(this, this.props.data._id)}*/}
                                {/*        style={{marginTop: 7}}*/}
                                {/*    >*/}

                                {/*        View Proposals*/}
                                {/*    </Button>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

                {/*/!* // this is where dialogue begins *!/*/}
                {/*<div>*/}
                {/*    <Dialog*/}
                {/*        fullScreen*/}
                {/*        open={this.state.open}*/}
                {/*        onClose={this.handleClose}*/}
                {/*        TransitionComponent={Transition}*/}
                {/*    >*/}
                {/*        <AppBar className={classes.appBar}>*/}
                {/*            <Toolbar>*/}


                {/*                <Button color="inherit" onClick={this.handleClose}>*/}
                {/*                    close*/}
                {/*                </Button>*/}
                {/*            </Toolbar>*/}
                {/*        </AppBar>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}
                {/*        <br/>*/}

                {/*        {*/}
                {/*            this.state.data.map((data, index) =>*/}
                {/*                <div>*/}
                {/*                    <List>*/}

                {/*                        <ListItem>*/}
                {/*                            <ListItemAvatar>*/}
                {/*                                <Avatar>*/}
                {/*                                    <FolderIcon/>*/}
                {/*                                </Avatar>*/}
                {/*                            </ListItemAvatar>*/}


                {/*                            <ListItemText*/}
                {/*                                primary={data.proposal.substring(0, 100) + '.....'}*/}
                {/*                                secondary={secondary ? "Secondary text" : null}*/}
                {/*                            />*/}
                {/*                            <ListItemSecondaryAction>*/}
                {/*                                <IconButton*/}
                {/*                                    aria-label="Delete"*/}
                {/*                                    id={data._id}*/}

                {/*                                    onClick={this.handleClickOpenDialogue.bind(this, data._id)}*/}
                {/*                                >*/}
                {/*                                    <i className="material-icons">*/}
                {/*                                        remove_red_eye*/}
                {/*                                    </i>*/}
                {/*                                </IconButton>*/}
                {/*                            </ListItemSecondaryAction>*/}
                {/*                        </ListItem>*/}

                {/*                    </List>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }*/}

                {/*    </Dialog>*/}
                {/*</div>*/}

                {/*/!*THE DIALOGUE BOX TO VIEW A SPECIFIC PROPOSAL STARTS FROM HERE*!/*/}
                {/*<div>*/}
                {/*    <Dialog*/}
                {/*        open={this.state.openDialogue}*/}
                {/*        onClose={this.handleCloseDialogue}*/}
                {/*        aria-labelledby="form-dialog-title"*/}
                {/*    >*/}
                {/*        /!*<DialogTitle id="form-dialog-title"></DialogTitle>*!/*/}
                {/*        <DialogContent>*/}
                {/*            <DialogContentText>*/}
                {/*                This is the proposal sent by the photographer*/}
                {/*            </DialogContentText>*/}
                {/*            <Grid container>*/}
                {/*                <Grid xs={12}>*/}
                {/*                    <TextField*/}
                {/*                        id="outlined-read-only-input"*/}
                {/*                        label="Proposal"*/}
                {/*                        defaultValue={this.state.proposal}*/}
                {/*                        className={classes.textField}*/}
                {/*                        margin="normal"*/}
                {/*                        multiline*/}
                {/*                        fullWidth*/}
                {/*                        InputProps={{*/}
                {/*                            readOnly: true*/}
                {/*                        }}*/}
                {/*                        variant="outlined"*/}
                {/*                    />*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*            <Grid container>*/}
                {/*                <Grid item xs={5}>*/}
                {/*                    <TextField*/}
                {/*                        id="outlined-number"*/}
                {/*                        label="Budget"*/}
                {/*                        value={this.state.budget}*/}
                {/*                        // onChange={this.handleChanger("budget")}*/}
                {/*                        type="number"*/}
                {/*                        className={classes.textField}*/}
                {/*                        InputProps={{inputProps: {min: 0, max: 10}}}*/}
                {/*                        margin="normal"*/}
                {/*                        variant="outlined"*/}
                {/*                        multiline*/}
                {/*                        fullWidth*/}
                {/*                    />*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </DialogContent>*/}
                {/*        <DialogActions>*/}
                {/*            <Button onClick={this.handleCloseDialogue} color="primary">*/}
                {/*                Cancel*/}
                {/*            </Button>*/}
                {/*            <Button onClick={this.startProject} color="primary">*/}
                {/*                Start Project*/}
                {/*            </Button>*/}
                {/*        </DialogActions>*/}
                {/*    </Dialog>*/}
                {/*</div>*/}

                {/*/!*THIS CODE IS FOR ENTER DETAILS OF THE EVENT AND THEN THE PROJECT STARTS*!/*/}


                {/*<div>*/}
                {/*    <Dialog*/}
                {/*        open={this.state.info_dialogue}*/}
                {/*        onClose={this.handleCloseDialogue}*/}
                {/*        aria-labelledby="form-dialog-title"*/}
                {/*    >*/}
                {/*        /!*<DialogTitle id="form-dialog-title"></DialogTitle>*!/*/}
                {/*        <DialogContent>*/}
                {/*            <DialogContentText>*/}
                {/*                Please add following information and get started*/}
                {/*            </DialogContentText>*/}
                {/*            <Grid container>*/}
                {/*                <Grid xs={12}>*/}
                {/*                    <DatePicker fun={this.setDate.bind(this)} />*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}

                {/*            <br/>*/}
                {/*            <Grid container>*/}
                {/*                <Grid item xs={5}>*/}
                {/*                    <TimePicker fun={this.setTime.bind(this)}/>*/}

                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </DialogContent>*/}
                {/*        <DialogActions>*/}
                {/*            <Button onClick={this.closeInfoDialogue} color="primary">*/}
                {/*                Cancel*/}
                {/*            </Button>*/}
                {/*            <Button onClick={this.projectDone} color="primary">*/}
                {/*                Start Project*/}
                {/*            </Button>*/}
                {/*        </DialogActions>*/}
                {/*    </Dialog>*/}
                {/*</div>*/}





            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
