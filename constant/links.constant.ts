import Facebook from '../svg/facebook.svg'
import Instagram from '../svg/instagram.svg'
import WhatsApp from '../svg/whatsApp.svg'
import LinkedIn from '../svg/linkedIn.svg'
import GitHub from '../svg/github.svg'
import Twitter from '../svg/twitter.svg'

export const NAV_LINKS = [
    {
        page: 'Home',
        link: '#home',
    },
    {
        page: 'About',
        link: '#about',
    },
    {
        page: 'Portfolio',
        link: '#portfolio',
    },
    {
        page: 'Contact',
        link: '#contact',
    },
]

export const SOCIAL_LINKS = [
    {
        icon: GitHub,
        link: 'https://github.com/Ashish8689',
    },
    {
        icon: LinkedIn,
        link: 'https://www.linkedin.com/in/ashish-gupta8689',
    },
    {
        icon: Twitter,
        link: 'https://twitter.com/Ashish_G8689',
    },
    {
        icon: Instagram,
        link: 'https://www.instagram.com/ashishgupta9394/',
    },
    {
        icon: WhatsApp,
        link: 'https://wa.me/+918689868867',
    },
    {
        icon: Facebook,
        link: 'https://www.facebook.com/profile.php?id=100004838256907',
    },
]

// eslint-disable-next-line no-useless-escape
export const REGEX_SCROLL = /.*\#/
