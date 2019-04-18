import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import Grid from "./ProfilePicture";

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit,
    },
    margin:{
        marginLeft: 20
    }
});


class OutlinedChips extends React.Component {
    state = {

    };



    render() {
        const {classes} = this.props;

        return (



            <div className={classes.root}>
                <Chip color="secondary"  label={this.props.data}  classes={classes.margin}/>
            </div>
        );
    }
}
OutlinedChips.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedChips);