'use client'

import React, { useState, useEffect } from 'react'
import Isotope from 'isotope-layout'
import { PROJECTS_LIST, PROJECTS_TYPE } from '@/constant/portfolio.constant'
import PortfolioItem from './PortfolioItem.component'

const Projects: React.FC = () => {
    const [isotope, setIsotope] = useState<Isotope>()
    const [filterKey, setFilterKey] = useState('All')

    useEffect(
        () =>
            setIsotope(
                new Isotope('.filter-container', {
                    itemSelector: '.filter-item',
                    layoutMode: 'fitRows',
                })
            ),
        []
    )

    useEffect(() => {
        if (isotope) {
            // sanity check
            filterKey === 'All'
                ? isotope.arrange({ filter: '*' })
                : isotope.arrange({ filter: `.${filterKey.toLowerCase()}` })
        }
    }, [isotope, filterKey])

    useEffect(() => {
        document.body.scrollTop = 0
    }, [])

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
                                {type}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="filter-container">
                    {PROJECTS_LIST.map((portfolio) => (
                        <PortfolioItem data={portfolio} key={portfolio.url} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
