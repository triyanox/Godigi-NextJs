import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { motion } from 'framer-motion'
import NextNProgress from "nextjs-progressbar";
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';




function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WS8BWZG' });
  }, []);

  return (
    <>
      <NextNProgress height={1} color="#fff" />
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" transition={{ duration: 1 }}
        variants={{ pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 }, }}>
        <Component {...pageProps} />
      </motion.div>
    </>
  )
}

export default MyApp
