import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container,Fluid,Nav,NavDropdown,Navbar} from "react-bootstrap";
import {Container,Row,Col} from 'react-bootstrap';
import swamiji from "../images/swamiji.jpeg"
import Navmenu from "../components/navbar"



function Layout(props) {
    return (
        <Layout>
            <div className='overflow-hidden border border-danger'>

                <Container fluid className='border border-danger'>

                    {/*********  first row *************/}

                    <Row className="bg-dark">
                        {/* <Col lg={2}></Col> */}
                        <Col lg={5} sm={12} style={{ backgroundColor: 'red' }}>
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

                        <Col>
                            <h3 className="mb-3">KARNATAKA SHIKSHNA SEVA SAMITHI</h3>
                            <h1 className="mb-3">KSSS P.U SCIENCE AND COMMERCE COLLEGE</h1>
                        </Col>

                        <Col lg={1} sm={3}>
                            <img src={swamiji} className="d-block h-100 w-100" alt="..." />
                        </Col>


                    </Row>
                </Container>
            </div>
            <Navmenu/>
            <main>

            {props.chidren}

            </main>


        </Layout>

    )
}

export default Layout
