import React from 'react'
import LandingPortfolioItem from './LandingPortfolioItem.component'
import { PROJECTS_LIST } from '@/constant/portfolio.constant'
import Link from 'next/link'

const LandingPortfolio: React.FC = () => {
    return (
        <div className="landing-portfolio" id="portfolio">
            <div className="container">
                <h1 className="title">Portfolio</h1>
                <h2 className="subtitle">My Creative Work</h2>

                <div className="landing-portfolio-container">
                    {PROJECTS_LIST.filter((item) => item.latest).map(
                        (item, index) => (
                            <LandingPortfolioItem
                                data={item}
                                index={index}
                                key={item.name}
                            />
                        )
                    )}
                </div>

                <div className="text-center">
                    <Link className="button link-button" href="/portfolio">
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPortfolio
