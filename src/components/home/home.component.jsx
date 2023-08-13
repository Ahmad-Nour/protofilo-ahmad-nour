import React, { Fragment ,useRef } from "react";
import programmerGif from '../../assets/computer_dance.gif';
import './home.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import Hello from "../hello/hello.component";
const Home = () => {
    const helloRef = useRef(null);

    return (
        <Fragment>
            <div className="homeContainer">
                <div className="textContainer">
                    <h1>Wahoooo!</h1>
                    <h1>Ahmad Nour Al-Sabaggh <Link to="home/hello">here</Link></h1>
                </div>
                <div className="imageContainer">
                    <img src={programmerGif} alt="Programmer Gif" className="programmerImage" />
                </div>
            </div>
        </Fragment>
    );
};

export default Home;