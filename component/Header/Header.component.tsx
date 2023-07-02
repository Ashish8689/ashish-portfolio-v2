import React, { FC } from 'react'
import Facebook from '../../svg/Facebook'
import Instagram from '../../svg/Instagram'
import WhatsApp from '../../svg/WhatsApp'
import LinkedIn from '../../svg/LinkedIn'
import GitHub from '../../svg/github.svg'
import CustomImage from '../CustomImage/CustomImage.component'

const Header: FC = () => {
    return (
        <div className="header" id="home">
            <div className="container">
                <div className="section-flex">
                    <div className="section-left">
                        <div className="content">
                            <h1 className="titlehead">
                                {'<'}Hii{'>'}{' '}
                            </h1>
                            <h1 className="title">
                                This is <span>Ashish </span>
                            </h1>
                            <h2 className="subtitle">Software Engineer</h2>
                            <p className="para">
                                {' '}
                                <span>{'<p>'}</span> I am an experienced
                                developer based in Mumbai who focus on writing
                                clean,elegant and efficient code. I&apos;m
                                available for Freelance work and projects.{' '}
                                <span> {'<p> '}</span>{' '}
                            </p>

                            <div className="content-social header-social">
                                <div className="social-flex">
                                    <a
                                        href="https://github.com/Ashish8689"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <GitHub className="i" />
                                    </a>

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
                                        href="https://wa.me/+918689868867"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <WhatsApp className="i" />
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/ashish-gupta8689"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <LinkedIn className="i" />
                                    </a>
                                </div>
                                {/* social flex end */}
                            </div>

                            <div className="button-container">
                                <a
                                    className="button active"
                                    href="tel: 8689868867"
                                >
                                    Hire Me
                                </a>
                                <a
                                    download
                                    className="button"
                                    href={
                                        process.env.PUBLIC_URL +
                                        '/image/CV_ASHISH_GUPTA.pdf'
                                    }
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <div className="img-container">
                            <CustomImage priority src="/image/a1.png" />
                        </div>
                    </div>
                </div>

                <div className="header-social">
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
                            href="https://wa.me/+918689868867"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <WhatsApp className="i" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ashish-gupta8689"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <LinkedIn className="i" />
                        </a>
                    </div>
                    {/* social flex end */}
                </div>

                <div className="scroll-down-container">
                    <h6>Scroll down</h6>
                </div>
            </div>

            {/* *************  Animation overlay   ********************** */}

            <div className="box-fill" />
            <div className="box-mini-bar" />

            <div className="wave">
                <CustomImage src="/image/icons/wave.png" />
            </div>

            <div className="wave wave2">
                <CustomImage src="/image/icons/wave.png" />
            </div>

            <div className="triangle">
                <CustomImage src="/image/icons/triangle.png" />
            </div>
        </div>
    )
}

export default Header
