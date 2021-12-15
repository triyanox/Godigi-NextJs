import React from 'react';
import Head from 'next/head';



const Layout = (props) => {
    return (
        <div>
            <Head>
                <html lang="en" />
                <title>{props.pageTitle}</title>
                <meta name="description" content="Web Developement And Digital Marketing Agency In Morocco" />
                <meta name="author" content="Godigi" />
                <meta property="og:site_name" content={props.siteName} key="ogsitename" />
                <meta property="og:title" content={props.pageTitle} key="ogtitle" />
                <meta property="og:description" content={props.description} key="ogdesc" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <div>

                {props.children}
            </div>
        </div>
    )
}
export default Layout;