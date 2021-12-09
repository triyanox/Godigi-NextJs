import Image from "next/image";
import Contactillustration from "../assets/contactillustration.svg"
import { motion } from "framer-motion";

const Contactform = () => {
    return (

        <section className=" py-20 pt-20 lg:mt-24">
            <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2">
                <h1 className="text-3xl text-center bg-gradient-to-r from-purple-900 to-purple-600 text-transparent bg-clip-text opacity-90">
                    Contact Us
                </h1>
                <p className="text-center text-white opacity-75 mt-4">
                    Fill the following form to get in touch with us
                </p>
            </div>
            <div className="relative mt-16 lg:mt-24">
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .4
                        }
                    },
                }} className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                    <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
                        <Image className="w-5/6 h-5/6 sm:w-2/4 sm:h-2/4 md:w-full md:h-full  " src={Contactillustration} alt="Godigi ui/ux" width={500} height={500} priority />
                    </div>
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <form name="contactus" method="POST" data-netlify="true" className="flex flex-1 flex-col items-center lg:items-start"   >
                            <input type="hidden" name="contactus" value="contact" />

                            <span className="uppercase text-sm text-white opacity-75 ">Full Name</span>
                            <input name="cname" type="text" className="w-full bg-white text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
                                required />


                            <span className="mt-8 uppercase text-sm text-white opacity-75 ">Email</span>
                            <input name="cemail" type="email" className="w-full bg-white text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline"
                                required />

                            <span className="mt-8 uppercase text-sm text-white opacity-75 ">Message</span>
                            <textarea name="cmessage"
                                className="w-full h-28 bg-white text-gray-900 mt-2 p-3  focus:outline-none focus:shadow-outline" required></textarea>
                            <button type="submit"
                                className="mt-8 btn btn-white" >
                                Send Message
                            </button>

                        </form>
                    </div>
                </motion.div>

            </div>


        </section >

    );

};

export default Contactform;
