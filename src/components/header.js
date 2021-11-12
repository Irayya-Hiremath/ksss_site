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
          <Col lg={6} sm={12} style={{backgroundColor:'#0F93F8', color:'white',fontSize:'2rem'}}>
            <span className='px-md-5 ms-md-5 px-3  ms-3' bg="dark">Phone No: +91-9945024923</span>
            <span className="px-md-5 px-3">kssscollege@gmail.com</span>
            {/* <span className="px-md-5 px-3">Budersingi,Karnataka</span>    */}
          </Col>

          <Col lg={6} sm={12}>
            <marquee className='text-light'style={{fontSize:'2rem'}}> website under process </marquee>
          </Col>

        </Row>


        {/*********** second row ***************/}
        <Row className="text-center ">

          <div className="col-md-1 col-2 m-auto">
            <img src={swamiji} className="d-block  w-100 img-fluid " alt="..." />
          </div>
                
          <div className="col-md-10 col-8  big-header" >
              <h2 className="mb-3 pt-3 header1" style={{fontSize:'3rem'}}>KARNATAKA SHIKSHNA SEVA SAMITHI</h2>
              <h1 className="mb-3 header2"style={{fontSize:'5rem'}}>KSSS P.U SCIENCE AND COMMERCE COLLEGE</h1>
              <h4 className="mb-3 header3" style={{fontSize:'2rem'}}>GOVARDHANA CAMPUS NEAR KUNDAGOL, CROSS BUDARSINGI, HUBLI</h4>
          </div>

          <div className="col-md-10 col-8 font-weight-bold align-middle m-auto small-header" >
              <h2 className="mb-3 pt-3 header1" style={{fontSize:'1.8rem'}}>KARNATAKA SHIKSHNA SEVA SAMITHI</h2>
              <h1 className="mb-3 header2"style={{fontSize:'2rem'}}>KSSS P.U SCIENCE AND COMMERCE COLLEGE</h1>
              <h3 className="mb-3 header3" style={{fontSize:'1.5rem'}}>GOVARDHANA CAMPUS NEAR KUNDAGOL, CROSS BUDARSINGI</h3>
          </div>

      

          <div className="col-md-1 col-2  m-auto">
            <img src={logo} className="d-block  w-100 img-fluid" alt="..." />
          </div>     
            
        
        </Row>
      </Container>
    </div>

  )
}
  


export default Header
