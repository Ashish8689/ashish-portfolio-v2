'use client'

import React, { useEffect, useState } from 'react'
import Isotope from 'isotope-layout'
import { PROJECTS_LIST, PROJECTS_TYPE } from '@/constant/portfolio.constant'
import PortfolioItem from './PortfolioItem.component'

const Portfolio: React.FC = () => {
    const [isotope, setIsotope] = useState<Isotope>()
    const [filterKey, setFilterKey] = useState('All')

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

    useEffect(() => {
        setIsotope(
            new Isotope('.filter-container', {
                itemSelector: '.filter-item',
                layoutMode: 'fitRows',
            })
        )
    }, [])

    return (
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
    )
}

export default Portfolio
