'use client';

import { Righteous } from 'next/font/google';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';

const logoFont = Righteous({ weight: '400', subsets: ['latin'] });

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop >= 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed z-50 mx-auto flex w-full max-w-screen-xl items-center justify-between border-b px-5 py-5 md:px-20  ${
                isScrolled
                    ? 'border-b-slate-600 backdrop-blur-lg'
                    : 'border-b-transparent bg-gradient-to-b from-slate-900 to-transparent'
            }`}
        >
            <Link
                href={'/'}
                className={`${logoFont.className} bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-4xl text-transparent`}
            >
                CM
            </Link>

            <ul className='hidden gap-7 font-semibold md:flex'>
                <li className='cursor-pointer bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text transition-all duration-100 hover:text-transparent'>
                    Popular
                </li>
                <li className='cursor-pointer bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text transition-all duration-100 hover:text-transparent'>
                    Now Playing
                </li>
                <li className='cursor-pointer bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text transition-all duration-100 hover:text-transparent'>
                    Upcoming
                </li>
            </ul>

            <MenuIcon className='block h-10 w-10 md:hidden' />
        </nav>
    );
}

export default Navbar;
