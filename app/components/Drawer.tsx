import { menus } from '@/utils/navMenus';
import { motion } from 'framer-motion';
import { Righteous } from 'next/font/google';
import Link from 'next/link';

const logoFont = Righteous({ weight: '400', subsets: ['latin'] });

function Drawer() {
    return (
        <motion.div
            initial={{ x: '-100vh' }}
            animate={{ x: 0 }}
            transition={{
                type: 'spring',
                stiffness: 40,
                mass: 0.8,
                velocity: 0.3,
            }}
            exit={{ x: '-100vh' }}
            className='fixed z-50 flex h-screen w-72 flex-col gap-3 bg-slate-800 p-5'
        >
            <h1
                className={`${logoFont.className} w-fit bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-3xl text-transparent`}
            >
                CINEMON
            </h1>

            <hr className='border-slate-600' />

            <div className='flex flex-col font-semibold'>
                {menus.map((menu, index) => {
                    return (
                        <Link
                            key={index}
                            href={menu.route}
                            className='w-full cursor-pointer rounded-md from-emerald-500 to-sky-500 p-2 transition-all duration-100 hover:bg-gradient-to-r'
                        >
                            {menu.name}
                        </Link>
                    );
                })}
            </div>
        </motion.div>
    );
}

export default Drawer;
