import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import { TESTIMONIAL_LIST } from '@/constant/testimonial.constant'
import TestimonialItem from './TestimonialItem.component'
import CustomImage from '../CustomImage/CustomImage.component'
import { COMPONENT_HEADER } from '@/constant/header.constant'
import ContentHeader from '../ContentHeader/ContentHeader.component'

const Testimonial: React.FC = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <ContentHeader data={COMPONENT_HEADER.TESTIMONIAL} />

                <Swiper
                    navigation
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                >
                    {TESTIMONIAL_LIST.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <TestimonialItem data={testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* *******   Animation start  ********* */}

            <div className="dot">
                <CustomImage src="/image/icons/dot-line.png" />
            </div>

            <div className="dot dot2">
                <CustomImage src="/image/icons/dot-line.png" />
            </div>
        </div>
    )
}

export default Testimonial
