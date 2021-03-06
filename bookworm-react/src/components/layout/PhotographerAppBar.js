import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth";
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from "react-redux";
import Divider from '@material-ui/core/Divider';


const styles = {
    root: {
        flexGrow: 1,

    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};


class PhotoApp extends React.Component {

    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {classes} = this.props;


        const fullList = (
            <div className={classes.fullList}>
                <List>

                    <Link to="/profile">
                        <ListItem>

                            <ListItemIcon>
                                <i className="material-icons" style={{ color: '#FF5722' }}>
                                    account_box
                                </i>
                            </ListItemIcon>
                            <ListItemText primary="My Profile"

                            />

                        </ListItem>

                    </Link>
                    {/*<Divider />*/}



                    <Link to="/projects">

                        <ListItem>
                            <ListItemIcon>
                                <i className="material-icons"  style={{ color: '#FF5722' }}>
                                    ballot
                                </i>
                            </ListItemIcon>
                            <ListItemText primary="Send Proposals"/>
                        </ListItem>
                    </Link>

                    <Link to="/pOngoingProjects">

                        <ListItem>
                            <ListItemIcon>
                                <i className="material-icons"  style={{ color: '#FF5722' }}>
                                    ballot
                                </i>
                            </ListItemIcon>
                            <ListItemText primary="My Projects"/>
                        </ListItem>
                    </Link>
                    {/*<Divider />*/}

                    <Link to="/pIncompleteProjects">
                        <ListItem>
                            <ListItemIcon>
                                <i className="material-icons"  style={{ color: '#FF5722' }}>
                                    navigate_next
                                </i>
                            </ListItemIcon>
                            <ListItemText primary="On Going Projects"/>
                        </ListItem>

                    </Link>


                    <ListItem onClick={() => this.props.logout()}>
                        <ListItemIcon>
                            <i className="material-icons"  style={{ color: '#FF5722' }}>
                                exit_to_app
                            </i>
                        </ListItemIcon>
                        <ListItemText   primary="Logout"/>
                    </ListItem>

                </List>


            </div>
        );


        return (


            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#FF5722' }}>
                    <Toolbar>

                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Diopter
                        </Typography>

                        {/*<Button color="inherit">*/}


                        {/*My Profile</Button>*/}
                        {/*<Button color="inherit">*/}


                        {/*My Projects</Button>*/}
                        {/*<Button color="inherit">*/}


                        {/*On Going Projects</Button>*/}
                        {/*<Button color="inherit">*/}


                        {/*Logout</Button>*/}

                        <Button onClick={this.toggleDrawer('top', true)}>

                            <MenuIcon/>

                        </Button>


                    </Toolbar>
                </AppBar>

                <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('top', false)}
                        onKeyDown={this.toggleDrawer('top', false)}
                    >
                        {fullList}
                    </div>
                </Drawer>

            </div>


        );
    }
}

PhotoApp.propTypes = {
    classes: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

export default connect(null, {logout})(withStyles(styles)(PhotoApp));
// export default withStyles(styles)(ButtonAppBar)