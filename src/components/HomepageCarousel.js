import { Carousel } from "react-bootstrap";
/* end of imports */

export default function HomepageCarousel() {
    return (
            <div id="homeCarouselContainer">
                <Carousel id="homeCarouselId">
            <Carousel.Item>
                <img
                    id="homeCarouselImg"
                    className=" w-100 img-fluid"
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80"
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
                    className="w-100 img-fluid "
                    src="https://images.unsplash.com/photo-1583522843296-3e19341aecb8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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
                    src="https://images.unsplash.com/photo-1584226714021-7fe9d2c20667?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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
                    src="https://images.unsplash.com/photo-1583522862616-c7c405b9e0ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
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
    