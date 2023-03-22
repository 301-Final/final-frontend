import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class AddItemModal extends React.Component {
  render() {
    return (
      <>

        <Modal show={this.props.openAddItemModal} onHide={this.props.closeAddItemModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add your Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.submitAddItem}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Item Category" />
              </Form.Group>
              <Form.Group controlId="itemName">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Item Name" />
              </Form.Group>
              <Form.Group controlId="links">
                <Form.Check type="text" placeholder="Link(s) to item (amazon, walmart, etc.)" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    )

  }
}

export default AddItemModal;