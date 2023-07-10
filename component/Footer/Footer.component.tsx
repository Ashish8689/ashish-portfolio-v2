import React from 'react'
import { SOCIAL_LINKS } from '@/constant/links.constant'

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-start">
                <div className="footer-middle-container">
                    <h1>Get in touch with me</h1>
                    <div className="footer-social">
                        <div className="social-flex">
                            {SOCIAL_LINKS.map(({ icon, link }) => {
                                const Icon = icon

                                return (
                                    <a
                                        href={link}
                                        key={link}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <Icon className="i" />
                                    </a>
                                )
                            })}
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
                        Ashish Gupta
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer
