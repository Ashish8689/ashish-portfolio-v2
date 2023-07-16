import { SKILLS_LIST } from '@/constant/skills.constant'
import React from 'react'
import SkillsItem from './SkillsItem.component'
import ContentHeader from '../ContentHeader/ContentHeader.component'
import { COMPONENT_HEADER } from '@/constant/header.constant'

const Skills: React.FC = () => {
    return (
        <div className="skills">
            <div className="container">
                <ContentHeader data={COMPONENT_HEADER.SKILLS} />

                <div className="skills-container">
                    {SKILLS_LIST.map((item) => (
                        <SkillsItem data={item} key={item.stack} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
