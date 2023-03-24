import React from 'react';
import axios from 'axios';
import AddItemModal from './AddItemModal';
import UpdateItemModal from './UpdateItemModal';
import { Table, Button, Accordion } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";
import './Items.css';


class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      noItem: true,
      showAddItemModal: false,
      showUpdateItemModal: false,
      currentItem: {},
    }
  }

  handleOpenUpdateItemModal = (e) => {
    e.preventDefault();
    this.setState({
      showUpdateItemModal: true,
    })
  }

  handleCloseUpdateItemModal = (e) => {
    this.setState({
      showUpdateItemModal: false,
    })
  }

  handleOpenAddItemModal = (e) => {
    e.preventDefault();
    this.setState({
      showAddItemModal: true,
    })
  }

  handleCloseAddItemModal = (e) => {
    this.setState({
      showAddItemModal: false,
    })
  }

  handleAddItemSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.category.value);
    console.log(e.target.itemName.value);
    console.log(e.target.links.value);
    console.log(this.props.auth0.user.email);
    let newItem = {
      category: e.target.category.value,
      itemName: e.target.itemName.value,
      links: e.target.links.value,
      email: this.props.auth0.user.email
    }
    console.log(newItem);
    this.setState({
      showAddItemModal: false,
    })
    this.postItem(newItem);
  }

  postItem = async (newItem) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/items`;
      let createdItem = await axios.post(url, newItem);
      //console.log(createdItem.data);
      this.setState({
        items: [...this.state.items, createdItem.data]
      })
    } catch (error) {
      console.log('error msg: ', error.response.data)
    }
  }

  deleteItem = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/items/${id}`;
      await axios.delete(url);
      let updatedItems = this.state.items.filter(item => item._id !== id);
      this.setState({
        items: updatedItems
      });
    } catch (error) {
      console.log('error msg: ', error.response.data)
    }
  }

  handleUpdateItem = (item) => {
    //console.log(item);
    this.setState({
      showUpdateItemModal: true,
      currentItem: item,
    })
  }


  updateItem = async (item) => {
    try {
      let updatedItemFromDB = await axios.put(`${process.env.REACT_APP_SERVER}/items/${item._id}`, item);
      let updatedItems = this.state.items.map(i => {
        return i._id === item._id
          ? updatedItemFromDB.data
          : i;
      });
      this.setState({
        showUpdateItemModal: false,
        items: updatedItems,
      })

    } catch (error) {
      console.log('error msg: ', error.response.data)
    }
  }

  getItems = async () => {
    // try {
    if (this.props.auth0.isAuthenticated) {
      //console.log('getItems function is good');
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      //console.log(jwt);
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/items',
        headers: {
          "Authorization": `Bearer ${jwt}`
        }
      }
      let results = await axios(config);
      //console.log(carItems);
      //console.log(results.data);
      this.setState({
        items: results.data,
        noItem: false,
      })
    } else { console.log('getItems function error'); }
    // } catch (error) {
    //   console.log('there is an error: ', error.response.data)
    // }
  }

  itemToTableRow = (item) => {
    return (
      <tr key={item._id}>
        <td>{item.category}</td>
        <td>{item.itemName}</td>
        <td>{item.links}</td>
        <td>
          <Button variant="outline-warning" onClick={() => this.deleteItem(item._id)}>Delete Item</Button>
          <Button variant="outline-dark" onClick={() => this.handleUpdateItem(item)}>Update Item</Button></td>
      </tr>
    )
  }


  componentDidMount() {
    this.getItems();
    //console.log('componentDidMount ok');
  }


  render() {
    //console.log(this.state.items);
    //Car Items
    let carItems = this.state.items.filter(item => item.category === 'Car');
    let carItemsToTable = carItems.map(item => this.itemToTableRow(item));

    //Bathroom Items
    let bathItems = this.state.items.filter(item => item.category === 'Bathroom');
    let bathItemsToTable = bathItems.map(item => this.itemToTableRow(item));

    //Kitchen Items
    let kitchenItems = this.state.items.filter(item => item.category === 'Kitchen');
    let kitchenItemsToTable = kitchenItems.map(item => this.itemToTableRow(item));

    //Food Items
    let foodItems = this.state.items.filter(item => item.category === 'Food');
    let foodItemsToTable = foodItems.map(item => this.itemToTableRow(item));

    //House Items
    let houseItems = this.state.items.filter(item => item.category === 'House');
    let houseItemsToTable = houseItems.map(item => this.itemToTableRow(item));

    //Other Items
    let otherItems = this.state.items.filter(item => item.category === 'Other');
    let otherItemsToTable = otherItems.map(item => this.itemToTableRow(item));

    let allItemsHeaders = ['Car', 'Bathroom', 'Kitchen', 'Food', 'House', 'Other'];
    let allItemsToTable = [carItemsToTable, bathItemsToTable, kitchenItemsToTable, foodItemsToTable, houseItemsToTable, otherItemsToTable]
    let accordionItems = [];
    for (let i in allItemsHeaders) {
      accordionItems.push(
        
          <Accordion.Item eventKey={i}>
            <Accordion.Header>{allItemsHeaders[i]}</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Item Category</th>
                    <th>Item Name</th>
                    <th>Link(s)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allItemsToTable[i]}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        
      )
    }

    return (

      <>

        <h2>My Items</h2>
        {this.state.items.length ? (
          <Accordion defaultActiveKey="0">
            {accordionItems}
          </Accordion>

        )
          : (
            <h3>You currently have no items.</h3>
          )}
        
          <Button className="addButton" variant="outline-success" onClick={this.handleOpenAddItemModal}>Add an Item</Button>
          {this.state.showAddItemModal ?
            <AddItemModal
              handleAddItemSubmit={this.handleAddItemSubmit}
              handleCloseAddItemModal={this.handleCloseAddItemModal}
              handleOpenAddItemModal={this.handleOpenAddItemModal}
              
            /> :
            <></>
            
        }
        {this.state.showUpdateItemModal ?
          <UpdateItemModal
            updateItem={this.updateItem}
            item={this.state.currentItem}
            handleOpenUpdateItemModal={this.handleOpenUpdateItemModal}
            handleCloseUpdateItemModal={this.handleCloseUpdateItemModal}
          /> :
          <></>
        }
      </>
      
    )
  }
}

export default withAuth0(Items);