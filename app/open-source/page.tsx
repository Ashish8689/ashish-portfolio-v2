'use client'

import React, { useEffect, useState } from 'react'
import {
    ContributionSummary,
    getContributionSummary,
} from 'github-user-contribution-summary'
import ContentHeader from '@/component/ContentHeader/ContentHeader.component'
import { COMPONENT_HEADER } from '@/constant/header.constant'
import { getOpenSourceStatsCount } from '@/utils/stats.utils'
import Stats from '@/component/Stats/Stats.component'
import { StatsProps } from '@/component/Stats/Stats.interface'
import Contribution from '@/component/Contribution/Contribution.component'
import ContributionCalendar from '@/component/ContributionCalendar/ContributionCalendar.component'

const OpenSource: React.FC = () => {
    const [data, setData] = useState<ContributionSummary>()
    const [statsData, setStatsData] = useState<StatsProps['data'][]>([])

    const getUserContributionSummary = async (): Promise<void> => {
        const argument = {
            userName: 'Ashish8689',
            githubToken: process.env.GITHUB_TOKEN ?? '',
        }

        try {
            const response = await getContributionSummary(argument)
            setData(response)
            setStatsData(getOpenSourceStatsCount(response))
        } catch (error) {
            console.log('Something went wrong', error)
        }
    }

    useEffect(() => {
        getUserContributionSummary()
    }, [])

    return (
        <div className="open-source">
            <div className="container">
                <ContentHeader data={COMPONENT_HEADER.OPEN_SOURCE} />

                <div className="stats-container">
                    {statsData.map((item) => (
                        <Stats data={item} key={item.key} />
                    ))}
                </div>

                {/* <ContributionCalendar
                    data={data?.contributionByDate}
                    totalContribution={data?.totalContributionCount}
                /> */}

                <div className="contribution-container">
                    <ContentHeader
                        data={COMPONENT_HEADER.PULL_REQUEST_CONTRIBUTED}
                    />

                    <div className="contribution-block-container">
                        {data?.latestPullRequestContributions.map((item) => (
                            <Contribution data={item} key={item.url} />
                        ))}
                    </div>

                    <ContentHeader data={COMPONENT_HEADER.ISSUE_CONTRIBUTED} />
                    <div className="contribution-block-container">
                        {data?.latestPullRequestReviewContributions.map(
                            (item) => (
                                <Contribution data={item} key={item.url} />
                            )
                        )}
                    </div>

                    <ContentHeader data={COMPONENT_HEADER.REVIEW_CONTRIBUTED} />

                    <div className="contribution-block-container">
                        {data?.latestIssueContributions.map((item) => (
                            <Contribution data={item} key={item.url} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenSource
