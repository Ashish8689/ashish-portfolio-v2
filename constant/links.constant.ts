import Facebook from '../svg/facebook.svg'
import Instagram from '../svg/instagram.svg'
import WhatsApp from '../svg/whatsApp.svg'
import LinkedIn from '../svg/linkedIn.svg'
import GitHub from '../svg/github.svg'
import Twitter from '../svg/twitter.svg'

export enum SOCIAL_LINKS {
    GITHUB = 'https://github.com/Ashish8689',
    LINKEDIN = 'https://www.linkedin.com/in/ashish-gupta8689',
    TWITTER = 'https://twitter.com/Ashish_G8689',
    INSTAGRAM = 'https://www.instagram.com/ashishgupta9394/',
    WHATSAPP = 'https://wa.me/+918689868867',
    FACEBOOK = 'https://www.facebook.com/profile.php?id=100004838256907',
}

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

export const SOCIAL_LINK_OPTIONS = [
    {
        icon: GitHub,
        link: SOCIAL_LINKS.GITHUB,
    },
    {
        icon: LinkedIn,
        link: SOCIAL_LINKS.LINKEDIN,
    },
    {
        icon: Twitter,
        link: SOCIAL_LINKS.TWITTER,
    },
    {
        icon: Instagram,
        link: SOCIAL_LINKS.INSTAGRAM,
    },
    {
        icon: WhatsApp,
        link: SOCIAL_LINKS.WHATSAPP,
    },
    {
        icon: Facebook,
        link: SOCIAL_LINKS.FACEBOOK,
    },
]

// eslint-disable-next-line no-useless-escape
export const REGEX_SCROLL = /.*\#/
