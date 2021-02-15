import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
//components


/* 
============
END IMPORTS
===========
*/




export default function TheWillow() {
    return (
        <div className="App">          
            <div class="container-fluid" id="homeImgRow">
                    <div class="row">

                        <div class="col-lg biggerColumn">
                            <h1 class="viewRmTitle">The Willow</h1>
                            <img src="https://images.unsplash.com/photo-1558443336-50c83478fc84?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" class="img-fluid viewRmImg" alt="Responsive image" />

                        </div>

                        <div class="col-md-sm ">
                            <h2 class="amenitiesColumn">Included Amenities</h2>
                            
                        </div>
                    </div>




                    <h3 class="viewMore align-middle">More photos of The Willow</h3>

                    <div class="row">
                        <div class="col-lg ">
                            <img src="https://images.unsplash.com/photo-1561400328-93b30737bbda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" class="img-fluid viewRmImg" alt="Responsive image" />
                        </div>
                        <div class="col-lg ">
                            <img src="https://images.unsplash.com/photo-1566632243991-e7a8871c1581?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=613&q=80" class="img-fluid viewRmImg" alt="Responsive image" />
                        </div>
                        <div class="col-lg ">
                            <img src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" class="img-fluid viewRmImg " alt="Responsive image" />
                        </div>
                      
                    </div>
</div>

        </div>
    );
}
