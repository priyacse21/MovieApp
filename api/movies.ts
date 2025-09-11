export const fetchTopRatedMoies = ()=>{
const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU0YTU2MjhiM2NkNTU3MDI2ZTAwOTA1OTgzZjEzOCIsIm5iZiI6MTc1NzA1NTQyOS4xMzQsInN1YiI6IjY4YmE4OWM1M2MyYjE2MmJhMjFmNDRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKX4oQQq30-E4BagENmcZWDEe8s_ziafSAn05FEr-O4'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err));
};