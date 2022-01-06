import Link from "next/link";
const CTA = () => {
    return (
        <section class="  pt-4 px-10 lg:mt-2" >
            <div class="container  py-8 px-4 mx-auto">
                <div class="lg:w-2/3 flex flex-col sm:flex-row justify-center  items-center sm:text-center bg-gradient-to-r from-purple-900 to-purple-600 mx-auto px-16 py-6 rounded-xl">
                    <h1 class=" sm:pr-16 font-medium sm:text-center  text-white opacity-75 text-md">What are you waiting for ? <br /> Grow your business's presence in the internet with Godigi !</h1>
                    <Link href='/contact' passref>
                        <button class="btn-white flex-shrink-0 border-0 py-2 px-8 focus:outline-none   text-md mt-4 sm:mt-0">Get Started</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA;