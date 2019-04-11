import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from "@material-ui/core/Grid";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from "axios";


const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {
    state = {
        expanded: false,
        open: false,
        name:'Shahreyar Saleem',
        description : 'I am a wedding photographer and my work is to take pictures of everyone presen on the event with little spice of my creativity'
       , selectedFile : null
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    fileSelectedHandler = event =>{

        console.log(event.target.files[0]);
        this.setState({
            selectedFile:event.target.files[0]
        });



    };

    upload = () =>{

        const fd = new FormData();

        fd.append('image',this.state.selectedFile,this.state.selectedFile.name);


        axios.post(`/api/postProject/upload`, fd)
            .then(res => {
                console.log(res);
            });

        axios.post("/api/postProject/info",{
           name:this.state.name,
            description: this.state.description
        })
            .catch(error => console.log(error));



    };



    render() {
        const { classes } = this.props;

        return (

            <div>

            <div>

            <Grid  container justify="center">
            <Card className={classes.card}>
                <CardHeader

                    action={
                        <IconButton  onClick={this.handleClickOpen}>
                            <i className="material-icons">
                                edit
                            </i>
                        </IconButton>
                    }
                    title={this.state.name}

                />
                <CardMedia
                    className={classes.media}
                    image="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/1.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        {this.state.description}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                        <FavoriteIcon />
                        <FavoriteIcon />
                    </IconButton>


                </CardActions>

            </Card>

            </Grid>
            </div>

            <div>
            {/*<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>*/}
            {/*Open form dialog*/}
        {/*</Button>*/}
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">You can edit your information here</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    In the description section try to be as much creative as you can, You'll get more jobs by being creative
                </DialogContentText>
                <TextField
                    error
                    id="outlined-error"
                    label="Name"
                    defaultValue={this.state.name}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <br/>
                <TextField
                    error
                    id="outlined-error"
                    label="Description"
                    defaultValue={this.state.description}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    multiline
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
        </div>

                <input

                    type="file"
                    onChange={this.fileSelectedHandler}
                />

                <button onClick={this.upload}>Upload</button>


            </div>

            //this is code for dialogue box

        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);