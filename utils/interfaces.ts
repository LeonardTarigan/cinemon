export interface Movie {
    id: number;
    original_title: string;
    title: string;
    overview: string;
    original_language: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

export interface MovieListResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface MovieListComponent {
    title: string;
    movies: Movie[];
    total_results: number;
}

export interface MovieList {
    type: 'now_playing' | 'popular' | 'top_rated' | 'upcoming';
}

export interface CustomableIcon {
    className?: string;
}
