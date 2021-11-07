import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";
import image from '../images/degree.png'


function Courses() {
    return (
        <div className='row'>

            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"  src={image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                      
                    </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"  src={image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                      
                    </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top"  src={image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                      
                    </Card.Body>
            </Card>
            
        </div>
    )
}

export default Courses
