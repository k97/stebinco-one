'use client'

import Script from "next/script"
import * as gtag from "../lib/gtag"
import { CMS } from "../lib/constants"

const GoogleAnalytics = () => {

    //You can show in the console the GA_TRACKING_ID to confirm
    // console.log(CMS.GoogleAnalyticsId)

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${CMS.GoogleAnalyticsId}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${CMS.GoogleAnalyticsId}', {
                      page_path: window.location.pathname,
                      });
                    `,
                }}
            />
        </>
    )
}

export default GoogleAnalytics
