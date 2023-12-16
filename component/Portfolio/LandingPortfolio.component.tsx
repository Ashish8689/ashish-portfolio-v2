import React from 'react'
import LandingPortfolioItem from './LandingPortfolioItem.component'
import { PROJECTS_LIST } from '@/constant/portfolio.constant'
import Link from 'next/link'
import ContentHeader from '../ContentHeader/ContentHeader.component'
import { COMPONENT_HEADER } from '@/constant/header.constant'

const LandingPortfolio: React.FC = () => {
    return (
        <div className="landing-portfolio" id="portfolio">
            <div className="container">
                <ContentHeader data={COMPONENT_HEADER.PORTFOLIO} />

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
                    <Link
                        className="button link-button"
                        href="portfolio"
                        prefetch={false}
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPortfolio
