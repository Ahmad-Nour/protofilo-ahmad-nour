import { Fragment } from "react";
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import {
    NavbarContainer,
    LogoContainer,
    NavLinks,
    NavLink,
} from './nav-bar.styles';
import About from "../about/about.component";
import Home from "../home/home.component";
import Technologies from "../technologies/technologies.component";
import Projects from "../projects/projects.componesnts";
import Hello from "../hello/hello.component";

const NavBar = () => {
    const aboutRef = useRef(null);
    const technologiesRef = useRef(null);
    const projectsRef = useRef(null);
    const helloRef = useRef(null);
    return (
        <Fragment>
            <NavbarContainer>
                <LogoContainer>
                    <span>Ahmad Nour</span>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="#" onClick={() => aboutRef.current.scrollIntoView()}>About</NavLink>
                    <NavLink to="#" onClick={() => technologiesRef.current.scrollIntoView()}>Technologies</NavLink>
                    <NavLink to="#" onClick={() => projectsRef.current.scrollIntoView()}>Projects</NavLink>
                    {/* <NavLink to='/'>Articles</NavLink> */}
                    <NavLink  to="#" onClick={() => helloRef.current.scrollIntoView()}>Hello, Ahmad Nour!</NavLink>
                </NavLinks>
            </NavbarContainer>
            <Outlet />
            <div ref={aboutRef}>
                <About />
            </div>

            <div ref={technologiesRef}>
                <Technologies />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            <div ref={helloRef}>
                <Hello />
            </div>
        </Fragment>
    );
};

export default NavBar;