import React from 'react';
import Layout from '../components/Layout'
import Campuss from '../components/Campus';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer'




function Campus() {
    return (
        <div className='border border-danger overflow-hidden'>
            <Layout className='w-100'>
                <Campuss/>

                <Footer/>
            </Layout>
        </div>
    )
}

export default Campus
