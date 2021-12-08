import Image from "next/image";
import Prpi from "../assets/prpi.svg"

const prp = () => {
    return (
        <section id="privacy-policy" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center bg-gradient-to-r from-purple-900 to-purple-600 text-transparent bg-clip-text opacity-80">
                        Privacy Policy
                    </h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={Prpi} alt="" width="1460" height="730" priority />


                    <h1 className="mt-4 mb-10 flex text-lg text-center text-white opacity-80 ">
                        Personal Data processed for the following purposes :</h1>

                    <ul className="list-outside list-disc">
                        <li className="mt-4 flex text-lg text-left text-purple-900 opacity-80 ">
                            Contacting the User:

                        </li>
                        <li className="mt-4 flex text-lg text-left text-white opacity-50 ">Personal Data: email address, first name, last name, phone number</li>


                        <li className="mt-4 flex text-lg text-left text-purple-900 opacity-80 ">
                            Managing data collection and online surveys:
                        </li>
                        <li className="mt-4 flex text-lg text-left text-white opacity-50 ">Personal Data: email address, first name, last name</li>

                        <li className="mt-4 flex text-lg text-left text-purple-900 opacity-80 ">
                            Interaction with external social networks and platforms:
                            Buttons and social media widgets

                        </li>
                        <li className="mt-4 flex text-lg text-left text-white opacity-50 ">Personal Data: Tracker, Usage Data</li>


                    </ul>

                </div>
            </div>
        </section>

    );

};

export default prp;