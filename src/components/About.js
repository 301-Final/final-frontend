import React from "react";
import { Carousel } from "react-bootstrap";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <section className="aboutBody">
        <article className="mission">
          <h2>Our Mission</h2>
          <p>
            Have you ever thought to yourself "Wow, I really wish I had a place to collect my crap". Well, we felt the same way! Which is why we created Crap Collector: an open, free and easy-to-use database for storing information on your personal items! Using an encrypted security system, you can log any sort of item you like and it will be stored to your profile, while preventing others from viewing. With Crap Collector, spend more time focusing on your day to day and less on all your crap! Get collectin'!{" "}
          </p>
        </article>
        <article className="team">
          <h2>The Crew</h2>
          <p> We are a team of junior developers focused on creating applications and tools with the User in mind. We strive to ensure every aspect of our products are designed for ease-of-use, personability and, of course, free!</p>
          <Carousel className="carouselParent">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/mike.jpg"
                alt="Mike"
              />
              <Carousel.Caption>
                <div className="carouselBio">
                  <h3>Michael Dulin</h3>
                  <p>Software Developer - USN Veteran - Baseball Coach</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/cody.jpg"
                alt="Cody"
              />
              <Carousel.Caption>
                <div className="carouselBio">
                  <h3>Cody Lobdell</h3>
                  <p>Software Developer - US Army Veteran - Dance Enthusiast</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/kirk.jpg"
                alt="Kirill"
              />
              <Carousel.Caption>
                <div className="carouselBio">
                  <h3>Kirill Lesnykh</h3>
                  <p>Software Developer - Buisness Owner - Impartial to Design</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </article>
        <article className="tools">
          <h2>Tools</h2>
          <div className="imgContainer">
            <img src="./images/javascript.png" alt="javascript" />
            <img src="./images/css3.png" alt="css3" />
            <img src="./images/html5.png" alt="html5" />
            <img src="./images/mongodb.png" alt="mongodb" />
            <img src="./images/bootstrap.png" alt="bootstrap" />
            <img src="./images/github.png" alt="github" />
            <img src="./images/eslint.png" alt="eslint" />
            <img src="./images/express.png" alt="express" />
            <img src="./images/git.png" alt="mongodb" />
            <img src="./images/nodejs.png" alt="nodejs" />
            <img src="./images/npm.png" alt="npm" />
            <img src="./images/react.png" alt="react" />
            <img src="./images/slack.png" alt="slack" />
            <img src="./images/ubuntu.png" alt="ubuntu" />
            <img src="./images/vscode.png" alt="vscode" />
          </div>
        </article>
      </section>
    );
  }
}

export default About;
