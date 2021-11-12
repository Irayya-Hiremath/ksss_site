import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Carousel} from 'react-bootstrap';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image1.jpg";
// import {Carousel} from '../components/layout.css'

function Slider(){
    return(
        <div className='container-fluid slide-main mt-2 overflow-hidden mb-5'>
      
         <Container fluid className=' conatainer-fluid '>
  
          {/*********  third row *************/}
        
          <Carousel className='slide-carousel'>
              <Carousel.Item style={{height:"50%"}}>
                  <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide" width="300" height="300"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:'50%'}}>
                  <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                  />
  
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:''}}>
                  <img
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide"
                  />
  
              </Carousel.Item>
  
              <Carousel.Item style={{height:''}}>
                  <img
                  className="d-block w-100"
                  src={image4}
                  alt="Fourt slide"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:''}}>
                  <img
                  className="d-block w-100"
                  src={image5}
                  alt="Fifth slide"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:''}}>
                  <img
                  className="d-block w-100"
                  src={image6}
                  alt="Sixth slide"
                  />
                  
              </Carousel.Item>
  
              <Carousel.Item style={{height:''}}>
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