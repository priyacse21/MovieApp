
const apiKey= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU0YTU2MjhiM2NkNTU3MDI2ZTAwOTA1OTgzZjEzOCIsIm5iZiI6MTc1NzA1NTQyOS4xMzQsInN1YiI6IjY4YmE4OWM1M2MyYjE2MmJhMjFmNDRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKX4oQQq30-E4BagENmcZWDEe8s_ziafSAn05FEr-O4'
const headers={
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU0YTU2MjhiM2NkNTU3MDI2ZTAwOTA1OTgzZjEzOCIsIm5iZiI6MTc1NzA1NTQyOS4xMzQsInN1YiI6IjY4YmE4OWM1M2MyYjE2MmJhMjFmNDRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FKX4oQQq30-E4BagENmcZWDEe8s_ziafSAn05FEr-O4'
  }
export const fetchTopRatedMoies = async ({pageParam})=>{
const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;
const options = {
  method: 'GET',
  headers: headers
};

const res=await fetch(url, options);
if(!res.ok)
{
  throw new Error('Failed to fetch movies');
}
const json=await res.json();
return json.results
};


export const fetchMovie= async (id: number) =>
{
  if (!id) {
  throw new Error("Movie ID is required and must be a number");
}

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  console.log(url,"123");
const options = {
  method: 'GET',
  headers:headers,
};

const res = await fetch(url, options);
if(!res.ok)
{
  throw new Error('Failed to fetch movies');
}
const json = await res.json();
return json;


};