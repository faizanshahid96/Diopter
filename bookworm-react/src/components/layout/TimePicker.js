import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class TimePickers extends React.Component {


    state = {
        time : ""
    };
    saveTime=(event)=>{
        this.setState({[event.target.name]: event.target.value},() => {
            this.props.fun(this.state.time);
        });

    };

    render() {
        const {classes} = this.props;


        return (
            <form className={classes.container} noValidate>
                <TextField
                    id="time"
                    label="Event Time"
                    type="time"
                    name='time'
                    defaultValue="07:30"
                    className={classes.textField}
                    onChange={this.saveTime}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
            </form>
        );
    }
}

TimePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePickers);