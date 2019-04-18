import React, {Component, Fragment} from "react";
import PropTypes, {array} from "prop-types";
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import axios from "axios";
import LoginForm from "../forms/LoginForm";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PostProject from "../layout/PostProject";
import PostedProject from "../layout/PostedProject";
import OnGoingProjects from "../layout/OnGoingProjects";
import Proposals from "../layout/Proposals";
import Practice from "../layout/Practice";


class LoginPage extends Component {

    state = {
        projectsRecieved: []
    };


    submit = data =>
        this.props.login(data).then(() => this.props.history.push("/i"));

    constructor(props) {
        super(props);
        let array = [];
        this.state = {isOpen: false, data: []};
        this.State = {
            testing: [],
            name: 'shahreyar'
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


        // hello = (name) => {
        //     this.setState({name: name});
        //     console.log(this.state.name)
        //     // console.log('hello')
        // };
    //
    // componentDidMount(){
    //
    //
    //     let projectsRecieved ={
    //        user:{
    //            projects : []
    //        }
    //
    //     };
    //
    //     axios.get(`/api/postProject/`)
    //         .then(res => {
    //             // const persons = res.data;
    // this.setState({ persons });
    //             // this.state.projects=res.data;
    //             projectsRecieved.user.projects= res.data;
    //             this.setState({projectsRecieved: ProjectsFetched.user.projects});
    //             // this.setState({ProjectsFetched.user.projects : res.data});
    //             console.log(ProjectsFetched.user.projects);
    //         });
    //


    //
    // componentDidMount() {
    //
    //     axios.get(`/api/postProject/`)
    //         .then(res => {
    //
    //             // projectsRecieved.user.projects= res.data;
    //             // objectData.user.map(res.data);
    //             // console.log(objectData.user)
    //             //  this.setState({dataRecieved : res.data})
    //             //  console.log(this.state.dataRecieved);
    //             //  res.data.map((datas)=>{
    //             //      datas._id;
    //             //  });
    //             // console.log(res.data);
    //             this.setState({data: res.data});
    //         });
    //
    // }


    render() {


        return (
            <Fragment>
                {/*<LoginForm submit={this.submit} />*/}
                {/*<Practice />*/}

                {/*{*/}
                {/*fakeData.user.titles.map(title =>*/}
                {/*<Proposals sendTitle={title}/>*/}
                {/*)*/}
                {/*}*/}

                {/* <OnGoingProjects /> */}
                {/*/!* <PostedProject />*/}


                {/*{*/}
                {/*this.state.data.map((data, index) =>*/}
                {/*<PostedProject data={data}   /> //this used to populate my projects key={"PP" + index}*/}
                {/*)*/}
                {/*}*/}

                {/*{*/}
                {/*this.state.data.map(function(data, index){*/}
                {/*return <PostedProject data={data}  hello={this.hello.bind(this)}  index={index} key={"PP"+index} />*/}
                {/*//deleteProject={this.deleteProject.bind(this)}*/}
                {/*}.bind(this))*/}
                {/*}*/}


                {/*{*/}
                {/*this.state.data.map(function(data, index){*/}
                {/*return <PostProject data={data}  hello={this.hello.bind(this)}  index={index} key={"PP"+index} />*/}
                {/*//deleteProject={this.deleteProject.bind(this)}*/}
                {/*}.bind(this))*/}
                {/*}*/}

                {/*<PostedProject data={this.state.data}/>*/}
                {/*<PostedProject />*/}
                {/*<PostedProject />*/}
                {/*// <PostedProject /> *!/*/}
                {/*<Header  submit={this.submit}/>*/}
                <Header/>
                <LoginForm submit={this.submit}/>
                {/*<Header submit={this.submit}/>*/}
                {/*<Footer/>*/}
                {/*<PostProject data={'email'} />*/}
                {/*<PostedProject data={this.state.name} hello={this.hello.bind(this)}/>*/}
                {/*<PostProject data={'email'}/>*/}
                {/*<PostedProject/>*/}




            </Fragment>

        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(
    null,
    {login}
)(LoginPage);
