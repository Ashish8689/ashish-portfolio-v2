import React from 'react'
import { ContributionProps } from './Contribution.interface'
import Link from 'next/link'
import CustomImage from '../CustomImage/CustomImage.component'

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

            {/* <div className="contribution-block-image-section"> */}
            <div className="contribution-img-container">
                <CustomImage src="https://avatars.githubusercontent.com/u/86132257?v=4" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Contribution
