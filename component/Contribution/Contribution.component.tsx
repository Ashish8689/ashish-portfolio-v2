import React from 'react'
import { ContributionProps } from './Contribution.interface'
import Link from 'next/link'

const Contribution = ({ data }: ContributionProps): React.JSX.Element => {
    return (
        <div className="contribution-block">
            <Link
                className="contribution-links"
                href={data.url}
                target="_blank"
            >
                {data.title}
            </Link>
        </div>
    )
}

export default Contribution
