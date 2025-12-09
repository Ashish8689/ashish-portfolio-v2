import React from 'react'
import AboutContent from './AboutContent.component'

import Birthday from '../../svg/Birthday'
import Degree from '../../svg/Degree'
import Person from '../../svg/Person'
import Mail from '../../svg/Mail'
import Call from '../../svg/Call'
import Location from '../../svg/Location'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/constant/links.constant'

const PersonalInfo: React.FC = () => {
    return (
        <div>
            <div className="content">
                <h1 className="title">
                    For over 4.6 year I have successfully providing best
                    services to my Companies and Clients.
                </h1>
                <p className="para">
                    If you&apos;re looking for a Software Engineer who is
                    passionate about creating exceptional user experiences and
                    delivering high-quality, scalable solutions, then please
                    don&apos;t hesitate to get in touch. I would love to hear
                    about your project and discuss how I can help you achieve
                    your goals.
                </p>

                <div className="section-flex">
                    <div className="section-left">
                        <AboutContent
                            element="Ashish Gupta"
                            icon={<Person className="i" />}
                        />
                        <AboutContent
                            element={<a href="tel: 8689868867"> 8689868867</a>}
                            icon={<Call className="i" />}
                        />
                        <AboutContent
                            element={
                                <a href="mailto:guptaashish8689@gmail.com">
                                    guptaashish8689@gmail.com
                                </a>
                            }
                            icon={<Mail className="i" />}
                        />
                    </div>
                    {/* col end */}

                    <div className="section-right">
                        <AboutContent
                            element={
                                <div>
                                    Born on 21 <sup>st</sup> Nov, 1999
                                </div>
                            }
                            icon={<Birthday className="i" />}
                        />
                        <AboutContent
                            element="Msc in Computer Application"
                            icon={<Degree className="i" />}
                        />

                        <AboutContent
                            element="Malwani Malad west"
                            icon={<Location className="i" />}
                        />
                    </div>
                    {/* col end */}
                </div>
            </div>

            <Link
                className="button"
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
            >
                Know more about me
            </Link>
        </div>
    )
}

export default PersonalInfo
