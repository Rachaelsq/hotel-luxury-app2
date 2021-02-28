import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//images
//pages
//components
/* 
============
END IMPORTS
===========
*/

export default function IncludedAmenities() {
  return (
    <>
    <section  class="container-fluid" id="positioningId">
      <div class="col-md-sm px-0 amenitiesColumns" id="amenitiesColumnId" >
          <img class="card-img-top includedlAmenImg" src="https://i.imgur.com/vDrXMhr.png" alt="gym" />
          <img class="card-img-top includedlAmenImg" src="https://i.imgur.com/nUKUp3f.png" alt="spa" />
          <img class="card-img-top includedlAmenImg" src="https://i.imgur.com/bgneTnb.png" alt="taxi" />
          <img class="card-img-top includedlAmenImg" src="https://i.imgur.com/lo9BzPz.png" alt="wifi" />
          <div class="col-md-sm px-0 amenitiesColumns" id="amenitiesColumnId" >
            <ul class="justify-content-center"> 
              <li class="amenitiesLi">California king size bed with kitchenette</li> 
              <li class="amenitiesLi">24 hour gym access</li> 
              <li class="amenitiesLi">Unlimited massages and facials</li> 
              <li class="amenitiesLi">Free rides within 30 miles of the hotel</li> 
              <li class="amenitiesLi">Free high-speed internet</li> 
              <li class="amenitiesLi">24 hour room service</li> 
            </ul>
          </div>
      </div>
    </section>
    </>
  );
}




/* 
export default function IncludedAmenities() {
  return (
    <>
    <section  class="" id="positioningId">
      <div class="row px-0">
      <div class="col-md-sm px-0 amenitiesColumns" >
          <img class="card-img-top includedlAmenImg " src="https://i.imgur.com/vDrXMhr.png" alt="Card image cap" />
      </div>
      
      <div class="col-6 px-0 amenitiesColumns" id="">
          <img class="card-img-top includedlAmenImg " src="https://i.imgur.com/nUKUp3f.png" alt="Card image cap" />
      </div>

      <div class="col-6 px-0 amenitiesColumns" id="">
          <img class="card-img-top includedlAmenImg " src="https://i.imgur.com/bgneTnb.png" alt="Card image cap" />
      </div>

      <div class="col-6 px-0 amenitiesColumns" id="">
          <img class="card-img-top includedlAmenImg " src="https://i.imgur.com/lo9BzPz.png" alt="Card image cap" />
      </div>
      </div>

    </section>
    </>
  );
}
 */