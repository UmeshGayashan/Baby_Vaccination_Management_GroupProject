import React from "react";
import Footer from "../components/Footer";
import "./pageCss/contactus.css";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,

    FaFacebookF,

    FaTwitter,

    FaYoutube,
    FaDribbble,
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import Navbar from "../components/Navbar";



const Contact = () => {
    return (
<div>
        <div>
            <Navbar />
            <section className="contact section">

                <h2 className="section__title">
                    Get In <span>Touch</span>
                </h2>

                <div className="contact__container container grid">
                    <div className="contact__data">
                        <h3 className="contact__title">Don't  be shy !</h3>

                        <p className="contact__descripton">
                            Feel free to get in touch with us. We're here to assist you in any way we can. Please leave your name, contact details, and a brief message, and one of our healthcare professionals will get back to you as soon as possible.
                        </p>

                        <div className="contact__info">
                            <div className="info__item">
                                <FaEnvelopeOpen className="info__icon" />
                                <div >
                                    <span className="info__title">Mail  me</span>
                                    <h4 className="info__desc">thisarumitd@gmail.com</h4>
                                </div>
                            </div>
                            <div className="info__item">
                                <FaPhoneSquareAlt className="info__icon" />
                                <div >
                                    <span className="info__title">Call me</span>
                                    <h4 className="info__desc">+94767779548</h4>
                                </div>
                            </div>
                        </div>
                        <div className="contact__socials">
                            <a href="http://facebook.com" className="contact__social-link">
                                <FaFacebookF />
                            </a>
                            <a href="http://twitter.com" className="contact__social-link">
                                <FaTwitter />
                            </a>
                            <a href="http://youtube.com" className="contact__social-link">
                                <FaYoutube />
                            </a>
                            <a href="http://dribble.com" className="contact__social-link">
                                <FaDribbble />
                            </a>
                        </div>
                    </div>

                    <form action="https://api.web3forms.com/submit" method="POST" className="contact__form">
                        <div className="form__input-group">
                            <input type="hidden" name="access_key" value="c2ea2a58-dc3f-4fb8-85ac-c24568fa722d" />
                            <div className="form__input-div">
                                <input type="text" placeholder="Your Name" name="name" className="form__control" />
                            </div>
                            <div className="form__input-div">
                                <input type="email" placeholder="Your email" name="email" className="form__control" />
                            </div>
                            <div className="form__input-div">
                                <input type="text" placeholder="Your Subject" name="subject" className="form__control" />
                            </div>
                        </div>

                        <div className="form__input-div">
                            <textarea
                                name="massage"
                                placeholder="Your Message"
                                className="form__control textarea"
                                required
                            >

                            </textarea>
                        </div>


                        <button className="button" style={{ width: "300px" }}>
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend />
                            </span>
                        </button>

                    </form>
                </div>
            </section>
        </div>
        <div style ={{marginTop:'400px'}}><Footer/></div>
        </div>



    );
};

export default Contact;
