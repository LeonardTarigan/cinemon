import { getMovieList } from './api';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

export default async function Home() {
    const playingMoviesData = await getMovieList({ type: 'now_playing' });
    const popularMoviesData = await getMovieList({ type: 'popular' });
    const topRatedMoviesData = await getMovieList({ type: 'top_rated' });
    const upcomingMoviesData = await getMovieList({ type: 'upcoming' });

    const [playingMovies, popularMovies, topRatedMovies, upcomingMovies] =
        await Promise.all([
            playingMoviesData,
            popularMoviesData,
            topRatedMoviesData,
            upcomingMoviesData,
        ]);

    return (
        <main>
            <Hero />
            <div className='flex flex-col gap-14 py-20'>
                <MovieList
                    title='NOW PLAYING'
                    movies={playingMovies.results}
                    total_results={playingMovies.total_results}
                />
                <MovieList
                    title='POPULAR MOVIES'
                    movies={popularMovies.results}
                    total_results={popularMovies.total_results}
                />
                <MovieList
                    title='TOP RATED MOVIES'
                    movies={topRatedMovies.results}
                    total_results={topRatedMovies.total_results}
                />
                <MovieList
                    title='UPCOMING MOVIES'
                    movies={upcomingMovies.results}
                    total_results={upcomingMovies.total_results}
                />
            </div>
        </main>
    );
}
