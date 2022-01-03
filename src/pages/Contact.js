import React from 'react'
import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from '../components/Image'
import Footer from '../components/Footer'
import Content from '../components/Content';
import Textcontent from '../components/Data'



function Contact() {
    console.log(Textcontent)
    return (
        <div className='overflow-hidden'>
             <Layout>

            <Content title={Textcontent[0].Title} titleContent='testing'/>
            <div className="row">
                <div className="col">
            <Content title="jaaai" titleContent="testig props"/>

                </div>
                <div className="col">
            <Content title="jaaai" titleContent="testig props"/>

                </div>

            </div>
                 <Footer/>
                
             </Layout>
        </div>
    )
}

export default Contact
