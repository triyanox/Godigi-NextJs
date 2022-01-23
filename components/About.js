import { motion } from "framer-motion";
import Image from "next/image";
import Achaq from "../assets/achaq.png"
import Link from "next/link";
const About = () => {
    return (
        <section id="about" className="py-20 pt-20 lg:mt-12">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <motion.h1 whileInView={{ scale: 1.1 }} transition={{ duration: .7 }} className="text-3xl text-center  bg-gradient-to-r from-purple-900 to-purple-600 text-transparent bg-clip-text opacity-90">
                        About Us
                    </motion.h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <div>
                        <Image className=" mb-4 w-20 h-20 items-center rounded-full mx-auto select-none" src={Achaq} alt="" width="200" height="200" quality={100} />
                    </div>
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center items-center  mt-2">
                        <p className="mt-6 px-8 flex text-lg text-center text-white opacity-75">Mohamed Achaq, an entrepreneur, graphic designer, Web developer and music producer from Morocco.he established Godigi as Digital Marketing agency in collaboration with some talented freelencers to bring the full package of digital marketing to small and medium businesses, to help them grow in the digital market and reach more customers !</p>

                        <p className="mt-4 mx-auto  font-medium text-center  bg-gradient-to-r from-purple-900 to-purple-600 text-transparent bg-clip-text">
                            Mohamed Achaq
                        </p>
                        <p className="mt-2 mx-auto  font-medium  text-center text-white opacity-60">
                            Developer, Morocco
                        </p>

                        <span className="flex mx-auto sm:mt-0 mt-4 items-center justify-center  pt-6">
                            <Link href="https://www.twitter.com/ac__haq/" passHref >
                                <a className="text-blue-400">
                                    <svg fill="currentColor" stroke-Linecap="round" stroke-Linejoin="round" stroke-Width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                            </Link>

                            <Link href="https://www.instagram.com/ac.haq/" passHref >
                                <a className="ml-3 text-pink-600 ">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>

            </div>

        </section>

    );

};

export default About;
