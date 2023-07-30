import CustomImage from '@/component/CustomImage/CustomImage.component'
import Modal from '@/component/Modal/Modal.component'
import React, { useState } from 'react'
import { PortfolioProps } from './portfolio.interface'

const PortfolioItem = ({ data }: PortfolioProps): React.JSX.Element => {
    const { img, type } = data
    const [show, setShow] = useState(false)

    return (
        <>
            <div className={`filter-item ${type}`}>
                <div className="grid-img-container">
                    <CustomImage src={img} />
                </div>
                <div className="grid-content">
                    <span onClick={() => setShow(true)}>Details</span>
                </div>
            </div>

            <Modal data={data} show={show} onClose={() => setShow(false)} />
        </>
    )
}

export default PortfolioItem
