import { appKeywords } from '@/utils/keywords';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const mainFont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CINEMON',
    description:
        'Discover an extensive collection of movies, TV shows, and fascinating personalities. Explore our vast library now and experience the magic of cinema like never before.',
    keywords: appKeywords,
    authors: [
        {
            name: 'Leonard Tarigan',
            url: 'https://github.com/LeonardTarigan',
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${mainFont.className} mx-auto max-w-screen-xl bg-slate-900 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
