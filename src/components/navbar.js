import * as React from "react"
// import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Fluid,Nav,NavDropdown,Navbar} from "react-bootstrap";

// const carsoulHieght = {
//     hieght:'10vh'
//     // background: 'no-repeat scroll center  scroll',
//     // backgroundSize:'cover'

// }

function Navmenu() {
  return (
    <div className='mt-2 border border-danger'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid> 
          {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Aboutpage">About us</Nav.Link>
              <NavDropdown title="Acadmics" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Acadamics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Sailent Features
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#features">Events</Nav.Link>
              <Nav.Link href="#features">Campus</Nav.Link>
              <Nav.Link href="#features">Photo Gallery</Nav.Link>
              <Nav.Link href="#features">Notice</Nav.Link>
              <Nav.Link href="Contactpage">Contact</Nav.Link>
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
