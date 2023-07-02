import React, { FC } from 'react'
import ServiceList from './ServiceList.component'
import { SERVICE_DATA } from '@/constant/service.constant'

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
            {/* <img alt="Ashish Gupta" className="dotted" src={process.env.PUBLIC_URL + '/image/icons/dot.png'}/>
            <img alt="Ashish Gupta" className="light-star"
             src={process.env.PUBLIC_URL + '/image/icons/light-star.png'}/>
            <img alt="Ashish Gupta" className="light-wave" 
            src={process.env.PUBLIC_URL + '/image/icons/light-wave.png'}/>
            <img alt="Ashish Gupta" className="light-wave wave2" src={process.env.PUBLIC_URL + '/image/icons/light-wave.png'}/> */}
        </div>
    )
}

export default Service
