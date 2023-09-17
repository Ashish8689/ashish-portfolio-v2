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
import 'react-calendar-heatmap/dist/styles.css'

import Footer from '@/component/Footer/Footer.component'
import Navbar from '@/component/Navbar/Navbar.component'
import ScrollTop from '@/component/ScrollTop/ScrollTop.component'
import { HOST_PORT, META_KEYWORDS } from '@/constant/meta.constant'

export const metadata = {
    title: 'Ashish Gupta | Software Engineer',
    description:
        'Experienced Software Engineer based in Mumbai who focus on Client Satisfaction.',

    generator: 'Next.js',
    applicationName: 'Ashish Gupta Portfolio',
    referrer: 'origin-when-cross-origin',
    keywords: META_KEYWORDS,
    authors: [{ name: 'Ashish Gupta' }, { name: 'Ashish', url: HOST_PORT }],
    creator: 'Ashish Gupta',
    publisher: 'Ashish Gupta',
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    openGraph: {
        title: 'Ashish Gupta | Software Engineer',
        description:
            'Experienced Software Engineer based in Mumbai who focus on Client Satisfaction.',
        url: HOST_PORT,
        siteName: 'Ashish Gupta',
        images: [
            {
                url: `${HOST_PORT}image/ogimages/cover.jpg`,
                width: 1200,
                height: 600,
                alt: 'Ashish gupta',
            },
            {
                url: `${HOST_PORT}image/ogimages/cover.jpg`,
                width: 1800,
                height: 1600,
                alt: 'Ashish gupta',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    manifest: 'https://nextjs.org/manifest.json',
    themeColor: '#7a57d1',
    canonical: HOST_PORT,
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/apple-touch-icon.png',
        },
    },
    twitter: {
        card: 'app',
        title: 'Ashish Gupta | Software Engineer',
        description:
            'Experienced Software Engineer based in Mumbai who focus on Client Satisfaction.',
        creator: '@Ashish_G8689',
        images: {
            url: `${HOST_PORT}image/ogimages/cover.jpg`,
            alt: 'Ashish Gupta logo',
            type: 'image/jpeg',
        },
        app: {
            name: 'twitter_app',
            id: {
                iphone: 'twitter_app://iphone',
                ipad: 'twitter_app://ipad',
                googleplay: 'twitter_app://googleplay',
            },
            url: {
                iphone: 'https://iphone_url',
                ipad: 'https://ipad_url',
            },
        },
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
