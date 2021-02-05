import React from 'react'
import HomeFeatureCards from "./HomeFeatureCards"

export default function HomeFeatureCardsProps(props) {
    return (
        <section>
            <div class="card featCard">
            <img class="card-img-top " src={props.img} alt="Card image cap" />
                <div class="card-body">                   
                    <h5 class="card-title">{props.text}</h5>
                </div>            
            </div>
        </section>
    )
}
