import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="footer-grid">
                <div className="footer-item">
                    <h4><strong><a href="https://mcdonalds.com.pk/our-company/">Our Company</a></strong></h4>
                    <ul>
                        <li><a href="#community"><a href="https://mcdonalds.com.pk/our-community/">Our Community</a></a></li>
                        <li><a href="#journey">Our Journey</a></li>
                        <li><a href="#history">Our History</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4><strong><a href="https://mcdonalds.com.pk/careers/">Careers</a></strong></h4>
                    <ul>
                        <li><a href="https://mcdonalds.com.pk/career/category/corporate/">Corporate</a></li>
                        <li><a href="#restaurant">Restaurant</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4><strong><a href="https://mcdonalds.com.pk/contact-us/">Contact us</a> </strong> </h4>
                    <ul>
                        <li><a href="#suggestion"><a href="https://mcdonalds.com.pk/suggestion-form/">Suggestion</a></a></li>
                        <li><a href="#complaint">Complaint</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4><strong><a href="https://mcdonalds.com.pk/newsroom/">NewsRoom</a></strong></h4>
                    <ul>
                        <li><a href="#local">Local</a></li>
                    </ul>

                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/McDonaldsPK"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.linkedin.com/company/mcdonaldspakistan/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="#tiktok"><FontAwesomeIcon icon={faTiktok} /></a>
                    </div>
                </div>

                <hr />
                <hr />
                <hr />
                <hr />
                <div class="spacing">Contacts</div>
                <div class="spacing">Privacy Policy</div>
                <div class="spacing">Terms & Conditions</div>
                <div className='footer-copyright'><img src="./images/download.png" alt="" width="8%" /><span className="copyright">&copy;2024 Mc Donald's. All Rights Reserved.</span></div>

            </footer>
        </div>
    )
}
export default Footer;