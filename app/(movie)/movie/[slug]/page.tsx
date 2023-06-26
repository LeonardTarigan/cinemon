import { getMovieDetail } from '@/app/api';
import RadialProgress from '@/app/components/RadialProgress';
import {
    extractYear,
    formatDate,
    formatMinutes,
    formatMoney,
    joinNames,
} from '@/utils/globalFunctions';
import Image from 'next/image';

interface MovieDetailParams {
    params: {
        slug: string;
    };
}

async function MovieDetail({ params: { slug } }: MovieDetailParams) {
    const movieId = slug.split('-')[0];

    const movieData = await getMovieDetail(parseInt(movieId));

    const {
        title,
        poster_path,
        backdrop_path,
        release_date,
        genres,
        runtime,
        tagline,
        overview,
        vote_average,
        production_companies,
        production_countries,
        spoken_languages,
        revenue,
        budget,
        status,
    } = movieData;
    return (
        <main className='text-sm'>
            <div className='relative flex w-full items-center gap-5 overflow-hidden bg-gradient-to-t from-slate-900 to-transparent px-20 pb-10 pt-28'>
                <Image
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt={title}
                    className='-z-10 object-cover blur-sm brightness-50'
                    fill
                />

                <div className='flex gap-5'>
                    <div className='basis-1/4'>
                        <div className='relative aspect-[2/3] overflow-hidden rounded-lg'>
                            <Image
                                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                                alt={title}
                                fill
                            />
                        </div>
                    </div>
                    <div className='flex h-full basis-3/4 flex-col gap-5'>
                        <div>
                            <h1 className='text-3xl font-bold'>
                                {title} ({extractYear(release_date)})
                            </h1>
                            <div className='flex items-center gap-2'>
                                <span>{formatDate(release_date)}</span>
                                <span className='text-xl font-bold'>•</span>
                                <span>{joinNames(genres)}</span>
                                <span className='text-xl font-bold'>•</span>
                                <span>{formatMinutes(runtime)}</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <RadialProgress
                                voteAverage={vote_average}
                                size='3.5rem'
                                thickness='4.5px'
                                className='text-sm font-bold'
                            />
                            {tagline && (
                                <p className='italic text-slate-300'>
                                    {tagline}
                                </p>
                            )}
                        </div>
                        <div>
                            <h2 className='text-lg font-bold'>Overview</h2>
                            <p>{overview}</p>
                        </div>

                        <div className='mt-10 grid grid-cols-3 gap-5 text-xs'>
                            <div>
                                <h2 className='text-sm font-semibold'>
                                    Status
                                </h2>
                                <p className='text-slate-300'>{status}</p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold'>
                                    Revenue
                                </h2>
                                <p className='text-slate-300'>
                                    {revenue > 0 ? formatMoney(revenue) : '-'}
                                </p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold'>
                                    Budget
                                </h2>
                                <p className='text-slate-300'>
                                    {budget > 0 ? formatMoney(budget) : '-'}
                                </p>
                            </div>

                            <div>
                                <h2 className='text-sm font-semibold'>
                                    Production Companies
                                </h2>
                                <p className='text-slate-300'>
                                    {joinNames(production_companies)}
                                </p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold'>
                                    Production Countries
                                </h2>
                                <p className='text-slate-300'>
                                    {joinNames(production_countries)}
                                </p>
                            </div>
                            <div>
                                <h2 className='text-sm font-semibold'>
                                    Spoken Languages
                                </h2>
                                <p className='text-slate-300'>
                                    {joinNames(spoken_languages)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MovieDetail;
