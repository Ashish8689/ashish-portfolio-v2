import { ABOUT_TABS } from '@/constant/about.constant'
import React from 'react'
import { AboutTabsProps } from './about.interface'

const AboutTabs = ({
    activeTab,
    onClick,
}: AboutTabsProps): React.JSX.Element => {
    return (
        <ul className="tabs">
            {ABOUT_TABS.map(({ tab, label }, index) => (
                <li
                    className={`tab button ${activeTab == tab && 'active'}`}
                    key={index}
                    onClick={() => onClick(tab)}
                >
                    {label}
                </li>
            ))}
        </ul>
    )
}

export default AboutTabs
