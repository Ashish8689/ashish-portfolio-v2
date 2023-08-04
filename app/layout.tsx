import './globals.css'
import './style/navbar.css'
import './style/footer.css'
import './style/scroll.css'
import './style/contentHeader.css'
import './style/header.css'
import './style/about.css'
import './style/skills.css'
import './style/service.css'
import './style/landingPortfolio.css'
import './style/hire.css'
import './style/testimonial.css'
import './style/contact.css'
import './style/modal.css'

import './style/portfolio.css'
import './style/open-source.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

// Calendar
import './style/contributionCalendar.css'

import Footer from '@/component/Footer/Footer.component'
import Navbar from '@/component/Navbar/Navbar.component'
import ScrollTop from '@/component/ScrollTop/ScrollTop.component'
import { HOST_PORT, META_KEYWORDS } from '@/constant/meta.constant'

export const metadata = {
    title: 'Ashish Gupta | Software Engineer',
    description:
        'Experienced Software Engineer based in Mumbai who focus on Client Satisfaction.',
    openGraph: {
        title: 'Ashish Gupta',
        description:
            'Experienced Software Engineer based in Mumbai who focus on Client Satisfaction.',
        url: HOST_PORT,
        siteName: 'Ashish Gupta',
        images: [
            {
                url: `${HOST_PORT}/image/ogimages/cover.png`,
                width: 1200,
                height: 600,
                alt: 'ashish gupta',
                type: 'image/png',
            },
        ],
    },
    canonical: HOST_PORT,
    additionalLinkTags: [
        {
            rel: 'icon',
            href: `${HOST_PORT}/favicon.ico`,
        },
        {
            rel: 'apple-touch-icon',
            href: `${HOST_PORT}/favicon.ico`,
        },
    ],
    additionalMetaTags: [
        {
            property: 'keywords',
            name: 'keywords',
            content: META_KEYWORDS,
        },
        {
            property: 'author',
            name: 'author',
            content: 'Ashish Gupta',
        },
    ],
    twitter: {
        site: '@theashishgupta',
        cardType: 'summary_large_image',
    },
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
