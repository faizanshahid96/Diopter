import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from "../layout/Profile_Drawer"
// import List from "./Profile_Drawer";

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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




class ButtonAppBar extends React.Component {

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

                        <ListItem>
                            <ListItemIcon>
                                <i className="material-icons">
                                    account_box
                                </i>
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                        </ListItem>
                    {/*<Divider />*/}

                    <ListItem>
                        <ListItemIcon>
                            <i className="material-icons">
                                ballot
                            </i>
                        </ListItemIcon>
                        <ListItemText primary="My Projects" />
                    </ListItem>

                    {/*<Divider />*/}

                    <ListItem>
                        <ListItemIcon>
                            <i className="material-icons">
                                navigate_next
                            </i>
                        </ListItemIcon>
                        <ListItemText primary="On Going Projects" />
                    </ListItem>



                    <ListItem>
                        <ListItemIcon>
                            <i className="material-icons">
                                exit_to_app
                            </i>
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>

                </List>



            </div>
        );



        return (




            <div className={classes.root}>
                <AppBar position="static">
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

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar)