import React from "react";
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

class ImBored extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: '',
    }
  }

  getToDo = async () => {
    console.log('in getToDo');
    let event = await axios.get('http://www.boredapi.com/api/activity/');
    console.log(event.data);
    this.setState({
      toDo: event.data.activity
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log('in bored handleSubmit');
    this.getToDo();
  }

  componentDidMount() {
    this.getToDo();
  }

  render() {

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Bored?</Card.Title>
          <Card.Text>
            {this.state.toDo}
          </Card.Text>
          <Button variant="primary" onClick={this.handleSubmit}>Another Activity</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default ImBored;