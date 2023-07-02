'use client'

import Contact from '@/component/Contact/Contact.component'
import Header from '@/component/Header/Header.component'
import Hire from '@/component/Hire/Hire.component'
import Service from '@/component/Service/Service.component'
import Testimonial from '@/component/Testimonial/Testimonial.component'
import { useEffect } from 'react'

const Home: React.FC = () => {
    useEffect(() => {
        const cursor = document.querySelector('.cursor')
        const cursor2 = document.querySelector('.cursor2')

        window.addEventListener('mousemove', function (e) {
            cursor.style.cssText = cursor2.style.cssText =
                'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;'
        })
    })

    return (
        <div>
            <Header />
            <Service />
            <Hire />
            <Testimonial />
            <Contact />

            <div className="cursor" />
            <div className="cursor2" />
        </div>
    )
}

export default Home
