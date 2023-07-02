import React from 'react'
import { TestimonialItemPros } from './testimonial.interface'
import CustomImage from '../CustomImage/CustomImage.component'

const TestimonialItem = ({
    data: { name, designation, description, image },
}: TestimonialItemPros): React.JSX.Element => {
    return (
        <div className="testimonial-block">
            <div className="testimonial-img-container">
                <div className="testimonial-mini-img-container">
                    <CustomImage src={image} />
                </div>
            </div>

            <div className="testimonial-content">
                <p className="testimonial-para">{description}</p>
                <h5 className="testimonial-name">{name}</h5>
                <h4 className="testimonial-designation">{designation}</h4>
            </div>
        </div>
    )
}

export default TestimonialItem
