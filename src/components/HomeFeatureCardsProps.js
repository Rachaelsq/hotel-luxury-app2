import React from 'react'
import HomeFeatureCards from "./HomeFeatureCards"

export default function HomeFeatureCardsProps(props) {
    return (
        <section class="container-fluid d-flex">
            <div class="card" id="homeFeatureCards">
{/*                 <img class="card-img-top"> {props.image} </img >                */}
                    <div class="card-body">                   
                <h5 class="card-title">{props.text}</h5>
                    </div>            
 </div>
        </section>
    )
}
