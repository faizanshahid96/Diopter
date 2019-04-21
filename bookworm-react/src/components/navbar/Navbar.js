import React, {Component} from "react";
import "./nav.css";
// import "../vendor/fontawesome-free/css/all.min.css";
// import "../vendor/bootstrap/css/bootstrap.min.css";
// import "../vendor/magnific-popup/magnific-popup.css";
// import "../css/creative.min.css";

import {Link} from "react-router-dom";

class Navbar extends Component {
    state = {};

    render() {
        return (


            <nav class="navbar navbar-default">
                <div class="container">
                    <div class="navbar-header">
                        <button
                            type="button"
                            class="navbar-toggle"
                            data-toggle="collapse"
                            data-target="#myNavbar"
                        >
                            <span class="icon-bar"/>
                            <span class="icon-bar"/>
                            <span class="icon-bar"/>
                        </button>
                        <a class="navbar-brand" href="#">
                            Diopter
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <Link to='/signup'> <a style={{color: "#5E5E5E"}}>SIGN UP</a></Link>
                            </li>
                            <li>
                                <Link to='/login'>  <a style={{color: "#5E5E5E"}}>LOGIN</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            // <nav class="navbar navbar-default navbar-static-top">
            //   <div class="container-fluid">
            //     <div class="navbar-header">
            //       <button
            //         type="button"
            //         class="navbar-toggle"
            //         data-toggle="collapse"
            //         data-target="#myNavbar"
            //       >
            //         <span class="icon-bar" />
            //         <span class="icon-bar" />
            //         <span class="icon-bar" />
            //       </button>
            //       <a class="navbar-brand">Photography</a>
            //     </div>
            //     <div class="collapse navbar-collapse" id="myNavbar">
            //       <ul class="nav navbar-nav navbar-right">
            //         <li>
            //           <Link to="/login">Home</Link>
            //         </li>
            //         <li>
            //           <Link to="/login">About Us</Link>
            //         </li>
            //         <li>
            //           <Link to="/signup">
            //             <span class="glyphicon glyphicon-user" /> Sign Up
            //           </Link>
            //         </li>
            //         <li>
            //           <Link to="/login">
            //             <span class="glyphicon glyphicon-log-in" /> Login
            //           </Link>
            //         </li>
            //       </ul>
            //     </div>
            //   </div>
            // </nav>

            //   <nav className="navbar navbar-inverse navbar-static-top ">
            //     <div>
            //       <div className="navbar-header">
            //         <button
            //           type="button"
            //           className="navbar-toggle collapsed"
            //           data-toggle="collapse"
            //         >
            //           <span className="icon-bar" />
            //           <span className="icon-bar" />
            //           <span className="icon-bar" />
            //         </button>
            //         <a className="navbar-brand" href="#">
            //           Photography
            //         </a>
            //       </div>
            //     </div>
            //     <div className="collapse navbar-collapse" id="myNavbar">
            //       <ul className="nav navbar-nav">
            //         <li className="active">
            //           <a href="#">Home</a>
            //         </li>
            //         <li>
            //           <a href="#">Page 1</a>
            //         </li>
            //         <li>
            //           <a href="#">Page 2</a>
            //         </li>
            //         <li>
            //           <a href="#">Page 3</a>
            //         </li>
            //       </ul>
            //       <ul className="nav navbar-nav navbar-right">
            //         <li>
            //           <a href="#">
            //             <span className="glyphicon glyphicon-user" /> Sign Up
            //           </a>
            //         </li>
            //         <li>
            //           <a href="#">
            //             <span className="glyphicon glyphicon-log-in" /> Login
            //           </a>
            //         </li>
            //       </ul>
            //     </div>
            //   </nav>
        );
    }
}

export default Navbar;
