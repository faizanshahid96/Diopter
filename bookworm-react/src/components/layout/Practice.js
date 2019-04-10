import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const styles = theme => ({
  root: {
    borderTopWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    margin: 10
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    shadows: ["none"]
  },

  forForm: {
    marginLeft: 75
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 120,
    marginTop: 15
  },

  button: {
    margin: theme.spacing.unit
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class FullWidthTabs extends React.Component {
  state = {
    age: "",
    name: "hai",
    city: "none",
    budget: "",
    labelWidth: 0,
    projectName: ""
  };

  datachange = event => {

    this.setState({ [event.target.name]: event.target.value });
    // axios.post("/api/practice",{
    //   name : this.state.projectName
    // }).then(response => console.log(response))
    //     .catch(error => console.log(error));

  };

  onSubmit = (e) => {

   e.preventDefault();
    axios.post("/api/practice",{
      name : this.state.projectName
    }).then(console.log(res => res.data.user))
        .catch(error => console.log(error));


  };


  render() {
    const { classes, theme } = this.props;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="outlined-textarea"
            label="Description"
            placeholder="just give a brief description"
            multiline
            fullWidth
            margin="normal"
            variant="outlined"
            style={{ marginLeft: 75 }}
            name="projectName"
            value={this.state.projectName}
            onChange={this.datachange}
          />
          <Grid container justify="center">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              style={{ marginTop: 75 }}
              type="submit"
            >
              Post
            </Button>
          </Grid>
        </form>
      </Fragment>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
