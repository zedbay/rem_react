import { useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import React from 'react'

function AdministrationNav() {
  let history = useHistory();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Administration</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => history.push('/administration/user')}> User</Nav.Link>
        <Nav.Link onClick={() => history.push('/administration/group')}>Group</Nav.Link>
        <Nav.Link onClick={() => history.push('/administration/product')}>Product</Nav.Link>
        <Nav.Link onClick={() => history.push('/administration/order')}>Order</Nav.Link>
        <Nav.Link onClick={() => history.push('/administration/message')}>Message</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AdministrationNav;