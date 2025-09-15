export const addMovieToWatchList = async (movieId: number)=>{
    const url = 'https://api.themoviedb.org/3/account/22284865/watchlist';
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU0YTU2MjhiM2NkNTU3MDI2ZTAwOTA1OTgzZjEzOCIsIm5iZiI6MTc1NzA1NTQyOS4xMzQsInN1YiI6IjY4YmE4OWM1M2MyYjE2MmJhMjFmNDRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKX4oQQq30-E4BagENmcZWDEe8s_ziafSAn05FEr-O4'
  },
  body: JSON.stringify({media_type: 'movie', media_id: movieId, watchlist: true})
};

const res = await fetch(url, options);
if(!res.ok)
{
  throw new Error('Failed to fetch movies');
}
const json = await res.json();
return json;
}