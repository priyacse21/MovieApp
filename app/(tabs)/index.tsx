import {ActivityIndicator, FlatList, StyleSheet,Text } from 'react-native';
import { View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { fetchTopRatedMoies } from '@/api/movies';
  
export default function TabOneScreen() {
  const [movies,setMovies] = useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const fetchMovies = async () =>{
      setIsLoading(true);
      try{
          const movies=await fetchTopRatedMoies();
           setMovies(movies);
      }
      catch(error)
      {
        setError(error.message)
      }

    setIsLoading(false);
    };
    fetchMovies();
  },[])

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
      data={movies}
      renderItem={({item})=>(
        <View>
          <Text>{item.title}</Text>
          </View>
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
