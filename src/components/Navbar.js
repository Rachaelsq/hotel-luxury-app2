import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/* end of imports */

export default function Navbar() {
    return (
            <NavWrapper
        className="navbar navbar-expand-sm navbar-dark"
        id="navbarFlexId"
        >
            <Link to="/" className="nav-link">
                home
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
max-height: 50px;

.nav-link {
        color: white !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        transition: all 0.5s ease-in-out;
        border: solid 1px #7e7e7e;
        padding-left: 30px;
        padding-right: 30px;
        letter-spacing: 2px;


    &:hover{
        background: #005D6E;
        border-radius: 14px;
        color: white;
    }
    }
`;
