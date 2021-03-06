import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Logo from "../assets/logo.svg"
import { motion } from 'framer-motion';
const Header = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <section className='fixed w-full z-20 top-0 '>
            <nav className=' flex  items-center flex-wrap p-3 mt-0 bg-black  px-4 '>
                <Link href='/'>
                    <a className='logo-icon inline-flex items-center p-2 mr-4 w-10 h-10  '>


                        <Image src={Logo} alt="" height="25" width="25" />
                    </a>
                </Link>
                <motion.button aria-label="menu-button" whileTap={{ scale: 0.9 }}
                    className=' inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                    onClick={handleClick}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </motion.button>

                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <motion.div whileTap={{ scale: 1.2 }} transition={{ duration: 0.2 }} className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto '>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full transition duration-500 ease-in-out text-white  font-bold items-center justify-center  hover:text-purple-900 text-opacity-75'>
                                Home
                            </a>
                        </Link>
                        <Link href='/#services' scrollSmooth>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full transition duration-500 ease-in-out text-white   font-bold items-center justify-center hover:text-purple-900 text-opacity-75  '>
                                Services
                            </a>
                        </Link>
                        <Link href='/#about' scrollSmooth>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full transition duration-500 ease-in-out text-white  font-bold items-center justify-center hover:text-purple-900  text-opacity-75'>
                                About
                            </a>
                        </Link>
                        <Link href='/contact'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-full transition duration-500 ease-in-out text-white  font-bold items-center justify-center hover:text-purple-900 text-opacity-75'>
                                Contact
                            </a>
                        </Link>
                    </motion.div>
                </div>
            </nav>
        </section>

    );

};

export default Header;
