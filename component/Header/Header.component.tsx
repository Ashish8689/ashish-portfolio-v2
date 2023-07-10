import React, { FC } from 'react'
import CustomImage from '../CustomImage/CustomImage.component'
import { SOCIAL_LINKS } from '@/constant/links.constant'

const Header: FC = () => {
    return (
        <div className="header" id="home">
            <div className="container">
                <div className="section-flex">
                    <div className="section-left">
                        <div className="content">
                            <h1 className="title-head">
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
