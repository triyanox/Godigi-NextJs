import Image from "next/image";
import Sc from "../assets/sucess.svg"
import Link from "next/link";

const Sucsess = () => {
    return (
        <section id="404" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center text-white opacity-80">
                        Thank You For Your Submission Will Get Back To You Soon !
                    </h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={Sc} alt="" width="500" height="500" />

                    <div className="flex items-center   mt-12 mb-8">
                        <Link href="/" passHref>
                            <button className="btn btn-white ">Home</button>
                        </Link>

                    </div>

                </div>
            </div>
        </section>

    );

};

export default Sucsess;