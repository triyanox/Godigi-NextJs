import { motion } from "framer-motion";
import Image from "next/image";
import Achaq from "../assets/achaq.png"

const About = () => {
    return (
        <section id="about" className="py-20 pt-20 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <motion.h1 whileInView={{ scale: 1.1 }} transition={{ duration: .7 }} className="text-3xl text-center  bg-gradient-to-r from-purple-900 to-purple-600 text-transparent bg-clip-text opacity-90">
                        About Us
                    </motion.h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <motion.div whileInView={{ scale: 0.9 }} transition={{ duration: .7 }}>
                        <Image className=" mb-16 w-20 h-20 items-center rounded-full mx-auto" src={Achaq} alt="" width="200" height="200" priority />
                    </motion.div>

                    <p className="mt-4 px-4 flex text-lg text-center text-white bg-opacity-60 ">
                        Mohamed Achaq, an entrepreneur, graphic designer, Web developer and music producer from Morocco.he established Godigi as Digital Marketing agency in collaboration with some talented freelencers to bring the full package of digital marketing to small and medium businesses, to help them grow in the digital market and reach more customers !
                    </p>


                    <div className="mt-4 flex font-medium text-center  bg-gradient-to-r from-pink-500 to-purple-700 text-transparent bg-clip-text">
                        Mohamed Achaq
                    </div>
                    <div className="mt-2 flex font-medium  text-centre text-white opacity-75">
                        Developer, Morocco
                    </div>



                </div>
            </div>
        </section>

    );

};

export default About;