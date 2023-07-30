export const BASE_URL = 'https://api.github.com/graphql'

export const NAME_PLACEHOLDER = ':GITHUB_USER_NAME'

export const GITHUB_USER_RESOURCE_QUERY = `query GetUserResourceInfo {
    user(login: "${NAME_PLACEHOLDER}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
        totalRepositoryContributions
        totalPullRequestReviewContributions
        pullRequestContributions(first: 10) {
          totalCount
          nodes {
            pullRequest {
              url
              title
              repository {
                nameWithOwner
                url
                isPrivate
              }
            }
          }
        }
        pullRequestReviewContributions(first: 10) {
          totalCount
          nodes {
            pullRequest {
              url
              title
              repository {
                nameWithOwner
                url
                isPrivate
              }
            }
          }
        }
        issueContributions(first: 10) {
          totalCount
          nodes {
            issue {
              url
              title
              repository {
                nameWithOwner
                url
                isPrivate
              }
            }
          }
        }
      }
      pinnedItems(first: 10) {
        totalCount
        nodes {
          ... on Repository {
            name
            description
            nameWithOwner
            url
            stargazerCount
            forkCount
            primaryLanguage {
              name
              color
            }
            languages(first: 10) {
              edges {
                node {
                  name
                  color
                }
              }
            }
            visibility
          }
        }
      }
      pullRequests {
        totalCount
      }
      issues {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      repositoriesContributedTo {
        totalCount
      }
      repositories {
        totalCount
      }
      gists {
        totalCount
      }
      followers {
        totalCount
      }
      organizations(first: 10) {
        totalCount
        edges {
          node{
            name
            url
            avatarUrl
          }
        }
      }
      avatarUrl
      bio
      websiteUrl
      twitterUsername
    }
  }`
