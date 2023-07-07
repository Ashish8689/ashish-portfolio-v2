import React from 'react'
import { AboutContentProps } from './about.interface'

const AboutContent = ({
    icon,
    element,
}: AboutContentProps): React.JSX.Element => {
    return (
        <div className="mini-flex">
            <div className="mini-flex-left">{icon}</div>
            <div className="mini-flex-right">
                <h5>{element}</h5>
            </div>
        </div>
    )
}

export default AboutContent
