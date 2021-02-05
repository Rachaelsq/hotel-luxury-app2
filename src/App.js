import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './styling/main.css';

//components
import NavbarFunc from "./components/NavbarFunc"
import Header from "./components/Header"
import Footer from "./components/Footer"
//pages
import HomePage from "./pages/HomePage"
import AmenitiesPage from "./pages/AmenitiesPage"
import MakeAReservationPage from "./pages/MakeAReservationPage"
import ViewRoomsPage from "./pages/HomePage"
import TheWillow from "./pages/TheWillow"

/* 
============
END IMPORTS
===========
*/

export default function App () {
    return (
        <div>
            <Router>
                <React.Fragment>
                    <Header />
                    <NavbarFunc />
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/Amenities" exact component={AmenitiesPage} />
                        <Route path="/makeareservation" exact component={MakeAReservationPage} />
                        <Route path="/viewrooms" exact component={ViewRoomsPage} />
                        <Route path="/thewillow" exact component={TheWillow} />
                    </Switch>
                    <Footer />
                </React.Fragment>
                </Router>
        </div>
    )
}

