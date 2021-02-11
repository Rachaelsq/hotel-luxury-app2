import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from "react-bootstrap";
/* end of imports */

export default function NavbarFunc() {

        
    return (
            <NavWrapper
        className=""
        id="navbarFlexId"
        >
        
        <Link to="/" className="nav-link">
                home
            </Link>
            <Link to="/amenities" className="nav-link">
                amenities
            </Link>
            <Link to="/makeareservation" className="nav-link">
                make a reservation
            </Link>
            <Link to="/viewroomspage" className="nav-link">
                view rooms
            </Link>


        </NavWrapper>
    )
}



//styled component
const NavWrapper = styled.nav`
background: #00B2B8;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
padding  0 0;
padding-right: 15px;
max-height: 60px;

.nav-link {
        color: white !important;
        font-size: 1.6rem;
        transition: all 0.5s ease-in-out;
        padding-left: 30px;
        padding-right: 30px;
        letter-spacing: 2px;
        @media (max-width: 768px) {
            font-size: 1rem;
            padding-left: 8px;
        padding-right: 8px;
        }
    
    &:hover{
        background: #005D6E;
        border-radius: 14px;
        color: white;
    }
    }
`;


/* 
export default function Navbar() {
    return (
            <NavWrapper
        className="navbar navbar-expand-sm navbar-dark"
        id="navbarFlexId"
        >
    
            <Link to="/" className="nav-link">
                home
            </Link>
            <Link to="/amenities" className="nav-link">
                amenities
            </Link>
            <Link to="/makeareservation" className="nav-link">
                make a reservation
            </Link>
            <Link to="/viewrooms" className="nav-link">
                view rooms
            </Link>
        
        </NavWrapper>
    )
}
  */