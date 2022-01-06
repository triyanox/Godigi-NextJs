import Image from "next/image";
import Devimage from "../assets/devimage.webp"
import { motion } from "framer-motion";
const Dev = () => {
    return (
        <section id="coding" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center text-white opacity-80">
                        Modern Coding
                    </h1>

                </div>
                <div className="container flex flex-col  gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={Devimage} alt="devimage" width="1200" height="630" priority />




                    <div className=" sm:w-2/4 lg:w-5/12 mt-12 mb-3">
                        <h1 className="text-xl text-left text-purple-500">NextJS : What is it and why do we use it?
                        </h1>

                    </div>

                    <p className="mt-2 flex text-lg text-left text-white text-opacity-75 ">
                        As a digital design and build agency, we have been using Node.js since its very inception. Having identified it as a game changer for us, it has been pivotal in allowing us to deliver highly scalable, data intensive, real time back-end services to power the websites and apps for many of our clients including The Times, Riot Games, The Wall Street Journal and many more. A laser-like focus on speed and performance has always been a guiding star for us. When React JS came along, it was a perfect fit since we were naturally using JavaScript on the front and back-end of our clients’ applications. So as React JS has developed and become almost de facto for building website front-ends, our heads were turned by the benefits of Next.js.                    </p>



                    <div className=" sm:w-2/4 lg:w-5/12 mt-12 mb-3">
                        <h1 className="text-xl text-left text-purple-500">So first up, what is NextJS?
                        </h1>

                    </div>

                    <p className="mt-2 flex text-lg text-left text-white text-opacity-75 ">
                        Quite simply, Next.js is a React framework for developing single page Javascript applications. The benefits of this framework are numerous, both for our clients’ applications as well as for our development team. The more we, as users, interact digitally, the more impatient we become as our expectations are not met by websites and apps that fail to load within milliseconds. Technology decisions play a large part in being able to deliver highly performant, scalable, successful applications and as such, we have started using Next.js for a number of reasons; for the most part related to speed and performance. So what are the benefits specifically?

                    </p>
                    <div className=" sm:w-2/4 lg:w-5/12  mt-12 mb-2">
                        <h1 className="text-xl text-left text-purple-500">The Benifits of using NextJS :
                        </h1>

                    </div>


                </div>
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
                            <h2 class="font-medium title-font text-purple-500 mb-1 text-xl">Development Process</h2>
                            <p class="leading-relaxed text-white">Improved development process = cost and time benefit to our clients.</p>
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
                            <h2 class="font-medium title-font text-purple-500 mb-1 text-xl">Performance</h2>
                            <p class="leading-relaxed text-white">Improved performance = faster applications.</p>
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
                            <h2 class="font-medium title-font text-purple-500 mb-1 text-xl">Seo</h2>
                            <p class="leading-relaxed text-white">Improved SEO = more indexable, SEO friendly applications.</p>
                        </div>
                    </div>
                </div>

            </div>

        </section >

    );

};

export default Dev;
