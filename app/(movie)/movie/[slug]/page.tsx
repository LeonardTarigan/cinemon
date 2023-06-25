interface MovieDetailParams {
    params: {
        slug: string;
    };
}

function MovieDetail({ params: { slug } }: MovieDetailParams) {
    return <main className='h-screen px-20 py-20'>MovieDetail {slug}</main>;
}

export default MovieDetail;
