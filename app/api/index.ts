import {
    Movie,
    MovieDetail,
    MovieList,
    MovieListResponse,
} from '@/utils/interfaces';

const MOVIE_BASE_URL = 'https://api.themoviedb.org/3/movie/';

export async function getMovieList({
    type,
}: MovieList): Promise<MovieListResponse> {
    try {
        const res = await fetch(
            `${MOVIE_BASE_URL}${type}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
            { cache: 'no-store' }
        );
        return res.json();
    } catch (err) {
        return { page: 0, results: [], total_pages: 0, total_results: 0 };
    }
}

export async function getMovieDetail(id: number): Promise<MovieDetail> {
    try {
        const res = await fetch(
            `${MOVIE_BASE_URL}${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
            { cache: 'no-store' }
        );
        return res.json();
    } catch (err) {
        return {
            id: 0,
            title: '',
            vote_average: 0,
            poster_path: '',
            release_date: '',
            original_title: '',
            overview: '',
            original_language: '',
            backdrop_path: '',
            vote_count: 0,
            adult: false,
            budget: 0,
            genres: [],
            production_companies: [],
            spoken_languages: [],
            production_countries: [],
            homepage: '',
            status: '',
            tagline: '',
            runtime: 0,
            revenue: 0,
        };
    }
}
