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
        <div className="App">          
            <div class="container-fluid" id="homeImgRow">
                    <div class="row">

                        <div class="col-lg ">
                            <h2 class="viewRmTitle">The Cedar</h2>
                            <div id="imgBtnContainer">
                                <a href="www.google.com">
                                    <img src="https://images.unsplash.com/photo-1471623600634-4d04cfc56a27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid viewRmImg" alt="Responsive image" />
                                        <button type="button" class="btn btn-info visitBtn" id="">Visit the cedar</button>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg ">
                            <h2 class="viewRmTitle">The Willow</h2>
                            <div id="imgBtnContainer">
                            <a href="/thewillow">
                                <img src="https://images.unsplash.com/photo-1603198132334-5478a1ec5bc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid viewRmImg" alt="Responsive image" />
                                    <button type="button" class="btn btn-info visitBtn" id="">Visit the Willow</button>
                            </a>
                            </div>
                        </div>

                        <div class="col-lg ">
                            <h2 class="viewRmTitle">The Aloe</h2>
                            <div id="imgBtnContainer">
                            <a href="www.google.com">
                                <img src="https://images.unsplash.com/photo-1594900240017-d99eeb660287?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid viewRmImg" alt="Responsive image" />
                                <button type="button" class="btn btn-info visitBtn" id="">Visit the Aloe</button>
                            </a>
                            </div>
                        </div>
                    </div>





                    <div class="row">
                        <div class="col-lg ">
                        <h2 class="viewRmTitle">The Aspen <h6>(coming soon)</h6></h2>
                            <img src="https://images.unsplash.com/photo-1588743903237-329f9da76dbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid viewRmImg" alt="Responsive image" />
                        </div>
                        <div class="col-lg ">
                        <h2 class="viewRmTitle">The Birch <h6>(coming soon)</h6></h2>
                            <img src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" class="img-fluid viewRmImg" alt="Responsive image" />
                        </div>
                       
                    </div>
</div>

        </div>
    );
}
