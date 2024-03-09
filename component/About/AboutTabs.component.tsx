import { ABOUT_TABS } from '@/constant/about.constant'
import React from 'react'
import { AboutTabsProps } from './about.interface'

const AboutTabs = ({
    activeTab,
    onClick,
}: AboutTabsProps): React.JSX.Element => {
    return (
        <ul className="tabs">
            {ABOUT_TABS.map(({ tab, label }) => (
                <button
                    className={`tab button ${activeTab == tab && 'active'}`}
                    key={tab}
                    onClick={() => onClick(tab)}
                >
                    {label}
                </button>
            ))}
        </ul>
    )
}

export default AboutTabs
