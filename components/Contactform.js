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
            <div className="relative mt-16 lg:mt-24 ">
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
                }} className="container flex flex-col lg:flex-row  items-center justify-center gap-x-8">

                    <div className="flex  flex-col items-center mx-auto px-8">
                        <form name="contactus" method="POST" data-netlify="true" className="  flex  flex-col items-center "   >
                            <input type="hidden" name="form-name" value="contactus" />




                            <span className="uppercase text-center mx-auto text-white opacity-75  ">Full Name</span>
                            <input name="cname" type="text" className="w-full text-3xl h-12  text-black  mt-2 p-2 focus:outline-none focus:shadow-outline  shadow-xl rounded  "
                                required />




                            <span className="mt-8 uppercase text-center mx-auto  text-white opacity-75  ">Email</span>
                            <input name="cemail" type="email" className="w-full text-3xl   h-12 text-black mt-2 p-2  focus:outline-none focus:shadow-outline  shadow-xl rounded "
                                required />





                            <span className="mt-8 uppercase text-center mx-auto  text-white opacity-75 dark:text-bright-gray-50   ">Message</span>
                            <textarea name="cmessage"
                                className="w-full text-3xl h-28   text-black   mt-2 p-2  focus:outline-none focus:shadow-outline   shadow-xl rounded " required></textarea>



                            <button type="primary" htmlType="submit"
                                className="mt-8 btn btn-white  mx-auto shadow-xl " >
                                Send A Message
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div >


        </section >

    );

};

export default Contactform;
