import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import ReactDOM from 'react-dom';
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
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Chips from './chips';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ImageGallery from './ImageGallery';






const styles = theme => ({
    card: {
        maxWidth: 1500,
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
    // avatar: {
    //     backgroundColor: red[500],
    // },



        avatar: {
            margin: 10,
        },
        bigAvatar: {
            margin: 10,
            width: 250,
            height: 250,
        },

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },

    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },

    // imageupload :
    //     {
    //         display: none
    //
    //     }
});

class RecipeReviewCard extends React.Component {
    state = {
        expanded: false,

    };


    constructor(props) {
        super(props);
        this.state = {data: [],
            open: false,
            name: '',
            description: 'I am a wedding photographer and my work is to take pictures of everyone presen on the event with little spice of my creativity'
            , selectedFile: null
            ,labelWidth: 0,
            city:'',
            expert:'',
            pic: true,
            pictureLink: "",
            gallery : [
                "http://localhost:8080/choose.png",
                "http://localhost:8080/choose.png",
                "http://localhost:8080/choose.png",
                "http://localhost:8080/choose.png",
                "http://localhost:8080/choose.png",
                "http://localhost:8080/choose.png"
            ],
            gallery1: []
        };


        this.recieveData();


    }

    recieveData =()=>{

        const link="/api/setProfile/"+localStorage.email;

        axios.get(link)
            .then(res => {
                this.setState({name: res.data[0].name});
                this.setState({description: res.data[0].description});
                this.setState({city: res.data[0].location});
                this.setState({expert: res.data[0].expert});
                this.setState({pictureLink: res.data[0].profilePicture});
                this.setState({gallery1: res.data[0].gallery});

                console.log(this.state.gallery1);
                console.log(this.state.gallery1);
                console.log(this.state.gallery1);




                const opp = "http://localhost:8080/"+this.state.pictureLink.substring(7, 100);

                this.setState({pictureLink:opp});

                console.log(this.state.pictureLink);


            });

    };

    updatedData =()=>{

        const link="/api/setProfile/"+localStorage.email;

        axios.get(link)
            .then(res => {
                this.setState({name: res.data[0].name});
                this.setState({description: res.data[0].description});
                this.setState({city: res.data[0].location});
                this.setState({expert: res.data[0].expert});
            });



    };


    sendData = () =>{

        axios.post("/api/setProfile", {
            name: this.state.name,
            location: this.state.city,
            description: this.state.description,
            user_id: localStorage.email,
            expert: this.state.expert
        }).catch(error => console.log(error));



    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {

        if (this.state.selectedFile === null){


            this.sendData();
            this.updatedData();

        }
        else{
            this.upload();
            this.sendData();
            this.updatedData();
        }

        this.setState({open: false});
        this.setState({pic:true})
    };


    handleCloseAndUpdate = () => {
        this.recieveData();
        this.setState({open: false});
        this.setState({pic:true})
    };

    fileSelectedHandler = event => {

        // console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        });

        this.setState({
            pictureLink: URL.createObjectURL(event.target.files[0])
        });
        this.setState({pic:false})

    };

    upload = () => {

        const fd = new FormData();

        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

        const link = `/api/setProfile/upload/`+localStorage.email;

        axios.post(link, fd)
            .then(res => {

                return true;
            });


    };

    datachange = event => {

        this.setState({[event.target.name]: event.target.value});


    };


    render() {
        const {classes} = this.props;

        return (

            <div>

                <div className={classes.root}>
                    <Grid container spacing={24} justify="center">
                        <Grid item xs={8}>
                            <Paper className={classes.paper}>


                                <Grid container justify = "center">
                                    <Avatar alt="Remy Sharp" src={this.state.pictureLink} className={classes.bigAvatar} />

                                </Grid>


                                <Grid container justify = "center">
                                    <Typography variant="h6" gutterBottom>
                                        {this.state.name}
                                    </Typography>

                                </Grid>






                                <Grid container justify = "center">
                                    <Chips data={this.state.expert}/>
                                </Grid>


                                <Grid container justify = "center">


                                    <Typography variant="caption" gutterBottom style={{margin: 10}}>
                                        {this.state.city}, Pakistan
                                    </Typography>
                                </Grid>




                                <br/>
                                <br/>

                                <Grid container justify = "center">
                                    <FavoriteIcon/>
                                    <FavoriteIcon/>
                                    <FavoriteIcon/>

                                </Grid>
                                <br/>



                                <Grid container justify = "center">
                                    <Typography variant="subtitle1" gutterBottom>
                                        {this.state.description}
                                    </Typography>
                                </Grid>


                                <br/>
                                <br/>

                                <Grid container justify = "center">
                                    <Button variant="contained" color="primary" className={classes.button} onClick={this.handleClickOpen}
                                            style={{ backgroundColor: "#FF5722", color : "#ffffff" }}>
                                        <i className="material-icons">
                                        edit
                                        </i>
                                    </Button>
                                </Grid>




                            </Paper>
                        </Grid>
                    </Grid>
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
                        <DialogTitle id="form-dialog-title">You can edit your information here</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                In the description section try to be as much creative as you can, You'll get more jobs
                                by being creative
                            </DialogContentText>

                            <Grid container justify = "center">

                                <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <img  alt='lol' src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/1.jpg" width='200' height='200'/>
                                    </label>

                                    <input id="file-input"  onChange={this.fileSelectedHandler} type="file" style={{display: 'none'}}/>

                                    {!   this.state.pic ? (
                                        <img id="target"  src={this.state.pictureLink}  width='200' height='200'/>
                                    ) : (
                                    <div></div>
                                    )}


                                </div>

                                {/*<Typography variant="caption" gutterBottom style={{margin: 10}}>*/}
                                    {/*Upload Profile Picture:*/}
                                {/*</Typography>*/}


                                {/*<Button variant="contained" color="primary" className={classes.button} onClick={this.handleClickOpen}*/}
                                        {/*style={{ backgroundColor: "#FF5722", color : "#ffffff" }}>*/}
                                    {/*<i className="material-icons">*/}
                                        {/*vertical_align_top*/}
                                    {/*</i>*/}

                                {/*</Button>*/}
                            </Grid>



                            <TextField
                                error
                                id="outlined-error"
                                label="Name"
                                name="name"
                                value={this.state.name}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                onChange={this.datachange}
                                fullWidth
                            />
                            <br/>
                            <TextField
                                error
                                id="outlined-error"
                                label="Description"
                                name="description"
                                value={this.state.description}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                                onChange={this.datachange}

                                fullWidth
                                multiline
                            />

                            <Grid container justify = "center">

                            <div style={{marginLeft: 10}}>

                            <FormControl className={classes.formControl}>
                                <Select
                                    error
                                    value={this.state.city}
                                    onChange={this.datachange}
                                    name="city"
                                    displayEmpty
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value="" disabled>
                                        City
                                    </MenuItem>
                                    <MenuItem value={'Lahore'}>Lahore</MenuItem>
                                    <MenuItem value={'Karachi'}>Karachi</MenuItem>
                                    <MenuItem value={'Islamabad'}>Islamabad</MenuItem>
                                </Select>
                                <FormHelperText>City</FormHelperText>
                            </FormControl>

                            </div>


                            <div style={{marginLeft: 30}}>

                                <FormControl className={classes.formControl}>
                                    <Select
                                        error
                                        value={this.state.expert}
                                        onChange={this.datachange}
                                        name="expert"
                                        displayEmpty
                                        className={classes.selectEmpty}
                                    >
                                        <MenuItem value="" disabled>
                                            You're best At?
                                        </MenuItem>
                                        <MenuItem value={'Food Photography'}>Food Photography</MenuItem>
                                        <MenuItem value={'Wedding Photography'}>Wedding Photography</MenuItem>
                                        <MenuItem value={'Product Photography'}>Product Photography</MenuItem>
                                        <MenuItem value={'Event Photography'}>Event Photography</MenuItem>
                                        <MenuItem value={'photojournalism'}>photojournalism</MenuItem>
                                    </Select>
                                    <FormHelperText>You're best At?</FormHelperText>
                                </FormControl>

                            </div>

                            </Grid>


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCloseAndUpdate} color="primary" style={{ color : "#FF1329" }}>
                                Cancel
                            </Button>
                            <Button onClick={this.handleClose} color="primary" style={{ color : "#80D144" }} >
                                Save
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

                <input

                    type="file"
                    onChange={this.fileSelectedHandler}
                />

                <button onClick={this.upload}>Upload</button>



                <ImageGallery data={this.state.gallery1}   />



            </div>



        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);