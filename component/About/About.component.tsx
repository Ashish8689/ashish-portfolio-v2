import React, { useMemo, useState } from 'react'

import { AboutTab } from './about.interface'
import CustomImage from '../CustomImage/CustomImage.component'
import Education from './Education.component'
import PersonalInfo from './PersonalInfo.component'
import AboutTabs from './AboutTabs.component'

const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState(AboutTab.PERSONAL)

    const isPersonalActive = useMemo(
        () => activeTab === AboutTab.PERSONAL,
        [activeTab]
    )

    return (
        <div className="about" id="about">
            <div className="container">
                <div className="about-header-container">
                    <div className="about-header">
                        <h4>Why hire me for your next Project</h4>
                        <h3>Professional Experience</h3>
                    </div>

                    <AboutTabs
                        activeTab={activeTab}
                        onClick={(tab) => setActiveTab(tab)}
                    />
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
                        <div className="tab-content">
                            <section
                                className={`tab-section ${
                                    isPersonalActive && 'active'
                                }`}
                            >
                                <PersonalInfo />
                            </section>

                            <section
                                className={`tab-section ${
                                    !isPersonalActive && 'active'
                                }`}
                            >
                                <Education />
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
