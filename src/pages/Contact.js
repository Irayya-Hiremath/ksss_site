import React from 'react'
import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from '../components/Image'
import Footer from '../components/Footer'
import Content from '../components/Content';


function Contact() {
    return (
        <div className='overflow-hidden'>
             <Layout>

            <Content title="jaaai" titleContent='testing'/>
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
