import { Carousel } from "react-bootstrap";
/* end of imports */

export default function HomepageCarousel() {
    return (
            <div id="homeCarouselContainer" class="container-fluid">
                <Carousel id="homeCarouselId">
            <Carousel.Item>
                <img
                    id="homeCarouselImg"
                    className="w-100 img-fluid"
                    src="https://i.imgur.com/xUUcsSQ.jpg"
                    alt="First slide"
                />
                    <Carousel.Caption>
{/*                         <h3>image caption</h3>
 */}                        <button type="button" class="btn btn-info" id="reserveRoomBtn">Reserve a room</button>

                    </Carousel.Caption>
                    </Carousel.Item>
            <Carousel.Item>
                <img
                    id="homeCarouselImg"
                    className="img-fluid w-100 "
                    src="https://i.imgur.com/O5G2c54.jpg"
                    alt="Third slide"
                />
                    <Carousel.Caption>
{/*                     <h3>image caption</h3>
 */}                    <button type="button" class="btn btn-info" id="reserveRoomBtn">Reserve a room</button>

                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    id="homeCarouselImg"
                    className=" w-100 img-fluid "
                    src="https://i.imgur.com/pMQBFPP.jpg"
                    alt="Third slide"
                />
                    <Carousel.Caption>
{/*                     <h3>image caption</h3>
 */}                    <button type="button" class="btn btn-info" id="reserveRoomBtn">Reserve a room</button>

                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    id="homeCarouselImg"
                    className=" w-100 img-fluid "
                    src="https://i.imgur.com/9MDUl7o.jpg"
                    alt="Third slide"
                />
                    <Carousel.Caption>
{/*                     <h3>image caption</h3>
 */}                    <button type="button" class="btn btn-info" id="reserveRoomBtn">Reserve a room</button>

                    </Carousel.Caption>
            </Carousel.Item>

        
        </Carousel>
            </div>
    );
    }
    