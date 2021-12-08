import Link from "next/link";
const footer = () => {
    return (

        <footer class="py-20 pt-20 lg:mt-24">
            <div class="container flex flex-col md:flex-row items-center">
                <div class="flex flex-1 flex-wrap items-center justify-center md:justify-centre gap-12">

                    <ul class="flex text-white uppercase gap-12 text-xs">
                        <Link href='/privacy-policy'>
                            <li class="cursor-pointer">Privacy Policy</li>
                        </Link>
                        <Link href='/terms-conditions'>
                            <li class="cursor-pointer">Terms And Conditions</li>
                        </Link>
                    </ul>
                </div>

            </div>
        </footer>




    );

};

export default footer;