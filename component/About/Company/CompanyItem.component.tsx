import React from 'react'
import { CompanyItemProps } from './Company.interface'
import CustomImage from '@/component/CustomImage/CustomImage.component'

const CompanyItem = ({
    company,
    company_url,
    company_logo,
    year,
    location,
    designation,
}: CompanyItemProps): React.JSX.Element => {
    return (
        <div className="company-item-block">
            <div className="company-image-container">
                <a href={company_url} rel="noreferrer" target="_blank">
                    <CustomImage alt={company} src={company_logo} />
                </a>
            </div>
            <div className="company-content-container">
                <h2>{designation}</h2>
                <h2>
                    <a href={company_url} rel="noreferrer" target="_blank">
                        {company}
                    </a>
                </h2>
                <span>{year}</span>
                <span>{location}</span>
            </div>
        </div>
    )
}

export default CompanyItem
