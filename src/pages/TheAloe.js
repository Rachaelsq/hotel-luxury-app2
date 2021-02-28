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

export default function TheAloe() {
  return (
      <div class="pageMargins " id="">

        <div class="row">
          <div class="col-lg ">
            <h1 class="viewRmTitle">The Aloe</h1>
            <img src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" class="mainRmImg" alt="Responsive image" />
          
          </div>
          
          <div class="col-lg">
            <h2 class="amenitiesContainer">Included Amenities</h2>
            <IncludedAmenities />
          </div>
          </div>


                    <h3 class="viewMore align-middle">More photos of The Aloe</h3>

          <div class="row">
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1551516595-a3508edd74dc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg" alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1586176418669-d8f349f92f63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1551516595-09cb9fcf8db5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
          </div>
        </div>
    );
}
