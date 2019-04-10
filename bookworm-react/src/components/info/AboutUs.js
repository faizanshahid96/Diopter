import React, { Component } from "react";
class AboutUs extends Component {
  state = {};
  render() {
    return (
      <section id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">What we have achieved</h2>
              <hr class="my-4" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <h2 class="mb-3">30,279</h2>
                <p class="text-muted mb-0">freelancers</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <h2 class="mb-3">1,983,241 pkr</h2>
                <p class="text-muted mb-0">money earned</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <h2 class="mb-3">10,427</h2>
                <p class="text-muted mb-0">projects done</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="service-box mt-5 mx-auto">
                <h2 class="mb-3">5,436</h2>
                <p class="text-muted mb-0">projects waiting for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
