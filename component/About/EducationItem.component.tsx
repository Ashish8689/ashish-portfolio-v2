import React from 'react'
import { EducationItemProps } from './about.interface'

const EducationItem = ({
    data: { degreeType, degree, board, year },
}: EducationItemProps): React.JSX.Element => {
    return (
        <div className="education-item-block">
            <div>
                <h1 className="header">{degreeType}</h1>
                <div className="content">
                    <h2>{board}</h2>
                    <h3>{degree}</h3>
                </div>
            </div>

            <p className="year">{year}</p>
        </div>
    )
}

export default EducationItem
