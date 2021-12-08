import Image from "next/image";
import supportimage from "../assets/supportimage.svg"
import Link from "next/link";

const supportteam = () => {
    return (
        <section id="support" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center text-white opacity-80">
                        Support
                    </h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={supportimage} alt="support image" width="1440" height="720" priority />


                    <p className="mt-4 flex text-lg text-center text-white bg-opacity-60 ">
                        We provide a great support across all services to make your life easier and draw a great yet efficient way for your business !                    </p>



                    <p className="mt-4 flex text-lg text-center text-white bg-opacity-60 ">
                        If you need any support or even ask a question we provide those contact methods :</p>
                    <div className="flex items-center   mt-12 mb-8">
                        <Link href="/contact" passHref>
                            <button className="btn btn-white ">Contact Us</button>
                        </Link>

                    </div>


                </div>
            </div>
        </section>

    );

};

export default supportteam;