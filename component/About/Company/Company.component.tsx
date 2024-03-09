import { COMPANY_DETAILS } from '@/constant/about.constant'
import React from 'react'
import CompanyItem from './CompanyItem.component'

const Company: React.FC = () => {
    return (
        <div className="education-container">
            {COMPANY_DETAILS.map((data) => (
                <CompanyItem {...data} key={data.company} />
            ))}
        </div>
    )
}

export default Company
