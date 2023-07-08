import React from 'react'
import { SkillsItemProps } from './skills.interface'
import CustomImage from '../CustomImage/CustomImage.component'

const SkillsItem = ({
    data: { stack, icon },
}: SkillsItemProps): React.JSX.Element => {
    return (
        <div className="skills-block">
            <div className="skills-img-container">
                <CustomImage src={icon} />
            </div>
            <p>{stack}</p>
        </div>
    )
}

export default SkillsItem
