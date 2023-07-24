import { shiftDate } from '@/utils/stats.utils'
import { ContributionDays } from 'github-user-contribution-summary'
import React from 'react'
import ReactCalendarHeatmap from 'react-calendar-heatmap'

const ContributionCalendar = ({
    data,
    totalContribution,
}: {
    data?: ContributionDays[]
    totalContribution?: number
}): React.JSX.Element => {
    return (
        <div className="github-contribution-calendar">
            <h2>
                <span> {totalContribution}</span> Contributions in the last year
            </h2>
            <ReactCalendarHeatmap
                showWeekdayLabels
                classForValue={(value: ContributionDays) => {
                    if (!value) {
                        return 'color-empty'
                    }

                    return value.contributionCount < 5
                        ? `color-github-${value.contributionCount}`
                        : `color-github-5`
                }}
                endDate={new Date()}
                startDate={shiftDate(new Date(), -365)}
                values={data ?? []}
            />
        </div>
    )
}

export default ContributionCalendar
