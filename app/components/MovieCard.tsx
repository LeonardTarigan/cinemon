import { Movie } from '@/utils/interfaces';
import Image from 'next/image';
import Link from 'next/link';

const getColor = (vote: number) => {
    if (vote >= 7.0) return 'text-emerald-500 border-emerald-500';
    if (vote >= 4.0) return 'text-yellow-500 border-yellow-500';
    if (vote > 0) return 'text-rose-500 border-rose-500';
    return 'text-slate-400 border-slate-400';
};

function MovieCard({ title, poster_path, release_date, vote_average }: Movie) {
    return (
        <div className='group carousel-item flex w-44 flex-col rounded-md bg-slate-800 hover:bg-slate-700'>
            <div className='relative aspect-[2/3] w-44 bg-slate-700'>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title + ' poster'}
                    fill
                    className='rounded-t-md object-cover brightness-75 transition-all duration-100 group-hover:brightness-100'
                />
            </div>
            <div className='relative px-4 pb-6 pt-8 text-sm'>
                <div
                    className={`${getColor(
                        vote_average
                    )} absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-800 p-2 font-bold`}
                >
                    <span>
                        {vote_average > 0 ? vote_average.toFixed(1) : 'NR'}
                    </span>
                </div>
                <p className='text-xs font-medium text-slate-400'>
                    {release_date}
                </p>
                <h2 className='line-clamp-1 font-bold'>{title}</h2>
            </div>
        </div>
    );
}

export default MovieCard;
