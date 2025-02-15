import ZMHLogo from "../ZMH Images/ZMH-collections Logo.jpeg";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoChevronUp, IoLocation, IoLogoApple } from "react-icons/io5"
import { useEffect, useState } from "react";

function Footer() {
    const [showButton, setShowButton] = useState(false);
    
    useEffect(() => {
        // Event listener to check scroll position
        const handleScroll = () => {
            const isTop = window.scrollY < 200; // Adjust the threshold as needed
            setShowButton(!isTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer>
            <div className="footer-top">
                <div>
                    <p>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</p>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-left">
                    <img src={ZMHLogo} alt="ZMH Logo" />
                    <p>Everything Women...</p>
                    <div>
                        <h6>FIND US ON</h6>
                        <div className="socials-link">
                            <FaFacebookF className="Fa" />
                            <FaInstagram className="Fa" />
                            {/* <FaTiktok className="Fa" /> */}
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <h3>Shop</h3>
                        <ul>
                            <li>Shoes</li>
                            <li>Bags</li>
                            <li>Bridal wears</li>
                            <li>Materials</li>
                            <li>Hollandtex</li>
                        </ul>
                    </div>
                    <div>
                        <h3>About</h3>
                        <ul>
                            <li>Our Story</li>
                            <li>Our Materials</li>
                            <li>Our Value</li>
                            <li>Sustainability</li>
                            <li>Reliability</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Need Help?</h3>
                        <ul>
                            <li>FAQs</li>
                            <li>Shipping & Returns</li>
                            <li>Shoe Care</li>
                            <li>Bag Care</li>
                            <li>Size Chart</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Customer Care</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Payment Method</li>
                            <li>How To Order</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div>
                    <p>Copyright © 2025 ZMH Collection</p>
                    <p>Powered by ZMH Collection</p>
                </div>
            </div>
            <div className="scroll-to-top" onClick={scrollToTop} style={{ display: showButton ? "block" : "none" }}>
                <IoChevronUp />
            </div>
        </footer>
    )
}

export default Footer;