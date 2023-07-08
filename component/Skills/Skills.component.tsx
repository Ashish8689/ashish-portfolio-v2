import { SKILLS_LIST } from '@/constant/skills.constant'
import React from 'react'
import SkillsItem from './SkillsItem.component'

const Skills: React.FC = () => {
    return (
        <div className="skills">
            <div className="container">
                <h1 className="title">Skills</h1>
                <h2 className="subtitle">What I bring&apos;s in</h2>

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
