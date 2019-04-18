import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
    state = {
        open: false,
    };

    onChange = () => {
        this.props.history.push("/login")
    };


    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.data}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Signup Successful"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            You have been signed up successfully, please login to enjoy the app
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>

                        <Link to="/login">

                            <Button color="primary">
                                Login
                            </Button>

                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}


AlertDialogSlide.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
};

export default AlertDialogSlide;