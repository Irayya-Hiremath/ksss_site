import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Data from './Data'

import {Container,Card} from 'react-bootstrap';

function Content(props){

    return(
        <Container fluid >

            <Card className='my-5' style={{ width: '100%'  }} style={{}}>
                <Card.Body>
                     <Card.Header className='' as="h3" style={{backgroundColor:'#0F93F8',color:'white',fontSize:'3rem',width:"auto"}}>{props.title}</Card.Header>
                      {/* <Card.Title>{props.title}</Card.Title> */}
                    <Card.Subtitle className="mb-2 py-2 text-muted"></Card.Subtitle>
                    <Card.Text className='py-2' style={{fontSize:'2.5rem'}}>
                    {props.titleContent}
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}
export  default Content