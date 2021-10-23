import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function ScrollPlayGround({props}) {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    }
    return (
        <div className="bg-dark rounded-3 p-5">
            <Slider {...settings}>
                {
                    props.map((option) => 
                        <div key={option.id} className="m-1">
                            <Link className="color" key={option.id} to={`/Movies/${option.id}`}>
                                <div className="description">
                                    <div className="description-toHide">
                                        <img className="postImg w-100 h-320px border-radius-5" alt={option.title + " error "} src={option.image}/>
                                    </div>
                                    <div className="description-hidden">
                                        <img className="w-100 h-320px absolute border-radius-5" alt={option.title + " error "} src={option.image}/>
                                        <h1>{option.title}</h1>
                                        <div className="d-flex flex-column gap-3 description-bg-color from-down">
                                            <h4>Description:</h4>
                                            <h6>{option.description.slice(0, 100) + "..."}</h6>
                                            <p>{option.year}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}

export default ScrollPlayGround
