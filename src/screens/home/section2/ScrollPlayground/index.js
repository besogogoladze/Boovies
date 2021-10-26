import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

function ScrollPlayGround({props}) {

    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 1
    // }
    // function size(){
    //     if(document.body.width == 1200){
    //         settings.slidesToShow == 1
    //     }
    // }
    // size()

    function useMediaQuery() {
        const [screenSize, setScreenSize] = useState([0, 0]);
        
        useLayoutEffect(() => {
          function updateScreenSize() {
            setScreenSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener("resize", updateScreenSize);
          updateScreenSize();
          return () => window.removeEventListener("resize", updateScreenSize);
        }, []);
        
        return screenSize;
      }
      
        const [width] = useMediaQuery();
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        const settings2 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        }
        const settings3 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }
        const settings4 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        }
        const settings5 = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        }

        // function Greeting(props) {
        //     // const size = props.size;
        //     if(width > 769) {
        //         return <FullScreen1 props={props}/>
        //     }else if(width > 1400){
        //         return <FullScreen2 props={props}/>
        //     }
        // }

        return width > 769 ? (
            <div className="bg-dark rounded-3 p-5">
                <Slider {...settings5}>
                    {
                        props.map((option) => 
                            <div key={option.id} className="m-1">
                                <Link className="color" key={option.id} to={`/Boovies/Movies/${option.id}`}>
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
        ) : (
            <div className="bg-dark rounded-3 p-5">
                <Slider {...settings}>
                    {
                        props.map((option) => 
                            <div key={option.id} className="m-1">
                                <Link className="color" key={option.id} to={`/Boovies/Movies/${option.id}`}>
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




    // return (
    //     <div className="bg-dark rounded-3 p-5">
    //         <Slider {...settings}>
    //             {
    //                 props.map((option) => 
    //                     <div key={option.id} className="m-1">
    //                         <Link className="color" key={option.id} to={`/Boovies/Movies/${option.id}`}>
    //                             <div className="description">
    //                                 <div className="description-toHide">
    //                                     <img className="postImg w-100 h-320px border-radius-5" alt={option.title + " error "} src={option.image}/>
    //                                 </div>
    //                                 <div className="description-hidden">
    //                                     <img className="w-100 h-320px absolute border-radius-5" alt={option.title + " error "} src={option.image}/>
    //                                     <h1>{option.title}</h1>
    //                                     <div className="d-flex flex-column gap-3 description-bg-color from-down">
    //                                         <h4>Description:</h4>
    //                                         <h6>{option.description.slice(0, 100) + "..."}</h6>
    //                                         <p>{option.year}</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </Link>
    //                     </div>
    //                 )
    //             }
    //         </Slider>
    //     </div>
    // )
}

export default ScrollPlayGround
