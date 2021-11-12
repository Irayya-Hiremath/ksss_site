import * as React from "react"
// import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Fluid,Nav,NavDropdown,Navbar} from "react-bootstrap";
import styled from 'styled-components'







function Navmenu() {
  return (
    <div className='mt-2 '>
      <Navbar collapseOnSelect expand="lg"  variant="dark" style={{fontSize:'2.5rem', backgroundColor:'#002347',color:'#FDA744',border:'.1rem solid orange'}} >
        <Container fluid> 
          {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='px-2' style={{border:'0.5rem solid orange',width:"6rem"}} />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">
            <Nav.Link className='px-md-5' href="/">Home</Nav.Link>

              <NavDropdown title="About us"id="collasible-nav-dropdown"style={{backgroundColor:'#002347'}}>
                  <NavDropdown.Item href="Object" style={{backgroundColor:'#002347',fontSize:'2.5rem',color:'white'}}>
                    Object And Vision
                    </NavDropdown.Item>
                    <NavDropdown.Item href="Organization"style={{backgroundColor:'#002347', fontSize:'2.5rem',color:'white'}}>
                    The Organization
                    </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className='px-md-5' title="Acadmics" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="Courses"className='px-md-5'style={{backgroundColor:'#002347',fontSize:'2.5rem',color:'white'}}>
                  Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"style={{backgroundColor:'#002347',fontSize:'2.5rem',color:'white'}}>
                  Sailent Features
                  </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="Hostel" className='px-md-5'>Hostel</Nav.Link>
              <Nav.Link href="Events" className='px-md-5'>Events</Nav.Link>
              <Nav.Link href="Campus" className='px-md-5'>Campus</Nav.Link>
              <Nav.Link href="PhotoGallary" className='px-md-5'>Photo Gallery</Nav.Link>
              <Nav.Link href="Image" className='px-md-5'>Notice</Nav.Link>
              <Nav.Link href="Contact" className='px-md-5'>Contact</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              
            </Nav>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navmenu
