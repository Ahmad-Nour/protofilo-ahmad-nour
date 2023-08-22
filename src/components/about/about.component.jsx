import { Fragment } from "react";
import "./about.styles.scss"; 

const About = () => {

  return (
    <Fragment>
      <div className="aboutContainer">
        <div className="textAboutContainer">
          <h1>Hi, I am Ahmad Nour. Glad to meet you.</h1>
          <div>
            <p>
              I am a software engineer with more than three years of experience in developing and maintaining software applications. I currently work mainly with C# in the ASP Web API Framework, as well as with JavaScript, TypeScript, React, React-Native and Angular.
            </p>
            <p>
              Passionate about learning new technologies and collaborating with highly skilled professionals to expand my knowledge and grow in my career.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;