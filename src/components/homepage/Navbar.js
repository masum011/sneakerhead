import React from 'react';
import  {Link} from 'react-router-dom'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';

 function Navbar() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Sneakerhead</MDBNavbarBrand>
        <span><Link to="/">All Product</Link></span>
        <MDBBtn color='dark'>
        <Link to="/card">Dark(0)</Link>
      </MDBBtn>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}
export default Navbar;