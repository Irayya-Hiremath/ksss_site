import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container,Fluid,Nav,NavDropdown,Navbar} from "react-bootstrap";
import {Container,Row,Col} from 'react-bootstrap';
import swamiji from "../images/swamiji.jpeg"
import Navmenu from "../components/navbar"
import Header from '../components/header'



function Layout({children}) {
    return (
        <layout>
            <Header/>
            <Navmenu/>

            {children}

              


        </layout>

    )
}

export default Layout
