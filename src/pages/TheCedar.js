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

export default function TheCedar() {
  return (
      <div class="pageMargins " id="">

        <div class="row">
          <div class="col-lg ">
            <h1 class="viewRmTitle">The Cedar</h1>
            <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" class="mainRmImg" alt="Responsive image" />
          </div>
          
          <div class="col-lg">
            <h2 class="amenitiesContainer">Included Amenities</h2>
            <IncludedAmenities />
          </div>
          </div>


                    <h3 class="viewMore align-middle">More photos of The Cedar</h3>

          <div class="row">
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1588091945254-e2191fefe7b7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" class="img-fluid RmImg" alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1549416878-30862a3e49e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
            <div class="col-lg ">
              <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid RmImg " alt="Responsive image" />
            </div>
          </div>
        </div>
    );
}
