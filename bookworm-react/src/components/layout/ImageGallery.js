import React, {Component} from "react";
import "./ImageGallery.css";

class ImageGallery extends Component {
    state = {};

    render() {
        return (
            <section class="p-0" id="portfolio">
                <div class="container-fluid p-0">
                    <div class="row no-gutters popup-gallery">

                        {
                            this.props.data.map((data, index) =>

                                <div className="col-lg-4 col-sm-6">
                                    <a className="portfolio-box" href="../img/portfolio/fullsize/1.jpg">
                                        <img
                                            className="img-responsive"
                                            src={data}
                                            alt=""

                                            width='400' height='400'
                                        />
                                        <div className="portfolio-box-caption">
                                            <div className="portfolio-box-caption-content">
                                                <div className="project-name">Wedding Photography</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>



                            )
                        }








                    </div>
                </div>
            </section>
        );
    }
}

export default ImageGallery;
