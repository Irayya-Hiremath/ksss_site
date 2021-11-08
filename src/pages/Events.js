import React from 'react'
import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import {Tab,Row,Col,Nav,Carousel} from "react-bootstrap";


function Events() {
    return (
        <div className='overflow-hidden'>
             <Layout >
                        <div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={12}>
                                <Nav variant="pills" className="flex-row">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Govardhan Utsav</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Vana Mahotsava</Nav.Link>
                                    </Nav.Item> 
                                    <Nav.Item>
                                    <Nav.Link eventKey="three">Sendoff Day</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="four">Sports and Games</Nav.Link>
                                    </Nav.Item>  
                                    <Nav.Item>
                                    <Nav.Link eventKey="five">Children's Day</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="six">Parents Meet</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" className=' border border-danger'>
                                    {/* <Sonnet /> */}
                                    {/* <h1>first</h1> */}
                                        <div className='container'>
                                            <Carousel>
                                                    <Carousel.Item className='overflow-hidden'>
                                                        <img
                                                        className="d-block w-100"
                                                        src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                                        alt="First slide"
                                                        />
                                                        <Carousel.Caption>
                                                        <h3>First slide label</h3>
                                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                                        alt="Second slide"
                                                        />

                                                        <Carousel.Caption>
                                                        <h3>Second slide label</h3>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img
                                                        className="d-block w-100"
                                                        src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                                        alt="Third slide"
                                                        />

                                                        <Carousel.Caption>
                                                        <h3>Third slide label</h3>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>
                                                </Carousel>
                                        </div>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    {/* <Sonnet /> */}
                                    <h1>second</h1>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                    {/* <Sonnet /> */}
                                    <h1>third</h1>

                                    </Tab.Pane> 
                                    <Tab.Pane eventKey="four">
                                    {/* <Sonnet /> */}
                                    <h1>fourth</h1>

                                    </Tab.Pane>
                                     <Tab.Pane eventKey="five">
                                    {/* <Sonnet /> */}
                                    <h1>fifth</h1>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="six">
                                    {/* <Sonnet /> */}
                                    <h1>six</h1>
                                    </Tab.Pane>

                                    
                                    
                                    
                                </Tab.Content>
                                </Col>
                            </Row>
                    </Tab.Container>
                    </div>
             </Layout>
        </div>
    )
}

export default Events
