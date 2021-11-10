import * as React from "react"
// import "bootstrap/dist/js/bootstrap.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import swamiji from "../images/swamiji.jpeg"
import logo from '../images/logo.png'

function Header (){
  return(
    <div className='overflow-hidden '>
      
      <Container fluid className=''>

        {/*********  first row *************/}
      
        <Row className="bg-dark">
          {/* <Col lg={2}></Col> */}
          <Col lg={5} sm={12} style={{backgroundColor:'#0F93F8', color:'white'}}>
            <span className='mx-2' bg="dark">Phone No: +91-9945024923</span>
            <span className="mx-2">kssscollege@gmail.com</span>
            <span className="mx-2">Budersingi,Karnataka</span>   
          </Col>

          <Col lg={5} sm={12}>
            <marquee className='text-light'> website under process </marquee>
          </Col>

        </Row>


        {/*********** second row ***************/}
        <Row className="text-center">

          <Col lg={1} sm={3}>
            <img src={swamiji} className="d-block h-100 w-100" alt="..." />

          </Col>
                
          <Col >
              <h2 className="mb-3 pt-3">KARNATAKA SHIKSHNA SEVA SAMITHI</h2>
              <h1 className="mb-3">KSSS P.U SCIENCE AND COMMERCE COLLEGE</h1>
              <h4>GOVARDHANA CAMPUS NEAR KUNDAGOL, CROSS BUDARSINGI, HUBLI</h4>
          </Col>

          <Col lg={1} sm={3}>
            {/* <img src={swamiji} className="d-block h-100 w-100" alt="..." /> */}
            <img src={logo} className="d-block h-100 w-100" alt="..." />

          </Col>       
            
        
        </Row>
      </Container>
    </div>

  )
}
  


export default Header
