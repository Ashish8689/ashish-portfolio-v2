import React, { FC, useCallback } from 'react'
import CustomImage from '../CustomImage/CustomImage.component'
import { SOCIAL_LINK_OPTIONS } from '@/constant/links.constant'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

const Header: FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine)
    }, [])

    return (
        <div className="header" id="home">
            <div className="container">
                <div className="section-flex">
                    <div className="section-left">
                        <div className="content">
                            <h1 className="title-head">
                                {'<'}Hii{'>'}
                            </h1>
                            <h1 className="title">
                                This is <span>Ashish</span>
                            </h1>
                            <h2 className="subtitle">Software Engineer</h2>
                            <p className="para">
                                <span>{'<p>'}</span> I am a Software Engineer
                                and OpenSource Contributor based in
                                India(Mumbai) who focus on writing clean,
                                elegant and efficient code. I learn on my own
                                and stay consistent, believing in the learning
                                process more than just results.
                                <span> {'<p> '}</span>
                            </p>

                            <div className="content-social header-social">
                                <div className="social-flex">
                                    {SOCIAL_LINK_OPTIONS.map(
                                        ({ icon, link }) => {
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
                                        }
                                    )}
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
                                    href="/image/CV-ASHISH-GUPTA.pdf"
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
                        {SOCIAL_LINK_OPTIONS.map(({ icon, link }) => {
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

            <Particles
                className="particles-container"
                id="ts-particles"
                init={particlesInit}
                options={{
                    particles: {
                        color: {
                            value: [
                                '#BD10E0',
                                '#B8E986',
                                '#50E3C2',
                                '#7a57d1',
                                '#E86363',
                            ],
                        },
                        move: {
                            enable: true,
                            speed: 1,
                        },
                        number: {
                            value: 90,
                            density: {
                                enable: true,
                                area: 1000,
                            },
                        },
                        opacity: {
                            value: 0.3,
                        },
                        size: {
                            value: 7,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 3,
                            },
                        },
                    },
                    fullScreen: {
                        enable: false,
                    },
                }}
            />

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
