import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";



class I extends Component {


    state = {
    };



    constructor(props) {
        super(props);
            if (localStorage.isPhotographer){
                this.props.history.push("/projects");
            }
            else{
                this.props.history.push("/postproject");
            }

    }

    componentDidMount() {


    }


    render() {


        return (
            <Fragment>
                {/*<p>hello</p>*/}
                {/*{!   localStorage.isPhotographer ? (*/}
                    {/*this.hello()*/}
                {/*) : (*/}
                    {/*this.hello()*/}
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



