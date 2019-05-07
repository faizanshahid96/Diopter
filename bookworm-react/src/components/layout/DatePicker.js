import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";

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

    saveSub=(event)=>{

        this.setState({[event.target.name]: event.target.value},() => {
            this.props.setSub(this.state.date);
        });

    };



    render() {

        const {classes} = this.props;

        let form;
        if (this.props.data === "Event Date"){

            form =
                <TextField
                    id="date"
                    label={this.props.data}
                    name='date'
                    type="date"
                    defaultValue="2017-05-24"
                    onChange={this.saveDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
        }
        else{
            form=
                    <TextField
                        id="date"
                        label={this.props.data}
                        name='date'
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={this.saveSub}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

        }

        return (


            <form className={classes.container} noValidate>

            {form}

            </form>


        );
    }
}

DatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);