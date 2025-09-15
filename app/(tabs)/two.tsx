import {ActivityIndicator, FlatList, StyleSheet,Text } from 'react-native';
import { View } from '@/components/Themed';
// import { useEffect, useState } from 'react';
import { fetchTopRatedMoies } from '@/api/movies';
import {useQuery} from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';
import { fetchWatchlistMovies } from '@/api/watchlist';
  
export default function Watchlist() {
  const {data, isLoading, error} =useQuery({
    queryKey:['watchlist'], 
    queryFn:fetchWatchlistMovies,
  });


  //***********The Below State variable,useEfffect function is replaced by  above three lines of useQuery function.**********
  // const [movies,setMovies] = useState([]);
  // const [isLoading, setIsLoading]=useState(false);
  // const [error,setError]=useState(null);

  // useEffect(()=>{
  //   const fetchMovies = async () =>{
  //     setIsLoading(true);
  //     try{
  //         const movies=await fetchTopRatedMoies();
  //          setMovies(movies);
  //     }
  //     catch(error)
  //     {
  //       setError(error.message)
  //     }

  //   setIsLoading(false);
  //   };
  //   fetchMovies();
  // },[])

  if(isLoading)
  {
    <ActivityIndicator/>
  }

  if(error)
  {
    return <Text>{error.message}</Text>
  }
  return (
    <View style={styles.container}>
      {/* renders list of data */}
      <FlatList
      data={data}
      contentContainerStyle={{gap : 5}}
       columnWrapperStyle={{gap : 5}}
      numColumns={2}
      renderItem={({item})=> <MovieListItem movie = {item} />
      
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },

});
