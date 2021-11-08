import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/header'
import Layout from '../components/Layout'
import {Card,Tabs,Tab,Table} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import image from '../images/DSC.jpg';
import Courses from '../components/Courses'
import Campus from '../components/Campus'


function Aboutpage() {
    return (
        <div>
            <Layout>
                <Card>
                    <Card.Header as="h5">The Organization</Card.Header>
                    <Card.Body>
                        {/* <Card.Title>Special title treatment</Card.Title> */}
                        <Card.Text>
                       
                        We believe that every child is uniquely created with divine energy which requires a suitable medium of expression. 
                        It is our duty to channelize this hidden energy to the world at large through right education, 
                        right values and right action. KSSS PU College imbibes these ideals for purposeful education across caste, 
                        creed and nationality in the true spirit of Sri Swamiji's vision.
                        <br />
                        <br />
                        Shri Pejawar Swamiji is one of the living saints who are accepted as moral and spiritual leader by all section of the society in our country. A lucid orator, a keen debater, a rapt teacher, a profound scholar, an enquiring critic, a farsighted educational organizer, a compassionate spiritual preceptor.
                        <br />
                        <br />

                         Swamiji has been working tirelessly in the field of education for many decades and it is under his guidance that institutes like the Janata Shikshan Samiti(JSS)Dharwad and Poorna Pragnya Vidyapeeth, Bangalore have gained the reputation of being the center of excellence providing quality education. It was also a dream of Swamiji to provide education to the needy students of the rural area, and this dream has been realized by starting this college by name as KSSS(Karnataka Shikshana Seva Samithi at Budersingi Village). Our vast 10 acre is surrounded by lush greenery and provided a serene and pleasant ambiance that will be conductive to learning. The main college building is located atop a hill and has spacious classrooms which are airy and well lit. It has well equipped laboratories, reading rooms and an extensive library and two play grounds for sports activities.
                        <br />
                        <br />

                        Our campus is located on the outskirts of Hubli, near Kundagol Cross just off National Highway(NH-4) and is a distance of 7 Km. from Old Bus stand, Hubli. For the convenience of students we have arranged for Transport facilities from Hubli at regular intervals.
                                
                        </Card.Text>
                    </Card.Body>
                 </Card>

                
                    <Card.Header  as="h5">Chief Administrator</Card.Header>
                    <Card.Body className='row'>
                        <div className="col-4 overflow-hidden "><img src={image} style={{image:'responsive',height:'100%',width:'100%'}} image-responsive alt="" /></div> 
                        <Card.Text className='col-8'>
                            KSSS PU Science and Commerce College managed by Karnataka Shikshana Seva Samiti, Hubli was founded by His Holiness Dr. Si Sri Vishwesha Teertha Swamiji, Pejawar Mutt, Udupi. Our Swamiji has a keen interest towards this college and provide guidance, suggestions and inspirations which have made this college grow in leaps and bounds. The students of this college receive a special recognition everywhere. Right from its inception, the college has been receiving excellent results every year. The college provides quality education and it makes every effort in this regard. We believe that providing good education to the students is worshiping of God.
                                                    <br />
                                                    <br />
                                                
                            Our team of lecturers are highly experienced and dedicated towards providing intensive teaching and help the students to reach their goals. Our aim is not only to provide the best education, and also to instill high disciplinary standards. Besides the quality education it provides ample opportunity to students to bring out their hidden talents. They take part in curricular and non curricular activities too. They are very well trained to face challenges in future and equipped with proper skills.
                        <br/>
                                
                        </Card.Text>
                    </Card.Body>
                

                    <Card.Header as="h5">Management</Card.Header>

                    <Tabs defaultActiveKey="profile" className='bg-black' id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="home" title="Members of trust">

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Sl No</th>
                                <th>Members of Trust</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>President <br />
                                Shri Shri Vishwesh Teertha Swamiji Of Pejawar Mutt,Udupi</td>
                                </tr>

                                <tr>
                                <td>2</td>
                                <td> Working President <br/>
                                Shri Shrikanth G.Kemtur</td>
                                </tr>

                                <tr>
                                <td>3</td>
                                <td colSpan="2">Honorary Secretary<br/>
                                Shri .G.R.Walvekar</td>
                                </tr>

                                <tr>
                                <td>4</td>
                                <td>Treasurer <br />
                                Dr.V.G.Nadagouda</td>
                                </tr> <tr>

                                <td>5</td>
                                <td>Honorary Joint Secretary<br/>
                                Shri.K.Sateesh</td>
                                </tr>

                                <tr>
                                <td>6</td>
                                <td>Honorary Joint Secretary<br/>
                                Shri.G.S.Mysore</td>
                                </tr>
                            </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="profile" title="Counsil of Advisor">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Sl No</th>
                                <th>Members of Trust</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>President <br />
                                Shri Shri Vishwesh Teertha Swamiji Of Pejawar Mutt,Udupi</td>
                                </tr>

                                <tr>
                                <td>2</td>
                                <td> Working President <br/>
                                Shri Shrikanth G.Kemtur</td>
                                </tr>

                                <tr>
                                <td>3</td>
                                <td colSpan="2">Honorary Secretary<br/>
                                Shri .G.R.Walvekar</td>
                                </tr>

    
                            </tbody>

                          </Table>  

                            
                        </Tab>
                       
                  </Tabs>

                  {/* <Courses/> */}
            </Layout>
            
        </div>
    )
}

export default Aboutpage
