import React from "react"
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"
import { FooterOverlay, Newsletter } from "../../components"
import { images } from "../../constants"

import "./Footer.css"

function Footer() {
    return (
        <div className="app__footer section__padding">
            <FooterOverlay />
            <Newsletter />
            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contact Us</h1>
                    <p className="p__opensans">221B Baker Street, London</p>
                    <p className="p__opensans">+447975777888</p>
                    <p className="p__opensans">+442079476330</p>
                </div>
                <div className="app__footer-links_logo">
                    <img src={images.gericht} alt="footer_logo" />
                    <p className="p__opensans">
                        "The best way to find yourself is to lose yourself in
                        the service of others"
                    </p>
                    <img
                        src={images.spoon}
                        alt="footer__spoon"
                        className="spoon__img"
                        style={{ marginTop: 15 }}
                    />
                    <div className="app__footer-links_icons">
                        <BsFacebook />
                        <BsTwitter />
                        <BsInstagram />
                    </div>
                </div>
                <div className="app__footer-links_work">
                    <h1 className="app__footer-headtext">Working Hours</h1>
                    <p className="p__opensans">Monday - Friday:</p>
                    <p className="p__opensans">08:00 am - 12:00 am </p>
                    <p className="p__opensans">Saturday - Sunday:</p>
                    <p className="p__opensans">08:00 am - 11:00 am </p>
                </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">2023 Astra. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
