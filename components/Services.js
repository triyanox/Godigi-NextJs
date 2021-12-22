import Image from "next/image";
import Link from "next/link";
import UiandUxIllustration from "../assets/UiandUxIllustration.svg"
import React from "../assets/React.svg"
import Hosting from "../assets/Hosting.svg"
import Support from "../assets/Support.svg"
import Digitalmarketing from "../assets/digitalmarketing.svg"
import { motion } from "framer-motion";


const Services = () => {
    return (

        <section id="services" className=" py-20 pt-20 lg:mt-24">
            <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2">
                <motion.h1 whileInView={{ scale: 1.1 }} transition={{ duration: .7 }} className="text-3xl text-center bg-gradient-to-r from-purple-900 to-purple-600 text-transparent bg-clip-text opacity-90">
                    Our Services
                </motion.h1>
                <p className="text-center text-white opacity-75 mt-4">
                    We offer great web developement services to satisfy your needs
                </p>
            </div>
            <div className="relative mt-20 lg:mt-24 ">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <motion.div whileInView={{ scale: .8 }} transition={{ duration: .7 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Image className="w-5/6 h-5/6 sm:w-2/4 sm:h-2/4 md:w-full md:h-full select-none  " src={UiandUxIllustration} alt="Godigi UI/UX Illustartion" width={500} height={500} priority />
                    </motion.div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl  bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text opacity-80">
                            Modern UI/UX Design
                        </h1>
                        <p className="text-white opacity-75 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            Run your business more effectively with platform-specific adaptive and responsive web designs, adapted to each device type, needs, and environment with UX design services.
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <Link href="/webdesign" passHref>
                                <button className="btn btn-white ">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <motion.div whileInView={{ scale: .8 }} transition={{ duration: .7 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Image className="w-5/6 h-5/6 sm:w-2/4 sm:h-2/4 md:w-full md:h-full  select-none " src={React} alt="Godigi Web Developemt Illustration" width={500} height={500} priority />
                    </motion.div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl  bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text opacity-80">
                            Modern Coding
                        </h1>
                        <p className="text-white opacity-75 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            We are using up to date web development technologies using  React with NextJS FrameWork,TailwindCSS insted of plain CSS, and we delever a clean code, better performance and relible websites.

                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <Link href="/coding" passHref>
                                <button className="btn btn-white ">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <motion.div whileInView={{ scale: .8 }} transition={{ duration: .7 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Image className="w-5/6 h-5/6 sm:w-2/4 sm:h-2/4 md:w-full md:h-full  select-none " src={Hosting} alt="Godigi Hosting Illustration" width={500} height={500} priority />
                    </motion.div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl  bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text opacity-80">
                            Fast And Relible Hosting Solutions
                        </h1>
                        <p className="text-white opacity-75 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            Our managed hosting services offer a flexible, low-cost web hosting solution tailored for your business. As your provider, we’ll take care of all daily hosting operations.

                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <Link href="/hosting" passHref>
                                <button className="btn btn-white ">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <motion.div whileInView={{ scale: .8 }} transition={{ duration: .7 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Image className="w-5/6 h-5/6 sm:w-2/4 sm:h-2/4 md:w-full md:h-full select-none " src={Digitalmarketing} alt="Godigi Digital Marketing Iluustration" width={500} height={500} priority />
                    </motion.div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl  bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text opacity-80">
                            Digital Marketing To Backup Your Business
                        </h1>
                        <p className="text-white opacity-75 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            During this Covid-19 situation, the best way to bring traffic and drive more customers to your business is digital marketing, and by using all the available tools, we will give your brand more exposure and reach more clients for you !
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <Link href="/marketing" passHref>
                                <button className="btn btn-white ">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative mt-20 lg:mt-24">
                <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <motion.div whileInView={{ scale: .8 }} transition={{ duration: .7 }} className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Image className="w-5/6 h-5/6 sm:w-2/4 sm:h-2/4 md:w-full md:h-full select-none " src={Support} alt="Godigi Support Illustration" width={500} height={500} priority />
                    </motion.div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h1 className="text-3xl  bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text opacity-80">
                            Great Support And Fast Delevery
                        </h1>
                        <p className="text-white opacity-75 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
                            We provide a fast lane support to deliver a sustained service for your business and keep it up to date with major improvements and bug fixes.

                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <Link href="/support" passHref>
                                <button className="btn btn-white ">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>



        </section >

    );

};

export default Services;