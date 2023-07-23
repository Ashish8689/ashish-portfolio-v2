import React from 'react'
import { StatsProps } from './Stats.interface'

const Stats = ({ data: { label, count } }: StatsProps): React.JSX.Element => {
    return (
        <div className="stats-block">
            <h3>{label}</h3>
            <p>{count}</p>
        </div>
    )
}

export default Stats
