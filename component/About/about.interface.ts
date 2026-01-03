import { ReactNode } from 'react'

export enum AboutTab {
    PERSONAL = 'personal',
    EDUCATION = 'education',
    COMPANY = 'company',
}
export interface AboutContentProps {
    icon: React.JSX.Element
    element: ReactNode
}

export interface AboutTabsProps {
    activeTab: string
    onClick: (string: AboutTab) => void
}

export interface EducationItemProps {
    data: {
        degreeType: string
        degree: string
        college: string
        board: string
        year: string
    }
}
