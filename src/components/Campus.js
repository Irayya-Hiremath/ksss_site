import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Tab,Row,Col,Nav} from "react-bootstrap";

function Campus() {
    return (
        <div  className='w-100'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12}>
                    <Nav variant="pills" className="flex-row">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Class Room</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Labs</Nav.Link>
                        </Nav.Item> 
                         <Nav.Item>
                        <Nav.Link eventKey="three">Library</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="four">Hostel</Nav.Link>
                        </Nav.Item>  
                        <Nav.Item>
                        <Nav.Link eventKey="five">Transport</Nav.Link>
                        </Nav.Item> 
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" className=' border border-danger'>
                        <h1>first</h1>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <h1>second</h1>

                        </Tab.Pane>
                        <Tab.Pane eventKey="three">
                        <h1>third</h1>

                        </Tab.Pane> <Tab.Pane eventKey="four">
                        <h1>fourth</h1>

                        </Tab.Pane> <Tab.Pane eventKey="five">
                        <h1>fifth</h1>

                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
        </Tab.Container>
        </div>
    )
}

export default Campus
