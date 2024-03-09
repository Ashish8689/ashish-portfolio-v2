import { AboutTab } from '@/component/About/about.interface'

export const ABOUT_TABS = [
    {
        tab: AboutTab.PERSONAL,
        label: 'Personal Info',
    },
    {
        tab: AboutTab.EDUCATION,
        label: 'Education',
    },
    {
        tab: AboutTab.COMPANY,
        label: 'Company',
    },
]

export const EDUCATION_DETAILS = [
    {
        degreeType: 'School',
        degree: 'SSC',
        college: 'Ideal English High School',
        board: 'Maharashtra Board',
        year: '2014 - 2015',
    },
    {
        degreeType: 'Junior College',
        degree: 'HSC',
        college: "The BSGD's Junior College",
        board: 'Maharashtra Board',
        year: '2016 - 2017',
    },
    {
        degreeType: 'Bachelors',
        degree: 'BCA',
        college: 'Atharva Institute of Information Technology',
        board: 'Yashwantrao Chavan Maharashtra Open University',
        year: '2017 - 2020',
    },
    {
        degreeType: 'Masters',
        degree: 'M.SC CA',
        college: 'Little Flower Institute of Information Technology',
        board: 'Tilak Maharashtra Vidyapeeth, Pune',
        year: '2022 - 2024',
    },
]

export const COMPANY_DETAILS = [
    {
        company: 'Collate',
        company_url: 'https://www.getcollate.io/',
        company_logo: '/image/company/collate.jpeg',
        year: 'Aug 2022 - Present • Full Time',
        location: 'Saratoga, California, United States',
        designation: 'Software Engineer',
    },
    {
        company: 'Deuex Solutions Pvt Ltd.',
        company_url: 'https://deuexsolutions.com/',
        company_logo: '/image/company/deuex.jpeg',
        year: 'July 2021 - Present • Full Time',
        location: 'Mira Bhayandar, Maharashtra, India',
        designation: 'Software Engineer',
    },
    {
        company: 'Hospitality Minds',
        company_url: 'https://hospitalityminds.com/',
        company_logo: '/image/company/hospitality-minds.jpeg',
        year: 'December 2020 - Jul 2021 • 8 Months',
        location: 'Mumbai, Maharashtra, India',
        designation: 'Web Developer',
    },
]
