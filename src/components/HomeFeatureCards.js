import React from "react"
//images
import mainlogo from "../images/mainlogo.png";
import HomeFeatureCardsProps from "./HomeFeatureCardsProps"

const HomeFeatureCards = (props) => {
    const homefeaturecards = [
        {
            text:"text for card1",
            image:  "src={mainlogo}",
        },
        {
            text:"text for card2",
            image:  "src={mainlogo}",
        }
    ]


return (
    <div class="card" id="homeFeatureCards">
            <img class="card-img-top" src="..." alt="Card image cap" />
            {homefeaturecards.map((homefeaturecardsprops) => (

            <div class="card-body">
                <h5 class="card-title">{homefeaturecards.text}</h5>
                <HomeFeatureCardsProps class="card-title"
                text={homefeaturecardsprops.text}
                image={homefeaturecardsprops.image}
                />
            </div>
            ))}
    </div>
)
}

export default HomeFeatureCards;