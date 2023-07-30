// Types Start
export interface ContributionDays {
    contributionCount: number
    date: string
}

export interface FunctionParam {
    userName: string
    githubToken: string
}

export interface ContributionWeeks {
    contributionDays: ContributionDays[]
}

export interface ContributionCalendar {
    totalContributions: number
    weeks: ContributionWeeks[]
}

export interface LanguageEdgeNode {
    name: string
    color: string
}

export interface LanguageEdge {
    node: LanguageEdgeNode
}

export interface Language {
    edges: LanguageEdge[]
}

export interface PinnedItemNode {
    name: string
    description: string
    nameWithOwner: string
    url: string
    stargazerCount: number
    forkCount: number
    languages: Language
    visibility: string
    primaryLanguage: {
        name: string
        color: string
    }
}

export interface PinnedItems {
    totalCount: number
    nodes: PinnedItemNode[]
}

export interface TotalCount {
    totalCount: number
}

export interface OrganizationNode {
    name: string
    url: string
    avatarUrl: string
}

export interface UserOrganizations {
    totalCount: number
    edges: {
        node: OrganizationNode
    }[]
}

enum ContributionResource {
    PULL_REQUEST = 'pullRequest',
    ISSUE = 'issue',
}

export interface ContributionsNodeResource {
    url: string
    title: string
    repository: {
        nameWithOwner: string
        url: string
        isPrivate: boolean
    }
}

interface Contributions<T extends ContributionResource> {
    totalCount: number
    nodes: {
        [K in T]: ContributionsNodeResource
    }[]
}

export interface ContributionsCollection {
    contributionCalendar: ContributionCalendar
    totalRepositoryContributions: number
    totalPullRequestReviewContributions: number
    pullRequestContributions: Contributions<ContributionResource.PULL_REQUEST>
    pullRequestReviewContributions: Contributions<ContributionResource.PULL_REQUEST>
    issueContributions: Contributions<ContributionResource.ISSUE>
}

export interface GithubUserResource {
    data: {
        user: {
            contributionsCollection: ContributionsCollection
            pinnedItems: PinnedItems
            pullRequests: TotalCount
            issues: TotalCount
            starredRepositories: TotalCount
            repositoriesContributedTo: TotalCount
            repositories: TotalCount
            gists: TotalCount
            followers: TotalCount
            organizations: UserOrganizations
            avatarUrl: string
            bio: string
            websiteUrl: string
            twitterUsername: string
        }
    }
}

export interface SummaryOverview {
    totalPullRequests: number
    totalIssues: number
    totalStarredRepositories: number
    totalRepositoriesContributedTo: number
    totalRepositories: number
    totalGists: number
    totalFollowers: number
    totalPullRequestReviewed: number
    popularRepositories: PinnedItemNode[]
    contributedOrganizations: OrganizationNode[]
    personalInfo: {
        avatarUrl: string
        bio: string
        websiteUrl: string
        twitterUsername: string
    }
    contributionDistribution: {
        pullRequest: number
        pullRequestReview: number
        issue: number
    }
    latestPullRequestContributions: ContributionsNodeResource[]
    latestPullRequestReviewContributions: ContributionsNodeResource[]
    latestIssueContributions: ContributionsNodeResource[]
}

export interface ContributionSummary extends SummaryOverview {
    totalContributionCount: number
    contributionByDate: ContributionDays[]
}
