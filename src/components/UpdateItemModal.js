import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateItemModal extends React.Component {
  
  handleSubmit = (e) => {
    e.preventDefault();

    let itemToUpdate = {
      category: e.target.category.value || this.props.item.category,
      itemName: e.target.itemName.value || this.props.item.itemName,
      links: e.target.links.value || this.props.item.links,
      _id: this.props.item._id,
      __v: this.props.item.__v,
      email: this.props.item.email
    }

    this.props.updateItem(itemToUpdate);
  }

  render() {
    console.log(this.props.item.itemName);
    return (
      <>
      <Modal show={this.props.handleOpenUpdateItemModal} onHide={this.props.handleCloseUpdateItemModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update your Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="category">
                <Form.Label>Item Category</Form.Label>
                <Form.Select> 
                  <option>Car</option>
                  <option>Bathroom</option>
                  <option>Kitchen</option>
                  <option>Food</option>
                  <option>House</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="text" placeholder={this.props.item.itemName} />
              </Form.Group>
              <Form.Group controlId="links">
                <Form.Label>Links</Form.Label>
                <Form.Control type="text" placeholder={this.props.item.links} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Item
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>)
  }

}

export default UpdateItemModal;