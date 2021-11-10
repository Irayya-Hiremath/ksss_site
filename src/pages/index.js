import * as React from "react"
import swamiji from "../images/swamiji.jpeg"
import Content from "../components/Content"
import Layout from "../components/Layout"
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Card} from 'react-bootstrap';
// import Object from '../images/object1.jpeg'



function IndexPage() {
   
  return(
    <div className='overflow-hidden border-0' >     
     {/* style={{backgroundColor:'#EBE5E9'}} */}
    <Layout >
        <Slider/>
        <div className='container-fluid'>
          <Content title='WELCOME TO K.S.S.S P.U COLLEGE'titleContent='K.S.S.S.P.U. College draws its inspiration from the person and life
                          and teaching of Sri Sri Vishwesh Teerth Swamiji,Universal Master and
                          Model of education. It is situated about 5kms from Hubli on the
                          Pune-Bangalore Highway(NH-4) at Budarshinghi. It is one of the
                          finest centers of learning.The college is recognized by
                          Pre-University Education Board Karnataka.The college offers the
                          students all the advantages of a modren education system without
                          distraction of city life.The campus is located in the pleasant and
                          cool climatic conditions in the outskirts of the town in harmony
                          with serene surrounding of green.This college is a boon to all those
                          who are interested to give value based education to their
                          children.The learner centered education with the concept of all
                          round development of the individual student is the foremost
                          philosophy of this college.The campus is optly named as "Govardan Campus".'/> 

                <div className='row container-fluid m-auto justify-content-center ' >
                 
                 <div className="col-2  sm-12" >
                   <Card>
                    <Card.Img variant="top" src={swamiji} style={{width:'100%', height:'30%', margin:"auto"}}/> 
                     {/* <img src={swamiji} className='overflow-hidden ' style={{width:"250px" , height:'300px'}} alt="" srcset="" /> */}
                   </Card>
     
                 </div>
                 
                 <div className="col-8 sm-12 " >
                   <Card>
                 <Card.Header className='w-auto text-center' as="h3" style={{backgroundColor:'#0F93F8',color:'white'}}>THE DRIVING FORCE</Card.Header>

                     <Card.Body>

                       <Card.Text className='py-2' style={{fontSize:'1.5rem'}}>
                           We believe that every child is uniquely created with divine
                         energy which requires a suitable medium of expression. It is our
                         duty to channelize this hidden energy to the world at large
                         through right education, right values and right action. KSSS PU
                         College imbibes these ideals for purposeful education across
                         caste, creed and nationality in the true spirit of Sri Swamiji's
                         vision.
                         <br />
                         Shri Pejawar Swamiji is one of the living saints who are accepted as moral and spiritual leader by all section of the society in our country.
                          A lucid orator, a keen debater, a rapt teacher, a profound scholar, an enquiring critic, a farsighted educational organizer, a compassionate spiritual preceptor.
                       </Card.Text>
                     </Card.Body>
                   </Card>
                     {/* <Content title='THE DRIVING FORCE'titleContent="We believe that every child is uniquely created with divine
                     energy which requires a suitable medium of expression. It is our
                     duty to channelize this hidden energy to the world at large
                     through right education, right values and right action. KSSS PU
                     College imbibes these ideals for purposeful education across
                     caste, creed and nationality in the true spirit of Sri Swamiji's
                     vision."/> */}
                  </div>
                  
             </div>


              
              
         </div>
       <Footer/>
    </Layout>
    </div>

  )
}


export default IndexPage
