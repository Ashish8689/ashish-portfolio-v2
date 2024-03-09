import React, { useState } from 'react'

import { AboutTab } from './about.interface'
import CustomImage from '../CustomImage/CustomImage.component'
import Education from './Education.component'
import PersonalInfo from './PersonalInfo.component'
import AboutTabs from './AboutTabs.component'
import ContentHeader from '../ContentHeader/ContentHeader.component'
import { COMPONENT_HEADER } from '@/constant/header.constant'
import Company from './Company/Company.component'

const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState(AboutTab.PERSONAL)

    return (
        <div className="about" id="about">
            <div className="container">
                <div className="about-header-container">
                    <div className="about-header">
                        <ContentHeader data={COMPONENT_HEADER.ABOUT} />
                    </div>

                    <div className="d-none-small">
                        <AboutTabs
                            activeTab={activeTab}
                            onClick={(tab) => setActiveTab(tab)}
                        />
                    </div>
                </div>
                <div className="section-flex">
                    <div className="section-left">
                        <div className="img-container">
                            <CustomImage src="/image/1.png" />
                        </div>
                        <div className="dotted">
                            <CustomImage src="/image/icons/dot.png" />
                        </div>
                    </div>
                    {/* Section left end */}

                    <div className="section-right">
                        <div className="m-t-lg d-none-large">
                            <AboutTabs
                                activeTab={activeTab}
                                onClick={(tab) => setActiveTab(tab)}
                            />
                        </div>

                        <div className="tab-content">
                            <section
                                className={`tab-section ${
                                    activeTab === AboutTab.PERSONAL && 'active'
                                }`}
                            >
                                <PersonalInfo />
                            </section>

                            <section
                                className={`tab-section ${
                                    activeTab === AboutTab.EDUCATION && 'active'
                                }`}
                            >
                                <Education />
                            </section>

                            <section
                                className={`tab-section ${
                                    activeTab === AboutTab.COMPANY && 'active'
                                }`}
                            >
                                <Company />
                            </section>
                        </div>
                    </div>
                    {/* ***  section right end  **** */}
                </div>
                {/* ***  Section flex end  **** */}
            </div>

            {/* ***********   Animation   ************* */}

            <div className="line-circle">
                <CustomImage src="/image/icons/line-circle.png" />
            </div>

            <div className="dot-line">
                <CustomImage src="/image/icons/dot-line.png" />
            </div>
        </div>
    )
}

export default About
