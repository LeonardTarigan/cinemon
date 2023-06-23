'use client';

import Image from 'next/image';
import React from 'react';
import MoviePoster from '../../public/hero-poster.jpg';
import { Righteous } from 'next/font/google';
import { motion } from 'framer-motion';

const logoFont = Righteous({ weight: '400', subsets: ['latin'] });

function Hero() {
    return (
        <section className='relative flex h-screen items-center justify-center bg-gradient-to-t from-slate-900 to-transparent md:h-[35rem]'>
            <div className='flex flex-col items-center gap-5 p-5 text-center md:w-4/5 lg:w-2/3'>
                <Image
                    src={MoviePoster}
                    alt='Movie Posters'
                    fill
                    placeholder='blur'
                    className='-z-10 object-cover brightness-50'
                />

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className='text-5xl font-bold'
                >
                    WELCOME TO{' '}
                    <span
                        className={`${logoFont.className} bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent`}
                    >
                        CINEMON
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                >
                    Discover an extensive collection of movies, TV shows, and
                    fascinating personalities. Explore our vast library now and
                    experience the magic of cinema like never before.
                </motion.p>

                <div className='flex w-full items-center backdrop-blur-md sm:w-2/3'>
                    <input
                        type='text'
                        placeholder='Find Your Favourite Movie'
                        className='h-full grow rounded-l-full border-2 border-slate-600 bg-transparent py-2 pl-4 font-medium placeholder-slate-500 transition-all duration-100 focus:border-white focus:outline-none'
                    />
                    <button className='rounded-r-full bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 font-semibold transition-all duration-100 hover:to-transparent'>
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
