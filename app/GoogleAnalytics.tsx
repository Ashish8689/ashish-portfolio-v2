'use client'

import Script from 'next/script'
import * as gtag from '../gtag.js'

const GoogleAnalytics: React.FC = () => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
                id="gtag-init"
                strategy="afterInteractive"
            />
        </>
    )
}

export default GoogleAnalytics
