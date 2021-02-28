import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//pages
//components
import ReservationModal from "../components/ReservationModal";

/* 
============
END IMPORTS
===========
*/





export default function MakeAReservationPage() {
  return (
    <div class=" container-fluid reserveContainer">          
      <div class="" id="">  
        <div class=" jumbotron container-fluid BookRmJumbo" id="">
          <div class="col-lg">
            <img src="https://images.unsplash.com/photo-1471623600634-4d04cfc56a27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid bookRmImg " alt="Responsive image" />
          </div>
          <div class="col-lg">
            <h5 class="card-title">The Cedar</h5>
              <p class="card-text"> King bed. Full amenities access. Balcony view.</p>
              <a href="/thecedar" class="card-link">View the Cedar</a>
              <button type="button" class="btn btn-info " id="" data-toggle="modal" data-target="#reserveModal">Reserve now</button>          
          <ReservationModal />
          </div>
        </div>

        <div class="" id="">  
          <div class=" jumbotron container-fluid BookRmJumbo" id="">
            <div class="col-lg">
              <img src="https://images.unsplash.com/photo-1603198132334-5478a1ec5bc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid bookRmImg " alt="Responsive image" />
            </div>
            <div class="col-lg">
              <h5 class="card-title">The Willow</h5>
              <p class="card-text"> King bed. Full amenities access. Balcony view.</p>
              <a href="/thewillow" class="card-link">View the Willow</a>
              <button type="button" class="btn btn-info " id="">Reserve now</button>
            </div>
          </div>
        </div>

        <div class="" id="">  
          <div class=" jumbotron container-fluid BookRmJumbo" id="">
            <div class="col-lg">
              <img src="https://images.unsplash.com/photo-1574197634772-f0de0d41a02e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid bookRmImg " alt="Responsive image" />
            </div>
            <div class="col-lg">
              <h5 class="card-title">The Sagebush</h5>
              <p class="card-text"> King bed. Full amenities access. Balcony view.</p>
              <a href="/thesagebush" class="card-link">View the Sagebush</a>
              <button type="button" class="btn btn-info " id="">Reserve now</button>
            </div>
          </div>
        </div>

        <div class="" id="">  
          <div class=" jumbotron container-fluid BookRmJumbo" id="">
            <div class="col-lg">
              <img src="https://images.unsplash.com/photo-1594900240017-d99eeb660287?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid bookRmImg " alt="Responsive image" />
            </div>
            <div class="col-lg">
              <h5 class="card-title">The Aloe</h5>
              <p class="card-text"> King bed. Full amenities access. Balcony view.</p>
              <a href="/thealoe" class="card-link">view the Aloe</a>
              <button type="button" class="btn btn-info " id="">Reserve now</button>
            </div>
          </div>
        </div>      
        

    </div>
  </div>

    );
}








