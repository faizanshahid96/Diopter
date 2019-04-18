import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

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

class ControlledExpansionPanels extends React.Component {
    state = {
        expanded: null,
        open: false
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false
        });
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {expanded} = this.state;

        return (
            <div>
                <div className={classes.root}>
                    <ExpansionPanel
                        expanded={expanded === "panel1"}
                        onChange={this.handleChange("panel1")}
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.heading}>Project Title</Typography>
                            <Typography className={classes.secondaryHeading}>
                                25/02/2018
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className={classes.rootGrid}>
                                <Paper className={classes.paper}>
                                    <Grid container spacing={16}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={16}>
                                                <Grid item xs>
                                                    <Typography gutterBottom>
                                                        We are arranging a small conference of 300 people,
                                                        in gulberg and I know this is last moment but we
                                                        need a photographer to cover this event and send us
                                                        pictures within 2 week, the price mentioned above
                                                        can be discussed. Just whatsapp me and we will talk
                                                        more about it.
                                                    </Typography>
                                                    <Typography color="textSecondary">
                                                        Location: Lahore
                                                    </Typography>
                                                    <Typography color="textSecondary">RS. 700</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid xs={5}>
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={this.handleClickOpen}
                                                    style={{marginLeft: 6}}
                                                >
                                                    Submit Project
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>

                            {/* <Button
                variant="outlined"
                color="primary"
                onClick={this.handleClickOpen}
              >
                Submit Project
              </Button> */}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                        expanded={expanded === "panel2"}
                        onChange={this.handleChange("panel2")}
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.heading}>Users</Typography>
                            <Typography className={classes.secondaryHeading}>
                                You are currently not an owner
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                                lectus, varius pulvinar diam eros in elit. Pellentesque
                                convallis laoreet laoreet.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                        expanded={expanded === "panel3"}
                        onChange={this.handleChange("panel3")}
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.heading}>
                                Advanced settings
                            </Typography>
                            <Typography className={classes.secondaryHeading}>
                                Filtering has been entirely disabled for whole web server
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                                augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                        expanded={expanded === "panel4"}
                        onChange={this.handleChange("panel4")}
                    >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                            <Typography className={classes.heading}>Personal data</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                                augue.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                {/* // this is where dialogue begins */}
                <div>
                    <Dialog
                        fullScreen
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Transition}
                    >
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    onClick={this.handleClose}
                                    aria-label="Close"
                                >
                                    <CloseIcon/>
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    color="inherit"
                                    className={classes.flex}
                                >
                                    Sound
                                </Typography>
                                <Button color="inherit" onClick={this.handleClose}>
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Grid container justify="center">
                            <Typography gutterBottom>Please add a zip folder here</Typography>
                        </Grid>

                        <Grid container justify="center">
                            <Grid xs={10}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Remarks"
                                    multiline
                                    placeholder="you can add remarks if you like to"
                                    rows="4"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    inputProps={{maxLength: 500}}
                                />
                            </Grid>
                        </Grid>
                    </Dialog>
                </div>
            </div>
        );
    }
}

ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
