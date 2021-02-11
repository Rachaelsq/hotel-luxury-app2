import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
//components


/* 
============
END IMPORTS
===========
*/





export default function AmenitiesPage() {
    return (
        <>
        <h3 id="amenitiesTitle">amenities </h3>
            <div class="container-fluid" id="AmenitiesBigContainer">

                <div class="col-lg container-fluid" id="firstColumn">
                    <div class="row">

                        <div class="col-lg container-fluid ">
                            
                            <div class="row row-no-padding" id="topSideImgId">
                                <h3>column one</h3>
                                <img src="https://images.unsplash.com/photo-1610882290669-102aadebb413?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class=" topSideImg d-flex " alt="Responsive image" />
                            </div>

                                <div class="" id="bottomAmenitiesId">
                                    <img src="https://images.unsplash.com/photo-1567667593973-e5227038363c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class=" bottomImg container-fluid" alt="Responsive image" />
                                    <img src="https://images.unsplash.com/photo-1600599067176-1f47e3b6fe47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=798&q=80" class=" bottomImg container-fluid" alt="Responsive image" />
                                </div>
                        </div>
                        
                        
{/* codewars questions are less reliant on data structures, leetcode questions are more computer science/data structure focused */}



                        
                        <div class="col-lg container-fluid" id="middleColumn">
                        <div class="row row-no-padding">

                            <h3>column two</h3>
                            <img src="https://images.unsplash.com/photo-1588504273983-667893edbe3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class=" d-flex " alt="Responsive image" />
                            <img src="https://images.unsplash.com/photo-1584772126711-017fae29eadd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class=" bottomImg" alt="Responsive image" />

                        </div>
                        </div>



                        <div class="col-lg container-fluid" id="lastColumn">
                            <div class="row row-no-padding">
                                <h3>column three</h3>
                                <img src="https://images.unsplash.com/photo-1567807052979-c991f0635b54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class=" d-flex " alt="Responsive image" />
                            </div>

                                <div class="container-fluid" id="bottomAmenitiesId">
                                <img src="https://images.unsplash.com/photo-1563049235-a7e724c9b4a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80" class=" bottomImg container-fluid" alt="Responsive image" />
                                    <img src="https://images.unsplash.com/photo-1528123887526-0775584e2093?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class=" bottomImg container-fluid" alt="Responsive image" />
                                </div>
                            
                        </div>


                        

                        </div>


                    </div>            

        </div>
        </>
    );
}



/* 



export default function AmenitiesPage() {
    return (
        <>
        <h3 id="amenitiesTitle">amenities </h3>
            <div class="container-fluid" id="AmenitiesBigContainer">

                <div class="col-lg" id="firstColumn">
                    <div class="row">

                        <div class="col-lg ">
                            
                            <div class="row row-no-padding" id="topSideImgId">
                                <h3>column one</h3>
                                <img src="https://images.unsplash.com/photo-1610882290669-102aadebb413?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid topSideImg d-flex w-100" alt="Responsive image" />
                            </div>

                                <div class="" id="bottomAmenitiesId">
                                    <img src="https://images.unsplash.com/photo-1567667593973-e5227038363c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class=" bottomImg container-fluid" alt="Responsive image" />
                                    <img src="https://images.unsplash.com/photo-1600599067176-1f47e3b6fe47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=798&q=80" class=" bottomImg container-fluid" alt="Responsive image" />
                                </div>
                        </div>
                        
                        



                        
                        <div class="col-lg " id="middleColumn">
                        <div class="row row-no-padding">

                            <h3>column two</h3>
                            <img src="https://images.unsplash.com/photo-1588504273983-667893edbe3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid d-flex w-100" alt="Responsive image" />
                            <img src="https://images.unsplash.com/photo-1584772126711-017fae29eadd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="img-fluid bottomImg" alt="Responsive image" />

                        </div>
                        </div>



                        <div class="col-lg" id="lastColumn">
                            <div class="row row-no-padding">
                                <h3>column three</h3>
                                <img src="https://images.unsplash.com/photo-1567807052979-c991f0635b54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid d-flex w-100" alt="Responsive image" />
                            </div>

                                <div class="" id="bottomAmenitiesId">
                                <img src="https://images.unsplash.com/photo-1563049235-a7e724c9b4a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80" class="img-fluid middleBottom" alt="Responsive image" />
                                    <img src="https://images.unsplash.com/photo-1528123887526-0775584e2093?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid bottomImg" alt="Responsive image" />
                                </div>
                            
                        </div>


                        

                        </div>


                    </div>            

        </div>
        </>
    );
}
















 */