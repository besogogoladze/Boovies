import React from 'react';
import './style.css';
import ListOfProducts from '../listOfProducts';




function Section1() {

    return (
        <div id="listOfProducts" className="d-inline-flex flex-wrap gap-4 justify-content-center w-100 mx-auto p-5">
            <ListOfProducts/>
        </div>
    )
}

export default Section1;
