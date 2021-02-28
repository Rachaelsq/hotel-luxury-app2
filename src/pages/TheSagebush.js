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

export default function TheSagebush() {
  return (
      <div class="pageMargins " id="">

        <div class="row">
          <div class="col-lg ">
            <h1 class="viewRmTitle">The Sagebush</h1>
            <img src="https://images.unsplash.com/photo-1574197634840-1ab768e4c8f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" class="mainRmImg" alt="Responsive image" />
          
          </div>
          
          <div class="col-lg">
            <h2 class="amenitiesContainer">Included Amenities</h2>
            <IncludedAmenities />
          </div>
          </div>


                    <h3 class="viewMore align-middle">More photos of The Sagebush</h3>

          <div class="row">
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1578683054701-224642011d32?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg" alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1596625820723-f0f481ff80be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1600199712217-812672421f0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
          </div>
        </div>
    );
}
