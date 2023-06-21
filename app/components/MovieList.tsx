import { MovieListComponent } from '@/utils/interfaces';
import MovieCard from './MovieCard';
import { Suspense } from 'react';
import MovieListSkeleton from './MovieListSkeleton';

function MovieList({ title, movies, total_results }: MovieListComponent) {
    return (
        <>
            {total_results > 0 && (
                <Suspense fallback={<MovieListSkeleton />}>
                    <section className='px-5 md:px-20'>
                        <h1 className='mb-5 text-2xl font-bold'>{title}</h1>
                        <div className='movie-list flex gap-2 overflow-x-scroll pb-2'>
                            {movies.map((movie, index) => {
                                return <MovieCard key={index} {...movie} />;
                            })}
                        </div>
                    </section>
                </Suspense>
            )}
        </>
    );
}

export default MovieList;
