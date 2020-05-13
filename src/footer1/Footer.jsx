import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
                    <div className="footer-info">
                        <ul className="footer-info__column">
                            <li>For passengers</li>
                            <li>Schedule</li>
                            <li>Airport information</li>
                        </ul>
                        <ul className="footer-info__column">
                            <li>Main</li>
                            <li>News</li>
                            <li>Search flights</li>
                        </ul>
                        <ul className="footer-info__column">
                            <li>Contacts</li>
                            <li>Details</li>
                            <li>Customer support</li>
                        </ul>
                    </div>
                    <div className="footer__copyright">
                        <div>Made by <a href="https://www.linkedin.com/in/kostyantyn-nagornyi-322b74a0/">Nagornyy Kostyantyn</a> with using of React & Redux </div>
                    </div>
        </div>
    )
}

export default Footer;