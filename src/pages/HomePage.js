import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//pages
//components
import HomeFeatureCards from "../components/HomeFeatureCards"
import HomepageCarousel from "../components/HomepageCarousel";

/* 
============
END IMPORTS
===========
*/




export default function HomePage() {
    return (
        <div className="App">
            <HomepageCarousel />  
            <HomeFeatureCards />
            <div class="container" id="homeImgRow">
                    <div class="row">
                        <div class="col-lg homeimg">
                        <img src="https://images.unsplash.com/photo-1528913775512-624d24b27b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="img-fluid" alt="Responsive image" />
                        </div>
                        <div class="col-lg homeimg">
                        <img src="https://images.unsplash.com/photo-1547064663-a07e03f25fca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="img-fluid " alt="Responsive image" />
                        </div>
                        <div class="col-lg homeimg">
                        <img src="https://images.unsplash.com/photo-1584772126711-017fae29eadd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" class="img-fluid " alt="Responsive image" />
                        </div>
                    </div>
</div>

        </div>
    );
}
