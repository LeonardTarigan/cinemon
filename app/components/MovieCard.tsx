import { convertToUrlFormat, formatDate } from '@/utils/globalFunctions';
import { Movie } from '@/utils/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties } from 'react';

const getColor = (vote: number) => {
    if (vote >= 7.0) return 'text-emerald-500 border-emerald-500';
    if (vote >= 4.0) return 'text-yellow-500 border-yellow-500';
    if (vote > 0) return 'text-rose-500 border-rose-500';
    return 'text-slate-400 border-slate-400';
};

function MovieCard({
    id,
    title,
    poster_path,
    release_date,
    vote_average,
}: Movie) {
    return (
        <Link
            href={`/movie/${id}-${convertToUrlFormat(title)}`}
            className='group carousel-item flex w-44 flex-col overflow-hidden rounded-md bg-slate-800 hover:bg-slate-700'
        >
            <div className='relative aspect-[2/3] w-44 bg-slate-700'>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title + ' poster'}
                    fill
                    className='object-cover brightness-75 transition-all duration-100 group-hover:brightness-100'
                />
            </div>
            <div className='relative px-4 pb-6 pt-8 text-sm'>
                <div
                    style={
                        {
                            '--value': vote_average * 10,
                            '--size': '3.2rem',
                            '--thickness': '4px',
                        } as CSSProperties
                    }
                    className={`${getColor(
                        vote_average
                    )} radial-progress absolute -top-8  bg-slate-800 text-xs font-bold`}
                >
                    <span>
                        {vote_average > 0
                            ? `${Number(vote_average.toFixed(1)) * 10}%`
                            : 'NR'}
                    </span>
                </div>
                <p className='text-xs font-medium text-slate-400'>
                    {formatDate(release_date)}
                </p>
                <h2 className='line-clamp-1 font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default MovieCard;
