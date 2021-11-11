import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import swamiji from "../images/swamiji.jpeg"
import{Card} from 'react-bootstrap';



function Image() {
    return (
        <div>
         <div className="row container m-auto">
                     <Card.Header
                            className=" text-center my-5 w-50 px-md-5 px-0"
                            as="h3"
                            style={{
                                backgroundColor: "#0F93F8",
                                color: "white",
                                fontSize: "3rem",
                            }}
                            >
                            THE DRIVING FORCE
                      </Card.Header>
                     <div class="col-12">

                            <img src={swamiji} className="float-left" style={{width:'20%', marginRight :"10px", float:'left'}}/>
                        
                                <p className="float-left"style={{fontSize:'2.5rem'}}>
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
                                </p>
                     </div>
            </div>
         
        </div>
    )
}

export default Image
