import * as React from "react"
// import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Fluid,Nav,NavDropdown,Navbar} from "react-bootstrap";
import styled from 'styled-components'



// const carsoulHieght = {
//     hieght:'10vh'
//     // background: 'no-repeat scroll center  scroll',
//     // backgroundSize:'cover'

// }
const A = styled.a`
    text-decoration: none;
    color: #BCB4B4;
    // font-family: "RobotoMono Regular";
    &:hover {
        color: #fb9d4a;
      }`


function Navmenu() {
  return (
    <div className='mt-2 '>
      <Navbar collapseOnSelect expand="lg"  variant="dark" style={{fontSize:'2.5rem', backgroundColor:'#002347',color:'#FDA744'}} >
        <Container fluid> 
          {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
         <A> <Navbar.Toggle aria-controls="responsive-navbar-nav" /></A>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <A> <Nav.Link className='px-md-5' href="/">Home</Nav.Link></A>

              <NavDropdown title="About us"id="collasible-nav-dropdown"style={{backgroundColor:'#002347'}}>
                  <NavDropdown.Item href="Object" style={{backgroundColor:'#002347',fontSize:'2.5rem',color:'white'}}>
                    Object And Vision
                    </NavDropdown.Item>
                    <NavDropdown.Item href="Organization"style={{backgroundColor:'#002347', fontSize:'2.5rem',color:'white'}}>
                    The Organization
                    </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown className='px-md-5' title="Acadmics" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="Courses"className='px-md-5'>
                  Courses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                  Sailent Features
                  </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="Hostel" className='px-md-5'>Hostel</Nav.Link>
              <Nav.Link href="Events" className='px-md-5'>Events</Nav.Link>
              <Nav.Link href="Campus" className='px-md-5'>Campus</Nav.Link>
              <Nav.Link href="PhotoGallary" className='px-md-5'>Photo Gallery</Nav.Link>
              <Nav.Link href="#features" className='px-md-5'>Notice</Nav.Link>
              <Nav.Link href="Contact" className='px-md-5'>Contact</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              
            </Nav>
            {/* <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navmenu
