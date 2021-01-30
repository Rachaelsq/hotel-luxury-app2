import React from 'react'
import mainlogo from "../images/mainlogo.png";
import "../styling/main.css"


export default function Header() {
    return (
            <div class="container-fluid" id="headerId">
                <h1 class="display-4">Hotel Luxury </h1>
                <img id="mainLogoHeader" src={mainlogo} />

            </div>
            )
}
