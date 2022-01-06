import Image from "next/image";
import Heroillustration from "../assets/Heroillustration.svg"
import Link from "next/link";
import { motion } from "framer-motion"

const Hero = () => {
    return (

        <section id="home" className="relative pt-18  ">

            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {

                    opacity: 0
                },
                visible: {

                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                },
            }} className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28  ">
                <div class='flex flex-1 flex-col items-center lg:items-start  '>
                    <h2 className=" bg-gradient-to-r from-purple-900 to-purple-500 text-transparent bg-clip-text text-opacity-80  text-3xl md:text-4 lg:text-4xl text-center lg:text-left mb-6"   >Welcome to Godigi</h2>
                    <p className="text-white text-opacity-75 text-lg text-center lg:text-left mb-6 ">
                        Create your professional website with Godigi and make your business stand out in the digital market.
                        By creating a professional website you will reach more markets and get more customers !
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Link href="/#services" passHref>
                            <button className="btn btn-white ">Discover More</button>
                        </Link>
                    </div>

                </div>

                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <div className="rounded-full mt-16 px-40 py-40  bg-gradient-to-r from-purple-900 to-purple-500 z-0 absolute "></div>
                    <Image className="w-5/6 h-5/6 sm:w-2/4 sm:h-2/4 md:w-full md:h-full overflow-visible z-10 " src={Heroillustration} alt="Godigi Workspace Illustration" width={500} height={500} priority />


                </div>

            </motion.div>
        </section >

    );

};

export default Hero;