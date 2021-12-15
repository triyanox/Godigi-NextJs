import React from 'react';
import Head from 'next/head';



const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta property="og:site_name" content={props.siteName} key="ogsitename" />
                <meta property="og:title" content={props.pageTitle} key="ogtitle" />
                <meta property="og:description" content={props.description} key="ogdesc" />
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap" rel="stylesheet" />
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Layout;