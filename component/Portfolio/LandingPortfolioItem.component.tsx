import React, { useMemo } from 'react'
import { LandingPortfolioItemProps } from './portfolio.interface'
import CustomImage from '../CustomImage/CustomImage.component'
import GithubIcon from '../../svg/github.svg'
import OutsideLinkIcon from '../../svg/outside-link.svg'
import Link from 'next/link'

const LandingPortfolioItem = ({
    data: { img, name, description, githubUrl, stack },
    index,
}: LandingPortfolioItemProps): React.JSX.Element => {
    const isOdd = useMemo(() => index % 2 !== 0, [index])

    return (
        <div className="landing-portfolio-block">
            <div className="landing-flex">
                <div className={`landing-flex-left ${isOdd ? 'order-1' : ''} `}>
                    <div className="img-container">
                        <CustomImage src={img} />
                    </div>
                </div>

                <div className="landing-flex-right">
                    <div
                        className={`landing-portfolio-content-container ${
                            isOdd ? 'left-40 text-left' : ''
                        }`}
                    >
                        <h3>{name}</h3>
                        <p>{description}</p>

                        <div className="project-links-container">
                            <Link href={githubUrl}>
                                <div className="project-icons">
                                    <GithubIcon className="icon" />
                                </div>
                            </Link>

                            <Link href={githubUrl}>
                                <div className="project-icons">
                                    <OutsideLinkIcon className="icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`stack-container ${
                            isOdd ? 'left-40 text-left' : ''
                        }`}
                    >
                        {stack.map((item) => (
                            <span
                                className={isOdd ? 'margin-right-20' : ''}
                                key={item}
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPortfolioItem
