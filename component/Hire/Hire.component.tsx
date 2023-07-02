import React from 'react'
import CustomImage from '../CustomImage/CustomImage.component'

const Hire: React.FC = () => {
    return (
        <div className="middle-container">
            <div className="middle-section">
                <h1>Hire me for your awesome project</h1>
                <a className="button" href="tel:8689868867">
                    Contact Me
                </a>

                {/* ********** Animation  ************ */}

                <div className="triangle">
                    <CustomImage src="/image/icons/triangle.png" />
                </div>

                <div className="circle-round" />
                <div className="circle-round round2" />

                <div className="dot-line">
                    <CustomImage src="/image/icons/dot-line.png" />
                </div>
            </div>
            {/* Middle section end  */}

            {/* **********  Animation  *********** */}

            <div className="mini-dot mini-dot2">
                <CustomImage src="/image/icons/mini-dot.png" />
            </div>

            <div className="mini-dot">
                <CustomImage src="/image/icons/mini-dot.png" />
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

            <div className="circle-fill" />
        </div>
    )
}

export default Hire
