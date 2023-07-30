import CustomImage from '@/component/CustomImage/CustomImage.component'
import React from 'react'

const loading: React.FC = () => {
    return (
        <div className="loading">
            <CustomImage src="/image/loading.gif" />
        </div>
    )
}

export default loading
