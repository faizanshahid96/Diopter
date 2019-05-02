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
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Snackbar from './Snackbar';


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
        check:false


    };


    constructor(props) {
        super(props);

        this.state = {data: [], message:'Only zip files are allowed',        pic: true,
        };

    }


    closeSnackbar=()=>{
        this.setState({check:false})
    };


    handleClickOpen = (id) => {
        console.log(id);
        this.setState({project_id: id});
        this.setState({open: true});
    };

    handleCloseAndUpdate = () => {
        this.setState({open: false});
        this.setState({pic:true});
        this.setState({check:false});
    };


    handleClose = () => {


        this.upload();
        this.props.receiveData();

        this.setState({open: false});
        this.setState({pic:true})
    };


    fileSelectedHandler = event => {

        this.setState({check:false});

        console.log(event.target.files[0].name);


        const string = event.target.files[0].name;

        this.setState({link:string});

        const end= string.length ;

        const till= end-3;

        const finalString = string.substring(end,till);

        if (finalString === 'zip'){
            this.setState({
                selectedFile: event.target.files[0]
            });

            this.setState({
                pictureLink: URL.createObjectURL(event.target.files[0])
            });
            this.setState({pic:false});
            this.setState({valid: true});
        }
        else{
            this.setState({check : true});
        }




    };

    upload = () => {

        if (this.state.valid){
            const fd = new FormData();

            fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

            const link = `/api/postProject/uploadProject/`+this.state.project_id;

            axios.post(link, fd)
                .then(res => {

                    return true;
                });


        }
        else{
            this.setState({message: "this file can not be uploaded"});
            this.setState({check : true});
        }




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



                    <Snackbar data={this.state.message} check={this.state.check} func={this.closeSnackbar.bind(this)}/>

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

                                            {this.props.data.projectName}
                                            {/*I am looking for an event photographer for a conference in*/}
                                            {/*Lahore*/}
                                        </Typography>
                                        <Typography variant="caption" gutterBottom>21 days left</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>

                                    <div
                                        className="ui basic green button"
                                        // onClick={this.handleClickOpen}
                                        id={this.props.data._id}
                                        onClick={this.handleClickOpen.bind(this, this.props.data._id)}

                                    >Submit</div>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>

                {/*dialogue box starts from here*/}

                <div>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">You can edit your information here</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                In the description section try to be as much creative as you can, You'll get more jobs
                                by being creative
                            </DialogContentText>

                            <Grid container justify = "center">

                                <div className="image-upload">

                                    <label htmlFor="file-input">
                                        <img  alt='lol' src="http://localhost:8080/upload (1).png" width='200' height='200'/>
                                    </label>

                                    <input id="file-input"  onChange={this.fileSelectedHandler} type="file" style={{display: 'none'}}/>

                                    {!   this.state.pic ? (

                                        <figure className="figure">
                                            <img id="target"  src="http://localhost:8080/zip.png"   width='100' height='100'/>

                                            <figcaption className="figure-caption">{this.state.link}</figcaption>
                                        </figure>


                                    ) : (
                                        <div></div>
                                    )}


                                </div>

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


            </div>



        );
    }
}

IncompleteProjects.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IncompleteProjects);
