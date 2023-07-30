import {
    ContributionDays,
    ContributionSummary,
    GithubUserResource,
} from '@/app/open-source/github.interface'
import {
    BASE_URL,
    GITHUB_USER_RESOURCE_QUERY,
    NAME_PLACEHOLDER,
} from '@/constant/github.constant'
import axios from 'axios'

// Axios Instance
const API_CLIENT = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getContributionSummary =
    async (): Promise<ContributionSummary> => {
        const { userName, githubToken } = {
            userName: 'Ashish8689',
            githubToken:
                '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',
        }

        const query = GITHUB_USER_RESOURCE_QUERY.replace(
            NAME_PLACEHOLDER,
            userName
        )

        const apiData = JSON.stringify({
            query,
        })

        const response = await API_CLIENT.post<GithubUserResource>(
            '',
            apiData,
            {
                headers: { Authorization: `bearer ${githubToken}` },
            }
        )

        const userResource = response.data.data.user

        const contributionsCollection = userResource.contributionsCollection
        const contributionCalendar =
            contributionsCollection.contributionCalendar

        const pullRequestContribution =
            contributionsCollection.pullRequestContributions
        const pullRequestReviewContribution =
            contributionsCollection.pullRequestReviewContributions

        const issueContribution = contributionsCollection.issueContributions

        const contributionDays: ContributionDays[] =
            contributionCalendar.weeks.reduce((prev, curr) => {
                return [...prev, ...curr.contributionDays]
            }, [] as ContributionDays[])

        return {
            totalContributionCount: contributionCalendar.totalContributions,
            contributionByDate: contributionDays,
            totalPullRequests: userResource.pullRequests.totalCount,
            totalIssues: userResource.issues.totalCount,
            totalStarredRepositories:
                userResource.starredRepositories.totalCount,
            totalRepositoriesContributedTo:
                userResource.repositoriesContributedTo.totalCount,
            totalRepositories: userResource.repositories.totalCount,
            totalGists: userResource.gists.totalCount,
            totalFollowers: userResource.followers.totalCount,
            totalPullRequestReviewed:
                userResource.contributionsCollection
                    .totalPullRequestReviewContributions,
            popularRepositories: userResource.pinnedItems.nodes,
            contributedOrganizations: userResource.organizations.edges.map(
                (edge) => edge.node
            ),
            personalInfo: {
                bio: userResource.bio,
                avatarUrl: userResource.avatarUrl,
                websiteUrl: userResource.websiteUrl,
                twitterUsername: userResource.twitterUsername,
            },
            contributionDistribution: {
                pullRequest: pullRequestContribution.totalCount,
                pullRequestReview: pullRequestReviewContribution.totalCount,
                issue: issueContribution.totalCount,
            },
            latestPullRequestContributions: pullRequestContribution.nodes.map(
                (node) => node.pullRequest
            ),
            latestPullRequestReviewContributions:
                pullRequestReviewContribution.nodes.map(
                    (node) => node.pullRequest
                ),
            latestIssueContributions: issueContribution.nodes.map(
                (node) => node.issue
            ),
        }
    }
