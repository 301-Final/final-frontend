import React from 'react';
import axios from 'axios';
import AddItemModal from './AddItemModal';
import UpdateItemModal from './UpdateItemModal';
import { Table, Button } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";

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
    let newItem = {
      category: e.target.category.value,
      description: e.target.itemName.value,
      status: e.target.links.value,
    }
    this.setState({
      showAddItemModal: false,
    })
    this.postItem(newItem);
  }

  postItem = async (newItem) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/items`;
      let createdItem = await axios.post(url, newItem);
      console.log(createdItem.data);
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

  handleUpdateItem = (i) => {
    this.setState({
      showUpdateItemModal: true,
      currentItem: i,
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
        console.log('getItems function is good');
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        console.log(jwt);
        const config = {
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER,
          url: '/items',
          headers: {
            "Authorization": `Bearer ${jwt}`
          }
        }
        let results = await axios(config);
        console.log(results.data);
        // let results = await axios.get(`${process.env.REACT_APP_SERVER}/items`);
        this.setState({
          items: results.data,
          noItem: false,
        })
      } else{ console.log('getItems function error'); }
    // } catch (error) {
    //   console.log('there is an error: ', error.response.data)
    // }
  }


  componentDidMount() {
    this.getItems();
    console.log('componentDidMount ok');
  }


  render() {
    console.log('Items page is working');

    let itemsToTable = this.state.items.map(
      item => {
        return (
          <tr>
            <td>-</td>
            <td>{item.category}</td>
            <td>{item.itemName}</td>
            <td>{item.links}</td>
            <td>
              <Button variant="outline-warning" onClick={()=>this.deleteItem(item._id)}>Delete Item</Button>
              <Button variant="outline-dark" onClick={()=>this.handleUpdateItem(item._id)}>Update Item</Button></td>
          </tr>
        )
      }
    );

    return (

      <>

        <h2>My Items</h2>
        {this.state.items.length ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Item Category</th>
                <th>Item Name</th>
                <th>Link(s)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {itemsToTable}
            </tbody>
          </Table>
        )
          : (
            <h3>You currently have no items.</h3>
          )}

        <Button variant="outline-success" onClick={this.handleOpenAddItemModal}>Add an Item</Button>
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