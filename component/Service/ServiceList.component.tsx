import React from 'react'
import { ServiceListProps } from './service.interface'

const ServiceList = ({ data }: ServiceListProps): React.JSX.Element => {
    const { service, description, icon } = data
    const Icon = icon

    return (
        <div className="service-block">
            <div className="service-img-container">
                <Icon />
            </div>
            <div className="service-content">
                <h1 className="service-content-title">{service}</h1>
                <p className="service-content-para">{description}</p>
            </div>
        </div>
    )
}

export default ServiceList
