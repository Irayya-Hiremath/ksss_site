import React from 'react'
import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from '../components/contact'
import Footer from '../components/Footer'



function Contact() {
    return (
        <div className='overflow-hidden'>
             <Layout>

                 <Contacts/>

                 <Footer/>
                
             </Layout>
        </div>
    )
}

export default Contact
