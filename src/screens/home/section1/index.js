import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'

function Section1({props, itemsThree}) {

    let t = itemsThree.map((t) => t)
    let i = props.map((i) => i)

    let firstObjectValue = " ";
    if(i.length > 1){
       for(var index=0;index< i.length;index++){
          firstObjectValue = i[index].title;
          break;
       }
    } else {
       return null;
    }
    if(firstObjectValue !== undefined)
       console.log(firstObjectValue);
    else
    console.log("There is no element in the array");


    const ID = props.map(i => i.id)
    const size = 3
    const objects = props.slice(0, size)
    return (
        <div id="homeSection1-1" className="w-100 mx-auto pt-5 pb-5">
            <div className="d-flex justify-content-around">
                <div className="shadow-lg p-3 bg-dark rounded h-fit">
                    <div className="border border-3 border-success">
                        <Link to={`/Boovies/Movies/${i[index].id}`}>
                            <div className="p-3">
                                <h1 className="text-light">Movie of the day 👇</h1>
                                <div className="card border-0">
                                    <img src={i[index].image} className="card-img-top" alt="error"/>
                                    <div className="card-body bg-dark">
                                        <h3 className="card-text text-light text-center">{firstObjectValue}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="shadow-lg p-3 bg-dark rounded w-50">
                    <div className="border border-3 border-success">
                        <Carousel key={t} className="heigh-500">
                            {
                                itemsThree.map(i =>
                                    <Carousel.Item key={i.id} className="text-align-webkit-center">
                                        <Link to={`/Boovies/Movies/${i.id}`}>
                                            <img
                                                className="d-block heigh-500 w-100 zoom"
                                                src={i.image}
                                                alt={i.title + "error"}
                                            />
                                            <Carousel.Caption>
                                                <h1 className="white-space">{i.title}</h1>
                                                <h3>{i.year}</h3>
                                            </Carousel.Caption>
                                        </Link>
                                    </Carousel.Item>
                                )
                            }
                        </Carousel> 
                    </div>
                </div>
                <div className="shadow-lg p-3 bg-dark rounded h-fit">
                    <div className="border border-3 border-success">
                        <Link to={`/Boovies/Movies/${i[index].id}`}>
                                <div className="p-3">
                                    <h1 className="text-light">The most watched 👇</h1>
                                    <div className="card border-0">
                                        <img src={i[index].image} className="card-img-top" alt="error"/>
                                        <div className="card-body bg-dark">
                                            <h3 className="card-text text-light text-center">{firstObjectValue}</h3>
                                        </div>
                                    </div>
                                </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
