import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Row,Col,Card} from "react-bootstrap";


function Hostel() {
    return (
        <div>
           <Layout>

                    <Card className='container' >
                            <Card.Body>
                                <Card.Title>Hostel</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                <Card.Text>
                                    The college has hostel facility for both Boys & Girls, tuition classes and regular tests will be held for the students during morning and evening hours by experience lecturer.Food served is strictly vegetarian.
                                </Card.Text>
                                {/* <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link> */}
                            </Card.Body>
                    </Card>


                    <div className="container mt-5">
                        <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                    <th>Time</th>
                                    <th>Work</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    </tr>
                                    <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    </tr>
                                    <tr>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    </tr>
                                </tbody>
                        </Table>
                    </div>
              <Footer/>
          </Layout>  
        </div>
    )
}

export default Hostel
