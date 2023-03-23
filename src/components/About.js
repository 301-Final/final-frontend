import React from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import About from "./About.css"

class About extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="aboutus" id="tabber" className="mb-3" justify>
        <Tab eventKey="aboutus" title="About Us">
            <Card>
              <Card.Title>Michael Dulin</Card.Title>
              <Card.Img
                src="./images/mike.jpg"
                alt="Mike"
                style={{ maxHeight: "18rem", maxWidth: "18rem" }}
              />
              <Card.Text>Michael likes to do stuff</Card.Text>
            </Card>
            <Card>
            <Card.Title>Cody Lobdell</Card.Title>
              <Card.Img
                src="./images/cody.jpg"
                alt="Cody"
                style={{ maxHeight: "18rem", maxWidth: "18rem" }}
              />
              <Card.Text>Cody likes to do stuff</Card.Text>
            </Card>
            <Card>
              <Card.Title>Kirill Lesnykh</Card.Title>
              <Card.Img
                src="./images/kirill.jpg"
                alt="Mike"
                style={{ maxHeight: "18rem", maxWidth: "18rem" }}
              />
              <Card.Text>Kirill does NOT like to do stuff</Card.Text>
            </Card>
        </Tab>
        <Tab eventKey="tools" title="Tools">
          <body>
            <ul>
              <li>JavaScript</li>
              <li>HMTL5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Mongodb</li>
              <li>Bootstrap</li>
            </ul>
          </body>
        </Tab>
        <Tab eventKey="mission" title="Mission">
          <body>
            <h2>Our Mission</h2>
            <p>
              Our mission our mission our mission our mission. Our mission our
              mission our mission our mission. Our mission our mission our
              mission our mission. Our mission our mission our mission our
              mission. Our mission our mission our mission our mission. Our
              mission our mission our mission our mission.{" "}
            </p>
          </body>
        </Tab>
      </Tabs>
    );
  }
}

export default About;
