import React from "react";
import { Carousel } from 'react-bootstrap'

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
                src="./images/kirill.jpg"
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
          <img
            src="./images/javascript.jpg"
            alt="javascript"
          />
          <img
            src="./images/css3.jpg"
            alt="css3"
          />
          <img
            src="./images/html5.jpg"
            alt="html5"
          />
          <img
            src="./images/mongodb.jpg"
            alt="mongodb"
          />
          <img
            src="./images/bootstrap.jpg"
            alt="bootstrap"
          />
          <img
            src="./images/github.jpg"
            alt="github"
          />
        </article>
      </>
    )
  }
};

export default About;