import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";



class I extends Component {


    state = {
    };



    constructor(props) {
        super(props);


         // const check = localStorage.isPhotographer;

        console.log(localStorage.isPhotographer);

        if (localStorage.isPhotographer === "true"){
            console.log('hello');
             this.props.history.push("/profile");
        }
        else{
            console.log('world');
            this.props.history.push("/postproject");

        }
        // if (check === true){
        //     console.log(localStorage.isPhotographer);
        //
        //     this.props.history.push("/profile");
        // }
        // if (check === false){
        //     console.log(localStorage.isPhotographer);
        //
        //     this.props.history.push("/postproject");
        // }



    }

    componentDidMount() {




    }


    render() {


        return (
            <Fragment>

                {/*{localStorage.isPhotographer ? (*/}

                {/*    this.props.history.push("/profile")*/}
                {/*) : (*/}
                {/*    <div>*/}
                {/*        /!* <button onClick={() => logout()}>logout</button> *!/*/}
                {/*        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>*/}
                {/*        <i class="material-icons">more_vert</i>*/}
                {/*    </div>*/}
                {/*)}*/}
            </Fragment>

        );
    }
}

I.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,

};

export default I;



