'use client'

import React, { useEffect } from 'react'
import Arrow from '../../svg/Arrow'

const ScrollTop = () => {
    function scrollFunction() {
        const mybutton = document.getElementById('mybtn')
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = 'block'
        } else {
            mybutton.style.display = 'none'
        }
    }

    // When the user click the button,scroll to the top of document

    function topfunction() {
        document.body.scrollTop = 0 // for Safari
        document.documentElement.scrollTop = 0 // for chrome,firefox,and other
    }

    useEffect(() => {
        // Javascript function scrolling up
        // When the user scrolls down 20px from top of the document,button will appear

        window.onscroll = function () {
            scrollFunction()
        }
    })

    return (
        <div className="scrolltop float-right">
            <div id="mybtn" onClick={topfunction}>
                <Arrow className="i" />
            </div>
        </div>
    )
}

export default ScrollTop
