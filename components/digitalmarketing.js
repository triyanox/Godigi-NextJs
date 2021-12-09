import Image from "next/image";
import Digitalmarketing from "../assets/dmi.png"
import { motion } from "framer-motion";
const digitalmarketing = () => {
    return (
        <section id="marketing" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center text-white opacity-80">
                        Digital Marketing
                    </h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={Digitalmarketing} alt="digital marketing" width="1281" height="961" priority />

                    <div className="mt-16 px-8">
                        <h1 className="mt-4  flex text-lg text-left text-white opacity-80 ">
                            Digital Marketing is a very importantant part of promotion and grow businesses, nowadays digital marketing or marketing in general is very important than your products or services, so we introduce our way of doing it:</h1>

                    </div>

                    <div class="container px-5 py-24 mx-auto flex flex-wrap">
                        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <motion.div whileInView={{ scale: 0.7 }} transition={{ duration: .7 }} class="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                        <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                    </svg>
                                </motion.div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 class="font-medium title-font text-white mb-1 text-xl">Branding: Be Everywhere</h2>
                                    <p class="leading-relaxed text-white opacity-80">Branding, the best way to make your brand stand out of the crowd, and make it look more professional, and give a step ahead your comptition !</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <motion.div whileInView={{ scale: 0.7 }} transition={{ duration: .7 }} class="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                        <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                    </svg>
                                </motion.div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 class="font-medium title-font text-white mb-1 text-xl">Social Media Management: Be In The Top</h2>
                                    <p class="leading-relaxed text-white opacity-80">Your social media profiles help your brand to grow fast and efficient in the digital community !</p>
                                </div>
                            </div>
                        </div>

                        <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                            </div>
                            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-purple-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <motion.div whileInView={{ scale: 0.7 }} transition={{ duration: .7 }} class="flex-shrink-0 w-24 h-24 bg-gray-800 text-purple-400 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                                        <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                    </svg>
                                </motion.div>
                                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 class="font-medium title-font text-white mb-1 text-xl">Digital Marketing: Reach More</h2>
                                    <p class="leading-relaxed text-white opacity-80">During this Covid-19 situation, the best way to bring traffic and drive more customers to your business is digital marketing, and by using all the available to tools, we will give your brand more exposure and reach more clients for you !</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );

};

export default digitalmarketing;
