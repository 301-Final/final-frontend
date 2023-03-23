import { withAuth0 } from "@auth0/auth0-react";
import React from 'react';
import Items from './Items';
import ImBored from './ImBored'

class Catalog extends React.Component {

  render() {
    //console.log('Catalog page is working');
    return (
      <>
      {this.props.auth0.isAuthenticated ?
        <>
          <Items />
          <ImBored/>
        </>
        :
        <h3>Please Log In</h3>}
      </>
    )
  }
}

export default withAuth0(Catalog);