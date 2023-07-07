import React from 'react'
import AboutContent from './AboutContent.component'

import Birthday from '../../svg/Birthday'
import Degree from '../../svg/Degree'
import Person from '../../svg/Person'
import Mail from '../../svg/Mail'
import Call from '../../svg/Call'
import Location from '../../svg/Location'

const PersonalInfo: React.FC = () => {
    return (
        <div>
            <div className="content">
                <h1 className="title">
                    For over 2+ year I have successfully providing best services
                    to my clients and company.
                </h1>
                <p className="para">
                    I am Ashish Gupta, a Software Engineer based in Mumbai who
                    brings your visualization in reality and build a website
                    that increase your business. I&apos;m available for
                    Freelance work and projects.
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
                            element="BCA"
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

            <div className="button">Know more about me</div>
        </div>
    )
}

export default PersonalInfo
