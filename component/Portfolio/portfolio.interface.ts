export interface LandingPortfolioItemProps {
    data: {
        name: string
        img: string
        url: string
        type: string
        latest: boolean
        description: string
        githubUrl: string
        stack: string[]
    }
    index: number
}

export interface PortfolioProps {
    data: {
        name: string
        img: string
        url: string
        githubUrl: string
        type: string
        stack: string[]
        latest: boolean
        description: string
    }
}
