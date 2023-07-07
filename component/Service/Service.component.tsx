import React, { FC } from 'react'
import ServiceList from './ServiceList.component'
import { SERVICE_DATA } from '@/constant/service.constant'
import CustomImage from '../CustomImage/CustomImage.component'

const Service: FC = () => {
    return (
        <div className="service">
            <div className="container">
                <h1 className="subtitle">Service</h1>
                <h1 className="title">What we do ?</h1>
                {/* <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Dolorem ea temporibus atque porro impedit!</p> */}

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
