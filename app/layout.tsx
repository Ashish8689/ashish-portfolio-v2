import './globals.css'
import './style/navbar.css'
import './style/footer.css'
import './style/scroll.css'
import './style/header.css'
import './style/about.css'
import './style/skills.css'
import './style/service.css'
import './style/landingPortfolio.css'
import './style/hire.css'
import './style/testimonial.css'
import './style/contact.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import Footer from '@/component/Footer/Footer.component'
import Navbar from '@/component/Navbar/Navbar.component'
import ScrollTop from '@/component/ScrollTop/ScrollTop.component'

export const metadata = {
    title: 'Ashish Portfolio website',
    description: 'Generated by create next app',
}

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}): JSX.Element => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
                <ScrollTop />
            </body>
        </html>
    )
}

export default RootLayout
