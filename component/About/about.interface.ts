import { ReactNode } from 'react'

export interface AboutContentProps {
    icon: any
    element: ReactNode
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

export enum AboutTab {
    PERSONAL = 'personal',
    EDUCATION = 'education',
}
