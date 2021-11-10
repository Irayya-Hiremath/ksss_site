import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styled from 'styled-components'
// import { FaFacebook, FaTwitter,FaLinkedin, FaYoutube,FaGreaterThan } from 'react-icons/fa';
import { Icon } from '@iconify/react';


{/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"> */}

{/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap" rel="stylesheet"></link> */}

const A = styled.a`
    text-decoration: none;
    color: #BCB4B4;
    // font-family: "RobotoMono Regular";
    &:hover {
        color: #fb9d4a;
      }

`
const H3 = styled.h3`
    // font-family: 'Roboto Mono', monospace;
    color: #E7EFEF;
    text-decoration: underline;
`
const FooterDesign = styled.footer`
    background-color: black;
    // font-family: 'Roboto Mono', monospace;
    color: #BCB4B4;
    font-size: 14px;
`
const Span = styled.span`
    color: #fb9d4a;
    
`




function Footer() {
    return (
        <div className="main-footer mt-5 text-light pt-4" style={{background:"#151515"}}>
            <div className="container" >
                <div className="row">

                    <div className="col-md-5 col-sm-6" style={{}}>
                        <H3>Karnataka Shikshana Seva Samiti</H3>
                        <div className="row">
                            <p className="col-md-10 col-sm-6 " style={{fontFamily: "'Roboto Mono', monospace",color:"#BCB4B4"}} >
                            P U Science and Commerce College <br/>
                            Budarsingi - 580 028 <br/>
                            TQ: Hubli, Karnataka(India) <br/><br/>
                            Phone No: +91-99450 24923 <br/>
                            Principal No: +91-9945532549 <br/>
                            Email-Id: kssscollege@gmail.com 
                            </p>
                        </div>
                    </div>

                    {/* column 1 */}
                    <div className="col-md-2 col-sm-6 " style={{}}>
                        <H3 className="ps-4">Pages</H3>
                        <ul className="list-unstyled ">
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Home</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>About</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>courses</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Events</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Campus</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Photo Gallery</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Contact</A></li>
                           
                        </ul>
                    </div>

                    {/* column 2 */}
                    <div className="col-md-3 col-sm-6 " style={{}}>
                        <H3 className="ps-4">Useful Links</H3>
                        <ul className="list-unstyled">
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Salient Features</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Hostel</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Photo Gallery</A></li>
                           <li><A href=""><Span><Icon icon="bx:bx-chevron-right" /></Span>Notice</A></li>

                        </ul>
                    </div>

                    {/* column 3 */}
                    <div className="col-md-2 col-sm-6" style={{}}>
                        <H3 className="ps-4">Social Links</H3>
                        <ul className="list-unstyled">
                            <li><A href=""><Icon icon="akar-icons:facebook-fill" /> Facebook</A></li>
                            <li><A href=""><Icon icon="akar-icons:twitter-fill" /> Twitter</A></li>
                            <li><A href=""><Icon icon="brandico:linkedin-rect" /> Linked in</A></li>
                            <li><A href=""><Icon icon="bi:youtube" /> Youtube</A></li>
                            <li><A href="https://www.google.com/maps/dir/15.2907641,75.1392605/KSSS+P.U+Science+and+Commerce+College+GOVARDHANA+CAMPUS+NEAR+KUNDAGOL+CROSS+BUDARSINGI+Hubli,+Karnataka+580028/@15.2907641,75.139239,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bb8d7e587e64b55:0x69df05dcd9e18b5c!2m2!1d75.139239!2d15.2907641" target="_blank"><Icon icon="clarity:map-marker-solid" /> Location</A></li>


                        </ul>
                    </div>
                    
                </div>

 
            </div>

            {/* Footer bottom */}
            <FooterDesign className="row mt-3 my-0" >
                <div className="text-center py-1" > 
                     Copyright &copy;{new Date().getFullYear()} Sathvik Softech Pvt.Ltd.All Rights Reserved <br/>
                     Designed by unknown
                </div>
            </FooterDesign>
            
           
        </div>
    )
}

export default Footer
