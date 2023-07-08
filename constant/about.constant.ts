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
        degree: 'MCA',
        college: 'Little Flower Institute of Information Technology',
        board: 'Tilak Maharashtra Vidyapeeth, Pune',
        year: '2022 - 2024',
    },
]
