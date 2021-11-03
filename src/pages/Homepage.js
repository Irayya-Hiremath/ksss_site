import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "../components/Content"
import Header from "../components/header"
import Navmenu from "../components/navbar"
import Slider from "../components/Slider"
import Footer from '../components/Footer';
import swamiji from "../images/swamiji.jpeg"




function Homepage(){

    return(
        <div>
                {/* <Header/> */}
                {/* <Slider/> */}

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
                    philosophy of this college.The campus is optly named as "Govardan
                    Campus'/> 

                    <div className='row' style={{width:'100%'}}>
                        <div className="col-5">
                            <Content title='Objective'titleContent='We aim to provide quality education with highest academic
                            standards .Our objective is to create an environment that will
                            ensure that our student will develop well rounded personalities
                            and grow into successful human beings and not just remain
                            successful students.'/>
                        </div>
                        
                        <div className="col-5">
                            <Content title='Vision'titleContent='To maintain the higher standard of discipline and imparting right
                            value. To install the spirit of dedication to the young minds to
                            be an asset to the nation. To mould the student/young minds with
                            best education and higher disciplinary Standards to meet the
                            global competency. To be the most efficient acceptable and excel
                            in the field of education'/>
                            </div>
                    </div>

                    <div className='row' style={{width:'100%'}}>
                        <div className="col-3">
                            <img src={swamiji} className='overflow-hidden border border-danger' style={{width:"100%"}} alt="" srcset="" />
                        </div>
                        
                        <div className="col border border-danger">
                            <Content title='THE DRIVING FORCE'titleContent="We believe that every child is uniquely created with divine
                            energy which requires a suitable medium of expression. It is our
                            duty to channelize this hidden energy to the world at large
                            through right education, right values and right action. KSSS PU
                            College imbibes these ideals for purposeful education across
                            caste, creed and nationality in the true spirit of Sri Swamiji's
                            vision."/>
                            </div>
                    </div>

                
               
                        <Footer/>
                    {/* <objectVsion/> */}

  

        </div>
    )
}
export default Homepage