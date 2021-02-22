import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/* end of imports */

export default function Footer() {
  return (
    <FooterWrapper>
    <div className="navbar navbar-expand-sm navbar-dark" id="navbarFlexId">
    <div class="container-fluid px-0 py-4 mx-auto">
    <div class="row justify-content-center mx-auto">
{/*                     LEFT SIDE                             */}      
        <div class="row justify-content-center">
          <div class="row">
            <div class="col-md-6">
              <div class="box">
                <h2>Room Reservations</h2> <a href="#">
                    <h3>615-111-1111</h3>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="box">
                <h2>Sign up for weekly offers</h2> <a href="#">
                </a>

                <form>
                  <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                  </div>
                  <button type="submit" class="btn btn-dark">Submit</button>
                </form>

              </div>
            </div>
{/*                     LINKS                            */} 
<hr></hr>     
            <div class="col-md-7 d-flex justify-content-center mb-3 container-fluid">
              <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#">Home</a> </div>
              <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#">Amenities</a> </div>
              <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#">View Rooms</a> </div>
              <div class="d-inline-flex justify-content-center px-2 px-md-2 px-lg-3 pt-3"> <a href="#">Make a Reservation</a> </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </FooterWrapper>











);
}



/* 
<Link to="/" className="nav-link">
                home
            </Link> */


//styled component

const FooterWrapper = styled.footer`
background: #00B2B8;
}
padding  0 0;
padding-right: 15px;
max-height: 250px;
height: 25%;
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
