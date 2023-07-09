import React from 'react'
import Facebook from '../../svg/Facebook'
import Instagram from '../../svg/Instagram'
import WhatsApp from '../../svg/WhatsApp'
import LinkedIn from '../../svg/LinkedIn'
import GitHub from '../../svg/github.svg'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-start">
                <div className="footer-middle-container">
                    <h1>Get in touch with me</h1>
                    <div className="footer-social">
                        <div className="social-flex">
                            <a
                                href="https://www.facebook.com/profile.php?id=100004838256907"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Facebook className="i" />
                            </a>

                            <a
                                href="https://www.instagram.com/ashishgupta9394/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <Instagram className="i" />
                            </a>

                            <a
                                href="https://wa.me/+91 8689868867"
                                rel="noreferrer"
                            >
                                <WhatsApp className="i" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ashishgupta8689/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <LinkedIn className="i" />
                            </a>

                            <a
                                href="https://github.com/Ashish8689"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <GitHub className="i" />
                            </a>
                        </div>
                        {/* social flex end */}
                    </div>{' '}
                    {/* footer-socialEnd */}
                </div>{' '}
                {/* footer-middle-container end */}
            </div>{' '}
            {/* footer start end */}
            <div className="footer-end">
                <p>
                    Copyright {new Date().getFullYear()} © All Rights Reserved.
                    Made by
                    <a
                        href="https://www.instagram.com/ashishgupta9394"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {' '}
                        Ashish Gupta
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer
