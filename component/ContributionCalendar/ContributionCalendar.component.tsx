import { ContributionDays } from '@/app/open-source/github.interface'
import { shiftDate } from '@/utils/stats.utils'
import React from 'react'
import ReactCalendarHeatmap from 'react-calendar-heatmap'
import { Tooltip as ReactTooltip } from 'react-tooltip'

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
                tooltipDataAttrs={(value: ContributionDays) => {
                    return {
                        'data-tooltip-id': 'github-stats',
                        'data-tooltip-content': `${value.date.slice(
                            0,
                            10
                        )} has count: ${value.contributionCount}`,
                    }
                }}
                values={data ?? []}
            />

            <ReactTooltip id="github-stats" />
        </div>
    )
}

export default ContributionCalendar
