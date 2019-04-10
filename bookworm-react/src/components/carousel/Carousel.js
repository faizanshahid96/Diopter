import React, { Component } from "react";
import "./carousel.css";
import "../vendor/fontawesome-free/css/all.min.css";
// import "../vendor/bootstrap/css/bootstrap.min.css";
import "../vendor/magnific-popup/magnific-popup.css";
import "../css/creative.css";

class Carousel extends Component {
  state = {};
  render() {
    //document.body.style.paddingTop = "0px";

    return (
      <div>
        <header class="masthead text-center text-white d-flex">
          <div class="container my-auto">
            <div class="row align-items-center">
              <div class="col-xs-4 col-xs-offset-4">
                <h1 class="text-uppercase">Believe you can</h1>
                <hr />
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-xs-2 col-xs-offset-4">
                <a
                  class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                  href="#services"
                >
                  Post project
                </a>
              </div>

              <div class="col-xs-2 ">
                <a
                  class="btn btn-primary-outline btn-xl text-uppercase js-scroll-trigger"
                  href="#services"
                >
                  photographer?{" "}
                </a>
              </div>

              {/* <div class="col-xs-2 col-xs-offset-4">
              <a
                class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="#services"
              >
                Tell Me More
              </a> */}
              {/* <button type="button" class="btn btn-primary btn-md">
                  Large button
                </button>
              </div>
              <div class="col-xs-2">
                <button type="button" class="btn btn-primary btn-md">
                  Large button
                </button> */}
            </div>
          </div>
        </header>
      </div>

      // <div>
      //   <div class="jumbotron">
      //     <h1>Some Motivatial Heading</h1>
      //     <p>
      //       Bootstrap is the most popular HTML, CSS, and JS framework for
      //       developing responsive, mobile-first projects on the web.
      //     </p>
      //   </div>
      //   <div class="container">
      //     <p>This is some text.</p>
      //     <p>This is another text.</p>
      //   </div>
      // </div>
      // <div id="myCarousel" class="carousel slide" data-ride="carousel">
      //   <div class="carousel-inner">
      //     <div class="item active">
      //       <img
      //         className="img-responsive"
      //         src={image}
      //         alt="Los Angeles"
      //         width="1400"
      //         height="400"
      //       />
      //       <div class="carousel-caption">
      //         <button class="btn btn-primary">Post Project</button>
      //         {/* <br /> <br />
      //         <button class="btn btn-primary">Photographer?</button> */}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Carousel;
