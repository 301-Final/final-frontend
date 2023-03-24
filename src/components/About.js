import React from "react";
import { Carousel } from 'react-bootstrap';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <>
        <article className="mission">
          <h2>Our Mission</h2>
          <p>Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. </p>
        </article>
        <article className="team">
          <h2>The Crew</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/mike.jpg"
                alt="Mike"
              />
              <Carousel.Caption>
                <h2>Michael Dulin</h2>
                <p>Michael likes to do stuff</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/cody.jpg"
                alt="Cody"
              />
              <Carousel.Caption>
                <h2>Cody Lobdell</h2>
                <p>Cody likes to do stuff</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/kirk.jpg"
                alt="Kirill"
              />
              <Carousel.Caption>
                <h2>Kirill Lesnykh</h2>
                <p>Kirill does NOT like to do stuff</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </article>
        <article className="tools">
          <h2>Tools</h2>
          <img
            src="./images/javascript.png"
            alt="javascript"
          />
          <img
            src="./images/css3.png"
            alt="css3"
          />
          <img
            src="./images/html5.png"
            alt="html5"
          />
          <img
            src="./images/mongodb.png"
            alt="mongodb"
          />
          <img
            src="./images/bootstrap.png"
            alt="bootstrap"
          />
          <img
            src="./images/github.png"
            alt="github"
          />
          <img
            src="./images/eslint.png"
            alt="eslint"
          />
          <img
            src="./images/express.png"
            alt="express"
          />
          <img
            src="./images/git.png"
            alt="mongodb"
          />
          <img
            src="./images/nodejs.png"
            alt="nodejs"
          />
          <img
            src="./images/npm.png"
            alt="npm"
          />
          <img
            src="./images/react.png"
            alt="react"
          />
          <img
            src="./images/slack.png"
            alt="slack"
          />
          <img
            src="./images/ubuntu.png"
            alt="ubuntu"
          />
          <img
            src="./images/vscode.png"
            alt="vscode"
          />
        </article>
      </>
    )
  }
};

export default About;