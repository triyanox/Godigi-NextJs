import Image from "next/image";
import HostingImage from "../assets/HostingImage.png"

const Hostingservices = () => {
    return (
        <section id="hosting" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center text-white opacity-80">
                        The Best Web Hosting Solutions
                    </h1>

                </div>
                <div className="container flex flex-col gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={HostingImage} alt="" width="1460" height="730" priority />


                    <p className="mt-4 flex text-lg text-left text-white bg-opacity-60 ">
                        To make your website public on the internet you will need a fast and relible hosting solution, and to give your website the best web experience we are using a fast yet low cost hosting service to make your life easier, we are using Netlify !</p>

                    <div className=" sm:w-2/4 lg:w-5/12 mt-12 mb-8">
                        <h1 className="text-xl text-left text-white opacity-80">So what exactly is Netlify?
                        </h1>

                    </div>

                    <p className="mt-4 flex text-lg text-left text-white bg-opacity-60 ">
                        A platform that offers cloud hosting and
                        serverless backend services for static websites.
                        Netlify is everything you need to build fast, modern websites: continuous deployment, serverless functions, and so much more.

                        I could try to go further and explain this, but it would take a whole new article to achieve that.

                        But like the definition says, Netlify offers you cloud hosting services as well as present you with the ability to handle backend operations with its serverless backend service.</p>

                </div>
            </div>
        </section>

    );

};

export default Hostingservices;