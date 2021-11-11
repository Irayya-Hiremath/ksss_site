import React from 'react'
import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer'
import{Card} from 'react-bootstrap';
import image2 from '../images/veda4.jpeg';
import image1 from '../images/veda0.jpg'


function Object() {
    return (
        <div className='overflow-hidden'>
            <Layout>
            <div className='row container-fluid  my-3  d-flex justify-content-around' style={{width:'100%'}}>
                  <div className="col-md-5 col-12 px-5 mb-5 sh">
                        <Card className='border-0' style={{ }}>
                        <Card.Header className='w-auto text-center' as="h3" style={{backgroundColor:'#0F93F8',color:'white',fontSize:'3rem'}}>Objective</Card.Header>
                                <Card.Img className='my-3' variant="top" src={image1} style={{width:'80%', margin:"auto"}}/>
                                <Card.Body>
                                <Card.Text className='py-2' style={{fontSize:'2.5rem'}}>
                                    We aim to provide quality education with highest academic
                                    standards .Our objective is to create an environment that will
                                    ensure that our student will develop well rounded personalities
                                    and grow into successful human beings and not just remain
                                    successful students.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                  </div>
                  
                  <div className="col-md-5 col-12 px-5 mb-5 sh">
                    <Card className='border-0' style={{ }}>
                    <Card.Header className='w-auto text-center' as="h3" style={{backgroundColor:'#0F93F8',color:'white',fontSize:'3rem'}}>Vision</Card.Header>
                         <Card.Img className='my-3'  variant="top" src={image2} style={{width:'80%', margin:"auto"}}/>
                            <Card.Body>
                                <Card.Text className='py-2' style={{fontSize:'2.5rem'}}>
                                    To maintain the higher standard of discipline and imparting right
                                    value. To install the spirit of dedication to the young minds to
                                    be an asset to the nation. To mould the student/young minds with
                                    best education and higher disciplinary Standards to meet the
                                    global competency. To be the most efficient acceptable and excel
                                    in the field of education
                                </Card.Text>
                        </Card.Body>
                        </Card>
                    
                  </div>
              </div>


                <Footer/>
            </Layout>
            
        </div>
    )
}

export default Object
