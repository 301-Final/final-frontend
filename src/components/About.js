import React from "react";
import { Tabs, Tab, Card } from 'react-bootstrap'

class About extends React.Component {

  render() {
    return (
      <Tabs
        defaultActiveKey="aboutus"
        id="tabber"
        className="mb-3"
        justify
      >
        <Tab eventKey="aboutus" title="About Us">
          <body>
            <Card>
              <article>
              <h2>Michael Dulin</h2>
                <img
                  src="./images/mike.jpg"
                  alt="Mike"
                  onClick={this.handleImgClick}
                  style={{ maxHeight: '18rem', maxWidth: '18rem' }}
                />
                <p>Michael likes to do stuff</p>
              </article>
            </Card>
            <Card>
              <article>
                <h2>Cody Lobdell</h2>
                <img
                  src="./images/cody.jpg"
                  alt="Cody"
                  onClick={this.handleImgClick}
                  style={{ maxHeight: '18rem', maxWidth: '18rem' }}
                />
                <p>Cody likes to do stuff</p>
              </article>
            </Card>
            <Card>
              <article>
                <h2>Kirill Lesnykh</h2>
                <img
                  src="./images/kirill.jpg"
                  alt="Mike"
                  onClick={this.handleImgClick}
                  style={{ maxHeight: '18rem', maxWidth: '18rem' }}
                />
                <p>Kirill does NOT like to do stuff</p>
              </article>
            </Card>
          </body>
        </Tab>
        <Tab eventKey="tools" title="Tools">
          <body>
            <ul>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Mongodb</li>
              <li>Bootstrap</li>
            </ul>
          </body>
        </Tab>
        <Tab eventKey="mission" title="Mission" disabled>
          <body>
            <h2>Our Mission</h2>
            <p>Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. Our mission our mission our mission our mission. </p>
          </body>
        </Tab>
      </Tabs>
    )
  }
};

export default About;