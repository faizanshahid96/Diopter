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


class DatePickers extends React.Component {

    state = {
        date : ""
    };
    saveDate=(event)=>{
        this.setState({[event.target.name]: event.target.value},() => {
            this.props.fun(this.state.date);
        });

    };

    render() {
        const {classes} = this.props;


        return (
            <form className={classes.container} noValidate>
                <TextField
                    style={{  color : "#ffffff" }}
                    error
                    id="date"
                    label="Event Date"
                    name='date'
                    type="date"
                    defaultValue="2017-05-24"
                    onChange={this.saveDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
        );
    }
}

DatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);