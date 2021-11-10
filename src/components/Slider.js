import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Carousel} from 'react-bootstrap';
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";

function Slider(){
    return(
        <div className='overflow-hidden'>
      
        <Container fluid className=' mt-3'>
  
          {/*********  third row *************/}
        
          <Carousel>
              <Carousel.Item style={{height:'55vh',background:'no-repeat scroll center  scroll',backgroundSize:'cover'}}>
                  <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:'55vh'}}>
                  <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                  />
  
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:'55vh'}}>
                  <img
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide"
                  />
  
              </Carousel.Item>
  
              <Carousel.Item style={{height:'55vh'}}>
                  <img
                  className="d-block w-100"
                  src={image4}
                  alt="Fourt slide"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:'55vh'}}>
                  <img
                  className="d-block w-100"
                  src={image5}
                  alt="Fifth slide"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:'55vh'}}>
                  <img
                  className="d-block w-100"
                  src={image6}
                  alt="Sixth slide"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:'55vh'}}>
                  <img
                  className="d-block w-100"
                  src={image7}
                  alt="Seventh slide"
                  />
                  
              </Carousel.Item>
  
          </Carousel>
  
  
          </Container>
  
      </div>

    )
}
export default Slider