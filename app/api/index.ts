import { MovieList, MovieListResponse } from '@/utils/interfaces';

export async function getMovieList({
    type,
}: MovieList): Promise<MovieListResponse> {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
            { cache: 'no-store' }
        );
        return res.json();
    } catch (err) {
        return { page: 0, results: [], total_pages: 0, total_results: 0 };
    }
}
