'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/constant/links.constant'
import GithubIcon from '../../svg/github.svg'

const Navbar: React.FC = () => {
    const [isPageScrolling, setIsPageScrolling] = useState(false)
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

    const changeBackground = (): void => {
        if (window.scrollY >= 100) {
            setIsPageScrolling(true)
        } else {
            setIsPageScrolling(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    const handleHamburger = (): void => setIsHamburgerOpen(!isHamburgerOpen)

    const handleNavLinkClick = (): void => setIsHamburgerOpen(false)

    return (
        <div className={isPageScrolling ? 'nav active' : 'nav'}>
            <div className="container">
                <div className="logo-block">
                    <Link href="/">
                        <h1 className="logo">Ashish</h1>
                    </Link>
                </div>

                <div className="side-menu">
                    <ul
                        className={
                            isHamburgerOpen ? 'nav-list active' : 'nav-list'
                        }
                    >
                        {NAV_LINKS.map(({ page, link }, index) => (
                            <Link
                                className="nav-link"
                                href={link}
                                key={index}
                                onClick={handleNavLinkClick}
                            >
                                {page}
                            </Link>
                        ))}

                        <Link
                            className="nav-link"
                            href="https://github.com/Ashish8689"
                        >
                            <GithubIcon className="github" />
                        </Link>
                    </ul>
                </div>

                <div className="hamburger" onClick={handleHamburger}>
                    <span
                        className={
                            isHamburgerOpen ? 'span span1 active' : 'span span1'
                        }
                    />
                    <span
                        className={
                            isHamburgerOpen ? 'span span2 active' : 'span span2'
                        }
                    />
                </div>
            </div>

            <div className="box-bar" />
            <div className="circle-round" />
        </div>
    )
}

export default Navbar
