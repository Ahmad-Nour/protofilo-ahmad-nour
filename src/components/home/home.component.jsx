import React, { Fragment } from "react";
import programmerGif from '../../assets/computer_dance.gif';
import './home.styles.scss';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <Fragment>
            <div className="homeContainer">
                <div className="textContainer">
                    <h1>Wahoooo!</h1>
                    <h1>Ahmad Nour Al-Sabaggh here</h1>
                </div>
                <div className="imageContainer">
                    <img src={programmerGif} alt="Programmer Gif" className="programmerImage" />
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Home;