import React from 'react'
import Layout from '../components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from  "react-bootstrap";
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Footer from '../components/Footer'



function Courses() {
    return (
        <div className='overflow-hidden'>
             <Layout>
                 <div>
                     <CardHeader className='container'>Courses offered</CardHeader>
                 </div>


                 <div className='row'>
                        <Card style={{ width: '40rem' }}>
                        <Card.Body className='row'>
                            {/* <Card.Title className='text-center'>SCIENCE</Card.Title> */}
                            <CardHeader className='container text-center'>SCIENCE</CardHeader>

                            <Card.Text className='col'>
                                <ul>
                                    <li>Kannada</li>
                                    <li>English</li>
                                    <li>Hindi</li>
                                    <li>Sanskrit</li>
                                </ul>
                        
                            </Card.Text>
                            <Card.Text className='col'>
                                <ul>
                                    <li>Physics,Chemistry,Maths,Biology(PCMB)</li>
                                    <li>Physics,Chemistry,Maths,Computer Science(PCMS)</li>
                                </ul>
                        
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '40rem' }}>
                        <Card.Body className='row'>
                            {/* <Card.Title className='text-center'>SCIENCE</Card.Title> */}
                            <CardHeader className='container text-center'>COMMERCE</CardHeader>

                            <Card.Text className='col'>
                                <ul>
                                    <li>Kannada</li>
                                    <li>English</li>
                                    <li>Hindi</li>
                                    <li>Sanskrit</li>
                                </ul>
                        
                            </Card.Text>
                            <Card.Text className='col'>
                                <ul>
                                    <li>Economics,Business Studies,Accountancy,Computer science(EBACS)</li>
                                    <li>Physics,Chemistry,Maths,Computer Science(EBAS)</li>
                                </ul>
                        
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                 </div>
             <Footer/>
            </Layout>
        </div>
    )
}

export default Courses
