'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Righteous } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Drawer from './Drawer';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import { menus } from '@/utils/navMenus';

const logoFont = Righteous({ weight: '400', subsets: ['latin'] });

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop >= 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`fixed z-40 mx-auto flex w-full max-w-screen-xl items-center justify-between border-b px-5 py-5 md:px-20  ${
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
                    {menus.map((menu, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    href={menu.route}
                                    className='cursor-pointer bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text transition-all duration-100 hover:text-transparent'
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <motion.button
                    whileTap={{ rotate: 90 }}
                    onClick={() => setShowDrawer((state) => !state)}
                    className=' block h-10 w-10 md:hidden'
                >
                    <AnimatePresence>
                        {showDrawer ? <XIcon /> : <MenuIcon />}
                    </AnimatePresence>
                </motion.button>
            </nav>
            <AnimatePresence>{showDrawer && <Drawer />}</AnimatePresence>
        </>
    );
}

export default Navbar;
