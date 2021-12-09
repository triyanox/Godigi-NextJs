import Image from "next/image";
import UIUX from "../assets/uiux.png"

const Design = () => {
    return (
        <section id="webdesign" className="py-20 pt-20 px-10 lg:mt-16">
            <div className="relative mt-2 lg:mt-6">
                <div className="sm:w-2/4 lg:w-5/12 mx-auto px-2 mb-20">
                    <h1 className="text-3xl text-center text-white opacity-80">
                        Modern UI and UX
                    </h1>

                </div>
                <div className="container flex flex-col  gap-x-24">
                    <Image className=" mb-16  items-center  mx-auto" src={UIUX} alt="" width="1400" height="733" priority />


                    <p className="mt-4 flex text-lg text-left text-white bg-opacity-60 ">
                        Most users leave a website in just 10-20 seconds. Over 28% of people uninstall an app within only two days of installing it. After seeing the disheartening stats, you’re probably asking: Why? Researchers asked the same question, and they found poor UI/UX design (User interface/ user experience design) to be the top reason why people stop engaging with a website or app. UI/UX is the most crucial aspect of a business, with the potential to make or break your brand.

                        Unfortunately, UI/UX is often underestimated and many businesses pay price in terms of user engagement and website traffic. Don’t allow your business to suffer the same fate. Here is why a good UI/UX is essential for your business :
                    </p>

                    <div className=" mt-12 mb-8">
                        <h1 className="text-xl text-left text-white opacity-80">Great UI/UX Increased Customer Satisfaction:</h1>

                    </div>

                    <p className="mt-4 flex text-lg text-left text-white bg-opacity-60 ">
                        A bad UI/UX drives users away from your website or app. It results in nothing but poor customer satisfaction. On the other hand, an interactive UI/UX keeps users hooked and customers satisfied. It also increases the return of investment (ROI). That’s why it’s important to ensure an excellent UI/UX quality.
                    </p>
                    <div className="  mt-12 mb-8">
                        <h1 className="text-xl text-left text-white opacity-80">Users Stay Hooked on an Interactive UI/UX:
                        </h1>

                    </div>

                    <p className="mt-4 flex text-lg text-left text-white bg-opacity-60 ">
                        According to a Microsoft study in Time magazine, humans have an attention span of only 8 seconds. This means users can focus on your website/app for only 8 seconds. After that, they either stay or leave.

                        Now, the users’ decision to explore or leave depends entirely on the UI/UX of your website or mobile app. If these users like the UI/UX and get the information they are looking for, they will stay for a couple of minutes or sometimes hours. That’s why your business should emphasize offering useful information along with interactive user experience.

                    </p>
                    <div className=" mt-12 mb-8">
                        <h1 className="text-xl text-left text-white opacity-80">Good UI/UX Helps To Establish Brand Reputation:</h1>

                    </div>

                    <p className="mt-4 flex text-lg text-left text-white bg-opacity-60 ">
                        The first impression is the last impression. Did you know that over 75% of users make purchasing decisions based on colors? This means more than half of Internet users will not even bother to check your app or website if they don’t find the color appealing.

                        Therefore, you need to be careful while building the user experience of your app/website. You need to research what element your users like and what they don’t, and then design the user experience accordingly.

                        This can save you from making critical UI/UX mistakes, and it will establish your reputation in the market. This is especially helpful if you are a small startup. A flawless and interactive UI/UX can help in establishing your market reputation as a brand.


                    </p>
                    <div className="  mt-12 mb-8">
                        <h1 className="text-xl text-left text-white opacity-80">You Get More Traffic on a Great UI/UX:
                        </h1>

                    </div>

                    <p className="mt-4 flex text-lg text-left text-white bg-opacity-60 ">
                        IT is a competitive field. Over a hundred companies out there are offering the same type of products and services. How will you stand out? What will you do to make sure users pay attention to your website/app? Well, that’s where the UI/UX comes into play.

                        A great UI/UX always makes users stay. If your website/app is designed brilliantly and user experience is spectacular, nothing can stop them from navigating to the pre-determined target and turning them into valuable customers. Hence, it’s the responsibility of you and the UI/UX Developers’ responsibility to ensure the highest quality UI/UX of your website/app.
                    </p>
                </div>
            </div>
        </section>

    );

};

export default Design;
