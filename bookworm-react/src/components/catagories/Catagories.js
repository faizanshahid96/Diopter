import React, {Component} from "react";
import "./catagories.css";

class Catagories extends Component {
    state = {};

    render() {
        return (
            <section class="p-0" id="portfolio">
                <div class="container-fluid p-0">
                    <div class="row no-gutters popup-gallery">
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="../img/portfolio/fullsize/1.jpg">
                                <img
                                    class="img-responsive"
                                    src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/1.jpg"
                                    alt=""
                                />
                                <div class="portfolio-box-caption">
                                    <div class="portfolio-box-caption-content">
                                        <div class="project-name">Wedding Photography</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/2.jpg">
                                <img
                                    class="img-responsive"
                                    src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/2.jpg"
                                    alt=""
                                />
                                <div class="portfolio-box-caption">
                                    <div class="portfolio-box-caption-content">
                                        <div class="project-name">Event Photography</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/3.jpg">
                                <img
                                    class="img-responsive"
                                    src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/3.jpg"
                                    alt=""
                                />
                                <div class="portfolio-box-caption">
                                    <div class="portfolio-box-caption-content">
                                        <div class="project-name">Food Photography</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/4.jpg">
                                <img
                                    class="img-responsive"
                                    src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/4.jpg"
                                    alt=""
                                />
                                <div class="portfolio-box-caption">
                                    <div class="portfolio-box-caption-content">
                                        <div class="project-name">Fashion Photography</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/5.jpg">
                                <img
                                    class="img-responsive"
                                    src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/5.jpg"
                                    alt=""
                                />
                                <div class="portfolio-box-caption">
                                    <div class="portfolio-box-caption-content">
                                        <div class="project-name">Wildlife Photography</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href="img/portfolio/fullsize/6.jpg">
                                <img
                                    class="img-responsive"
                                    src="https://blackrockdigital.github.io/startbootstrap-creative/img/portfolio/fullsize/6.jpg"
                                    alt=""
                                />
                                <div class="portfolio-box-caption">
                                    <div class="portfolio-box-caption-content">
                                        <div class="project-name">Photojournalism</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Catagories;
