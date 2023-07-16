import React, { FC } from 'react'
import ServiceList from './ServiceList.component'
import { SERVICE_DATA } from '@/constant/service.constant'
import CustomImage from '../CustomImage/CustomImage.component'
import ContentHeader from '../ContentHeader/ContentHeader.component'
import { COMPONENT_HEADER } from '@/constant/header.constant'

const Service: FC = () => {
    return (
        <div className="service">
            <div className="container">
                <ContentHeader data={COMPONENT_HEADER.SERVICE} />

                <div className="service-grid">
                    {SERVICE_DATA.map((service) => (
                        <ServiceList data={service} key={service.id} />
                    ))}
                </div>
            </div>

            <div className="circle-round" />

            <div className="dotted">
                <CustomImage src="/image/icons/dot.png" />
            </div>

            <div className="light-star">
                <CustomImage src="/image/icons/light-star.png" />
            </div>
            <div className="light-wave">
                <CustomImage src="/image/icons/light-wave.png" />
            </div>

            <div className="light-wave wave2">
                <CustomImage src="/image/icons/light-wave.png" />
            </div>
        </div>
    )
}

export default Service
