import React from "react"
import Footer from "../components/Footer"
import Header from "../components/header"
import Layout from "../components/Layout"
import { Card, Tabs, Tab, Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import image from "../images/DSC.jpg"
import Courses from "../components/Courses"
import Campus from "../components/Campus"

function Organization() {
  return (
    <div className="overflow-hidden">
      <Layout>
        <Card className="px-md-5 px-0 mb-md-5 mb-5 sh">
                <Card.Body>
                    <Card.Header
                        className="text-center w-75"
                        as="h3"
                        style={{
                          backgroundColor: "#0F93F8",
                          color: "white",
                          fontSize: "3rem",
                        }}
                      >
                        The Organization
                    </Card.Header>

                    <Card.Text className="py-2 " style={{ fontSize: "2.5rem" }}>
                        We believe that every child is uniquely created with divine energy
                        which requires a suitable medium of expression. It is our duty to
                        channelize this hidden energy to the world at large through right
                        education, right values and right action. KSSS PU College imbibes
                        these ideals for purposeful education across caste, creed and
                        nationality in the true spirit of Sri Swamiji's vision.
                        <br />
                        <br />
                        Shri Pejawar Swamiji is one of the living saints who are accepted
                        as moral and spiritual leader by all section of the society in our
                        country. A lucid orator, a keen debater, a rapt teacher, a
                        profound scholar, an enquiring critic, a farsighted educational
                        organizer, a compassionate spiritual preceptor.
                        <br />
                        <br />
                        Swamiji has been working tirelessly in the field of education for
                        many decades and it is under his guidance that institutes like the
                        Janata Shikshan Samiti(JSS)Dharwad and Poorna Pragnya Vidyapeeth,
                        Bangalore have gained the reputation of being the center of
                        excellence providing quality education. It was also a dream of
                        Swamiji to provide education to the needy students of the rural
                        area, and this dream has been realized by starting this college by
                        name as KSSS(Karnataka Shikshana Seva Samithi at Budersingi
                        Village). Our vast 10 acre is surrounded by lush greenery and
                        provided a serene and pleasant ambiance that will be conductive to
                        learning. The main college building is located atop a hill and has
                        spacious classrooms which are airy and well lit. It has well
                        equipped laboratories, reading rooms and an extensive library and
                        two play grounds for sports activities.
                        <br />
                        <br />
                        Our campus is located on the outskirts of Hubli, near Kundagol
                        Cross just off National Highway(NH-4) and is a distance of 7 Km.
                        from Old Bus stand, Hubli. For the convenience of students we have
                        arranged for Transport facilities from Hubli at regular intervals.
                    </Card.Text>
                 </Card.Body>
            </Card>
                  
          <div className="row container-fluid m-auto px-md-5 px-0 mb-md-5 mb-5 sh">
                      <Card.Header className=" text-center my-5 w-75 px-md-5 px-0"     as="h3" style={{ backgroundColor: "#0F93F8", color: "white",  fontSize: "3rem", }}  >
                              CHIEF ADMININSTRATOR
                        </Card.Header>
                      <div class="col-12">

                              <img src={image} className="float-left" style={{width:'20%', marginRight :"10px", float:'left'}}/>
                          
                                  <p className="float-left"style={{fontSize:'2.5rem'}}>
                                  KSSS PU Science and Commerce College managed by Karnataka
                                  Shikshana Seva Samiti, Hubli was founded by His Holiness Dr. Si
                                  Sri Vishwesha Teertha Swamiji, Pejawar Mutt, Udupi. Our Swamiji
                                  has a keen interest towards this college and provide guidance,
                                  suggestions and inspirations which have made this college grow in
                                  leaps and bounds. The students of this college receive a special
                                  recognition everywhere. Right from its inception, the college has
                                  been receiving excellent results every year. The college provides
                                  quality education and it makes every effort in this regard. We
                                  believe that providing good education to the students is
                                  worshiping of God.
                                  <br />
                                  Our team of lecturers are highly experienced and dedicated towards
                                  providing intensive teaching and help the students to reach their
                                  goals. Our aim is not only to provide the best education, and also
                                  to instill high disciplinary standards. Besides the quality
                                  education it provides ample opportunity to students to bring out
                                  their hidden talents. They take part in curricular and non
                                  curricular activities too. They are very well trained to face
                                  challenges in future and equipped with proper skills.
                                  </p>
                      </div>
              </div>


       
        {/* <Card.Header as="h5">Management</Card.Header> */}
        <div className="row px-md-5 px-0 " >
            <Card.Header
            className=" text-center my-5 w-75 px-md-5 px-0"
            as="h3"
            style={{
                backgroundColor: "#0F93F8",
                color: "white",
                fontSize: "3rem",
            }}
            >
            Management
            </Card.Header>
        </div>

        <div className="row container px-md-5 px-0 mb-md-5 mb-5 sh " >

          <div className="col-md-6 col-12 px-5 mb-5">
            <Table striped bordered hover>
              <thead>
                <tr className="text-center" style={{ fontSize: "2.5rem" }}>
                  <th className="w-25">Sl No</th>
                  <th>Members of Trust</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "2rem" }}>
                <tr>
                  <td className="text-center align-middle">1</td>
                  <td className="">
                    President <br />
                    Shri Shri Vishwesh Teertha Swamiji Of Pejawar Mutt,Udupi
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle">2</td>
                  <td>
                    {" "}
                    Working President <br />
                    Shri Shrikanth G.Kemtur
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle">3</td>
                  <td colSpan="2">
                    Honorary Secretary
                    <br />
                    Shri .G.R.Walvekar
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle">4</td>
                  <td>
                    Treasurer <br />
                    Dr.V.G.Nadagouda
                  </td>
                </tr>{" "}
                <tr>
                  <td className="text-center align-middle">5</td>
                  <td>
                    Honorary Joint Secretary
                    <br />
                    Shri.K.Sateesh
                  </td>
                </tr>
                <tr>
                  <td className="text-center align-middle">6</td>
                  <td>
                    Honorary Joint Secretary
                    <br />
                    Shri.G.S.Mysore
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>

          <div className="col-md-6  col-12 px-5 ">
            <Table striped bordered hover>
              <thead style={{ fontSize: "2.5rem" }}>
                <tr className="text-center">
                  <th className="w-25">Sl No</th>
                  <th>Counsil of Advisor</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "2rem" }}>
                <tr>
                  <td className="text-center align-middle">1</td>
                  <td>
                    President <br />
                    Shri Shri Vishwesh Teertha Swamiji Of Pejawar Mutt,Udupi
                  </td>
                </tr>

                <tr>
                  <td className="text-center align-middle">2</td>
                  <td>
                    {" "}
                    Working President <br />
                    Shri Shrikanth G.Kemtur
                  </td>
                </tr>

                <tr>
                  <td className="text-center align-middle">3</td>
                  <td colSpan="2">
                    Honorary Secretary
                    <br />
                    Shri .G.R.Walvekar
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <Footer />
      </Layout>
    </div>
  )
}

export default Organization
