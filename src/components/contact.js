import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function contact() {
    return (
        <div>
            <div style={{fontFamily: "'Roboto Mono', monospace"}}>
                <div  style={{background:"orange"}}>
                    <h1 className="container">Contact Us</h1>
                </div>

                <div className="container">
                    <p className="container" style={{fontFamily: "'Roboto Mono', monospace",color:"black"}} >
                        P U Science and Commerce College <br/>
                        Budarsingi - 580 028 <br/>
                        TQ: Hubli, Karnataka(India) <br/><br/>
                        Phone No: +91-99450 24923 <br/>
                        Principal No: +91-9945532549 <br/>
                        Email-Id: kssscollege@gmail.com 
                    </p>

                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7697.157039944437!2d75.139239!3d15.290764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x69df05dcd9e18b5c!2sKSSS%20P.U%20Science%20and%20Commerce%20College!5e0!3m2!1sen!2sin!4v1636474620253!5m2!1sen!2sin" width="100%" height="500"  allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    )
}

export default contact
