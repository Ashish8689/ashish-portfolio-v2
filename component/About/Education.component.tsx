import { EDUCATION_DETAILS } from '@/constant/about.constant'
import React from 'react'
import EducationItem from './EducationItem.component'

const Education: React.FC = () => {
    return (
        <div className="education-container">
            {[...EDUCATION_DETAILS].reverse().map((data, index) => (
                <EducationItem data={data} key={index} />
            ))}
        </div>
    )
}

export default Education
