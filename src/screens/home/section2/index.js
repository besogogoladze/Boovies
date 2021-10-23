import React from 'react';
import './style.css';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ScrollPlayGround from './ScrollPlayground';

function Section2({props}) {

    let advertisement = "advertisement";



    return (
        <div className="w-100 bg-success p-5">
            <div className="w-100 container">
                <div className="w-100 height-145 bg-dark d-flex justify-content-center align-items-center">
                    <h1 className="text-white-50">{advertisement.toUpperCase()}</h1>
                </div>
                <div className="mt-5 d-flex flex-column">
                    <div className="d-flex w-10 justify-content-between">
                        <CameraRollIcon className="text-light fs-1"/>
                        <h1 className="text-dark fs-2">Movies</h1>
                    </div>
                    <div className="d-flex w-100 justify-content-between mb-2">
                        <div className="d-flex">
                            <div className="border2 h-10px bg-light"></div>
                            <div className="h-10px border1 bg-dark"></div>
                        </div>
                    </div>
                    <div>
                        <ScrollPlayGround props={props} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
