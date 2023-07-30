'use client'

import ContentHeader from '@/component/ContentHeader/ContentHeader.component'
import Contribution from '@/component/Contribution/Contribution.component'
import ContributionCalendar from '@/component/ContributionCalendar/ContributionCalendar.component'
import Stats from '@/component/Stats/Stats.component'
import { COMPONENT_HEADER } from '@/constant/header.constant'
import { getOpenSourceStatsCount } from '@/utils/stats.utils'
import { ContributionSummary } from './github.interface'
import { useEffect, useState } from 'react'
import { StatsProps } from '@/component/Stats/Stats.interface'
import { getContributionSummary } from '@/rest/github.rest'

const OpenSource = async () => {
    const [data, setData] = useState<ContributionSummary>()
    const [statsData, setStatsData] = useState<StatsProps['data'][]>([])

    const getUserContributionSummary = async (): Promise<void> => {
        try {
            const response = await getContributionSummary()
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

                <ContributionCalendar
                    data={data?.contributionByDate}
                    totalContribution={data?.totalContributionCount}
                />

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
