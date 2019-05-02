import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '../../components/layout/AppBar';
import Divider from '@material-ui/core/Divider';


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
import Chips from '../layout/chips';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import ImageGallery from './ImageGallery';






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

});

class ViewPhotographerProfile extends React.Component {
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


        this.recieveProfile();




    }

    recieveProfile =()=>{

        const link = '/api/setProfile/recieveProfile/'+localStorage.profile_id;


        axios.get(link)
            .then(res => {
                this.setState({name: res.data[0].name});
                this.setState({description: res.data[0].description});
                this.setState({city: res.data[0].location});
                this.setState({expert: res.data[0].expert});
                this.setState({pictureLink: res.data[0].profilePicture});

                const opp = "http://localhost:8080/"+this.state.pictureLink.substring(7, 100);
                this.setState({pictureLink:opp});

                // console.log(res.data[0].name);
            });




    };


    render() {
        const {classes} = this.props;

        return (



            <div>

                <div>
                    <AppBar/>
                </div>



                <br/>
                <br/>

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





                            </Paper>
                        </Grid>
                    </Grid>
                </div>

            </div>



        );
    }
}

ViewPhotographerProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewPhotographerProfile);