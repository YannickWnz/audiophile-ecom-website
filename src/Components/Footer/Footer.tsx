import './Footer.scss'
import { Link } from 'react-router-dom'


export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="hr-line"></div>
                <div className="footer-links">
                    <div className="logo-container">
                        <img src="/assets/shared/desktop/logo.svg" alt="" />
                    </div>
                    
                    <div className="navlinks-container">
                        <Link to='/'>HOME</Link>
                        <Link to='/headphones'>HEADPHONES</Link>
                        <Link to='/speakers'>SPEAKERS</Link>
                        <Link to='/earphones'>EARPHONES</Link>
                    </div>
                </div>
                <div className="footer-contents">
                    <div className="footer-about">
                        <p>
                            Audiophile is an all in one sto to fulfill your audio needs. We're a small team of music lovers and sound specialiists who are devoted to helping you get the most out of personal audio. Come and visit our demo facily - we're open 7 days a week.
                        </p>
                    </div>
                    <div className="social-links">
                        <i className="fa-brands fa-square-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright 2023. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}