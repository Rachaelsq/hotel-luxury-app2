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
import ViewRoomsPage from "./pages/ViewRoomsPage"
import TheWillow from "./pages/TheWillow"
import TheCedar from "./pages/TheCedar"
import TheSagebush from "./pages/TheSagebush"
import TheAloe from "./pages/TheAloe"

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
                        <Route path="/viewroomspage" exact component={ViewRoomsPage} />
                        <Route path="/thewillow" exact component={TheWillow} />
                        <Route path="/thecedar" exact component={TheCedar} />
                        <Route path="/thesagebush" exact component={TheSagebush} />
                        <Route path="/thealoe" exact component={TheAloe} />
                    </Switch>
                    <Footer />
                </React.Fragment>
                </Router>
        </div>
    )
}

