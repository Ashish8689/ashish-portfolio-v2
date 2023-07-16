import React from 'react'
import { ContentHeaderProps } from './ContentHeader.interface'

const ContentHeader = ({
    data: { title, subTitle },
}: ContentHeaderProps): React.JSX.Element => {
    return (
        <div className="content-header">
            <h1 className="title">{title}</h1>
            <h2 className="sub-title">{subTitle}</h2>
        </div>
    )
}

export default ContentHeader
