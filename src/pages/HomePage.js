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
            <h1>this is homepage</h1>
            <HomeFeatureCards />
        </div>
    );
}
