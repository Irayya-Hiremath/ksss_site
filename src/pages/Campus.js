import React from 'react';
import Layout from '../components/Layout'
import Campuss from '../components/Campus';
import "bootstrap/dist/css/bootstrap.min.css";



function Campus() {
    return (
        <div className='border border-danger overflow-hidden'>
            <Layout className='w-100'>
                <h1>helllo</h1>
                <Campuss/>

            </Layout>
        </div>
    )
}

export default Campus
