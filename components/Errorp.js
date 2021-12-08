import Image from "next/image";
import Errori from "../assets/404imgae.svg"
import Link from "next/link";

const Errorp = () => {
    return (
        <section id="404" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center text-white opacity-80">
                        Mmmmm It seems like you're in the wrong place .....!
                    </h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={Errori} alt="" width="600" height="600" />

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

export default Errorp;