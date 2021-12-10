import Image from "next/image";
import Tci from "../assets/tci.svg"

const tc = () => {
    return (
        <section id="terms-conditions" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center bg-gradient-to-r from-purple-900 to-purple-600 text-transparent bg-clip-text opacity-90">
                        Terms And Conditions
                    </h1>

                </div>
                <div className="container flex flex-col items-center justify-center gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={Tci} alt="" width="500" height="500" priority />


                    <p className="mt-4 mb-10 flex text-lg text-center text-white opacity-90 ">
                        Welcome to Godigi These terms and conditions outline the rules and regulations for the use of Godigi's Website, located at https://godigi.website. By accessing this website we assume you accept these terms and conditions. Do not continue to use Godigi if you do not agree to take all of the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. </p>

                    <ul className="list-outside list-disc">
                        <li className="mt-4 flex text-lg text-left text-purple-900 opacity-90 ">
                            Cookies

                        </li>
                        <li className="mt-4 flex text-lg text-left text-white opacity-90 ">We employ the use of cookies. By accessing Godigi you agreed to use cookies in agreement with the Godigi's Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</li>


                        <li className="mt-4 flex text-lg text-left text-purple-900 opacity-90 ">
                            Content Liability
                        </li>
                        <li className="mt-4 flex text-lg text-left text-white opacity-90 ">We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</li>

                        <li className="mt-4 flex text-lg text-left text-purple-900 opacity-90 ">
                            Your Privacy

                        </li>
                        <li className="mt-4 flex text-lg text-left text-white opacity-90 ">Please read our Privacy Policy </li>


                    </ul>

                </div>
            </div>
        </section>

    );

};

export default tc;