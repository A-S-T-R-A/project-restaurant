import React, { useEffect } from "react"
import { LazyImage } from "../../common/LazyImage/LazyImage"
import { useOnScreen } from "../../common/useOnScreen/useOnScreen"
import { images } from "../../constants"
import "./AboutUs.css"

function AboutUs() {
    const { setRef, visible } = useOnScreen({ threshold: 0 }, false)

    useEffect(() => {
        if (visible) {
            import("./AsyncApp.css")
        }
    }, [visible])

    return (
        <div
            className="app__aboutus container__mobile flex__center section__padding"
            id="about"
            ref={setRef}
        >
            <div className="bg__mobile" />
            <div className="app__aboutus-overlay flex__center">
                <img src={images.G} alt="g letter" />
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant">About Us</h1>
                    <img
                        src={images.spoon}
                        alt="about_spoon"
                        className="spoon__img"
                    />
                    <p className="p__opensans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <button className="custom__button">Know More</button>
                </div>
                <div className="app__aboutus-content_knife  flex__center">
                    <LazyImage src={images.knife} alt="about_knife" />
                </div>
                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant">Our History</h1>
                    <img
                        src={images.spoon}
                        alt="about_spoon"
                        className="spoon__img"
                    />
                    <p className="p__opensans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <button className="custom__button">Know More</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
