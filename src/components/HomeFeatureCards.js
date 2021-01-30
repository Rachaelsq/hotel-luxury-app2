import React from "react"
//images
import mainlogo from "../images/mainlogo.png";
import HomeFeatureCardsProps from "./HomeFeatureCardsProps"

const HomeFeatureCards = (props) => {
    const homefeaturecards = [
        {
            text:"We offer the best dining experience that Nashville has to offer. choose from 15 different types of cuisine.",
            image:  "src={mainlogo}",
        },
        {
            text:"We have an in-house, award-winning, 5 star salon and spa. Get your hair done, your nails done, or get the best massage you have ever had.",
            image:  "src={mainlogo}",
        },
        {
            text:"Transportation is a breeze when you stay at Hotel Luxury. We offer complementary taxi rides to any address of your choice within a 30 mile radius.",
            image:  "src={mainlogo}",
        },
        {
            text:"Relax while we take care of everything. Our award winning service will not disappoint. ",
            image:  "src={mainlogo}",
        }
    ]


return (
    <section>
    <div class="card">
            {homefeaturecards.map((homefeaturecardsprops) => (
            <div class="card-body">
                <HomeFeatureCardsProps
                
                text={homefeaturecardsprops.text}
                image={homefeaturecardsprops.image}
                />
            </div>
            ))}
    </div>
    </section>
)
}

export default HomeFeatureCards;