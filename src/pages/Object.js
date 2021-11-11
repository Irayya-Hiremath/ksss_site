import React from 'react'
import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer'
import{Card} from 'react-bootstrap';
import image from '../images/object1.jpeg'

function Object() {
    return (
        <div>
            <Layout>
            <div className='row container-fluid  m-auto my-3 ' style={{width:'100%'}}>
                  <div className="col-md-6 col-12 px-5 mb-5">
                  <Card className='border-0' style={{ }}>
                  <Card.Header className='w-auto text-center' as="h3" style={{backgroundColor:'#0F93F8',color:'white',fontSize:'3rem'}}>Objective</Card.Header>
                        <Card.Img variant="top" src={image} style={{width:'50%', margin:"auto"}}/>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text className='py-2' style={{fontSize:'2.5rem'}}>
                                We aim to provide quality education with highest academic
                                standards .Our objective is to create an environment that will
                                ensure that our student will develop well rounded personalities
                                and grow into successful human beings and not just remain
                                successful students.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                      {/* <Content className='text-center' title='Objective'titleContent='We aim to provide quality education with highest academic
                      standards .Our objective is to create an environment that will
                      ensure that our student will develop well rounded personalities
                      and grow into successful human beings and not just remain
                      successful students.'/> */}
                  </div>
                  
                  <div className="col-md-6 col-12 px-5 mb-5">
                  <Card className='border-0' style={{ }}>
                  <Card.Header className='w-auto text-center' as="h3" style={{backgroundColor:'#0F93F8',color:'white',fontSize:'3rem'}}>Vision</Card.Header>
                        <Card.Img variant="top" src={image} style={{width:'50%', margin:"auto"}}/>
                        <Card.Body>
                            {/* <Card.Title>Card Title</Card.Title> */}
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
                      {/* <Content title='Vision'titleContent='To maintain the higher standard of discipline and imparting right
                      value. To install the spirit of dedication to the young minds to
                      be an asset to the nation. To mould the student/young minds with
                      best education and higher disciplinary Standards to meet the
                      global competency. To be the most efficient acceptable and excel
                      in the field of education'/> */}
                  </div>
              </div>


                <Footer/>
            </Layout>
            
        </div>
    )
}

export default Object
