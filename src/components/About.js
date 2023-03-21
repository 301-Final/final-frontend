import React from "react";
import ListGroup from 'react-bootstrap/ListGroup'

class About extends React.Component {

  render() {

    return (
      
        <ListGroup>
          <ListGroup.Item variant="warning">About us:</ListGroup.Item>
          <ListGroup.Item variant="info">Thomas Lau</ListGroup.Item>
          <ListGroup.Item>Full stack developer</ListGroup.Item>
          <ListGroup.Item variant="info">Kirill Lesnykh</ListGroup.Item>
          <ListGroup.Item>Full stack developer</ListGroup.Item>
        </ListGroup>

    )
  }
};
