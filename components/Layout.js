import React from 'react';
import Head from 'next/head';




const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="theme-color" content="Black" />
                <meta name="description" content="Web Developement And Digital Marketing Agency In Morocco" />
                <meta name="author" content="Godigi" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:site_name" content={props.siteName} key="ogsitename" />
                <meta property="og:title" content={props.pageTitle} key="ogtitle" />
                <meta property="og:description" content={props.description} key="ogdesc" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap" rel="stylesheet" />
            </Head>

            <div className=' font-["Karla"]'>
                {props.children}
            </div>

        </div>
    )
}
export default Layout;