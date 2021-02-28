import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IncludedAmenities from "../components/IncludedAmenities";
//pages
//components
/* 
============
END IMPORTS
===========
*/

export default function TheWillow() {
  return (
      <div class="pageMargins " id="">

        <div class="row">
          <div class="col-lg ">
            <h1 class="viewRmTitle">The Willow</h1>
            <img src="https://images.unsplash.com/photo-1571508601936-6ca847b47ae4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80" class="mainRmImg" alt="Responsive image" />
          
          </div>
          
          <div class="col-lg">
            <h2 class="amenitiesContainer">Included Amenities</h2>
            <IncludedAmenities />
          </div>
          </div>


                    <h3 class="viewMore align-middle">More photos of The Willow</h3>

          <div class="row">
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGludGVyaW9yfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="img-fluid RmImg" alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1533219509910-81d798e4ee00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
          </div>
        </div>
    );
}
