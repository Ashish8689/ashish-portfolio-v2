'use client'

import PortfolioItem from '@/component/Portfolio/PortfolioItem.component'
import { PROJECTS_LIST, PROJECTS_TYPE } from '@/constant/portfolio.constant'
import { toCapitalize } from '@/utils/common.utils'
import React, { useState } from 'react'

const Projects: React.FC = () => {
    const [filterKey, setFilterKey] = useState('all')

    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio-header-container">
                    <ul>
                        {PROJECTS_TYPE.map((type) => (
                            <li
                                className={`button ${
                                    filterKey === type ? 'active' : ''
                                }`}
                                key={type}
                                onClick={() => setFilterKey(type)}
                            >
                                {toCapitalize(type)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="filter-container">
                    {PROJECTS_LIST.filter((item) =>
                        filterKey === 'all' ? true : item.type === filterKey
                    ).map((portfolio) => (
                        <PortfolioItem data={portfolio} key={portfolio.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
