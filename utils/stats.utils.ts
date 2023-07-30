import { ContributionSummary } from '@/app/open-source/github.interface'
import { StatsProps } from '@/component/Stats/Stats.interface'
import { STATS } from '@/constant/stats.constant'

export const getOpenSourceStatsCount = (
    data: ContributionSummary
): StatsProps['data'][] => [
    {
        label: 'Pull Requests',
        key: STATS.PULL_REQUEST,
        count: data.totalPullRequests,
    },
    {
        label: 'Issues',
        key: STATS.ISSUES,
        count: data.totalIssues,
    },
    {
        label: 'Repositories',
        key: STATS.REPOSITORIES,
        count: data.totalRepositories,
    },
    {
        label: 'Followers',
        key: STATS.FOLLOWERS,
        count: data.totalFollowers,
    },
    {
        label: 'Gists',
        key: STATS.GISTS,
        count: data.totalGists,
    },
    {
        label: 'Starred Repositories',
        key: STATS.STARRED,
        count: data.totalStarredRepositories,
    },
    {
        label: 'Pull Request Reviewed',
        key: STATS.PULL_REVIEWED,
        count: data.totalPullRequestReviewed,
    },
    {
        label: 'Repositories Contributed To',
        key: STATS.CONTRIBUTED,
        count: data.totalRepositoriesContributedTo,
    },
]

export const shiftDate = (date: Date, numDays: number): Date => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + numDays)

    return newDate
}
