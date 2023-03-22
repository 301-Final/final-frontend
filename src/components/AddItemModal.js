import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class AddItemModal extends React.Component {
  render() {
    return (
      <>

        <Modal show={this.props.handleOpenAddItemModal} onHide={this.props.handleCloseAddItemModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add your Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleAddItemSubmit}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Item Category" />
              </Form.Group>
              <Form.Group controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control type="text" placeholder="Item Name" />
              </Form.Group>
              <Form.Group controlId="links">
                <Form.Label>Links</Form.Label>
                <Form.Control type="text" placeholder="Link(s) to item (amazon, walmart, etc.)" />
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