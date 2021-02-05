import React from "react"
//images
import mainlogo from "../images/mainlogo.png";
import HomeFeatureCardsProps from "./HomeFeatureCardsProps"

const HomeFeatureCards = (props) => {
    const homefeaturecards = [
        {
            text:"We offer the best dining experience that Nashville has to offer. choose from 15 different types of cuisine.",
            img:  "https://i.imgur.com/pl7V6tv.png",
        },
        {
            text:"We have an in-house, award-winning, 5 star salon and spa. Get your hair done, your nails done, or get the best massage you have ever had.",
            img:  "https://i.imgur.com/pl7V6tv.png",
        },
        {
            text:"Transportation is a breeze when you stay at Hotel Luxury. We offer complementary taxi rides to any address of your choice within a 30 mile radius.",
            img:  "https://i.imgur.com/pl7V6tv.png",
        },
        {
            text:"Relax while we take care of everything. Our award winning service will not disappoint. ",
            img:  "https://i.imgur.com/pl7V6tv.png",
        }
    ]


return (
    <section>
        <React.Fragment>
                <div class="container" id="featureContainer">
                <div class="row" id="parent">
                    {homefeaturecards.map((homefeaturecardsprops) => (
                                    

                        
                            
                            <HomeFeatureCardsProps class="col-sm" id="child"               
                            text={homefeaturecardsprops.text}
                            img={homefeaturecardsprops.img}
                            />


                    

                    ))}
            </div>
            </div>
        </React.Fragment>
    </section>
)
}

export default HomeFeatureCards;
/* 
<div class="card"> 
                        <div class="card-body" id="cardFlex"></div> */