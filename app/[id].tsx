import { fetchMovie } from '@/api/movies';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import {View, Text, ActivityIndicator,Image} from 'react-native'
 
const MovieDetails = () =>{
    const {id}=useLocalSearchParams();
    const {data, isLoading, error}=useQuery({
        queryKey:['movies', id],
        queryFn: () => fetchMovie(id)
    })

 if(isLoading)
 {
    return <ActivityIndicator/>
 }
 if(error)
 {
    return <Text>Failed to fetch data</Text>
 }


    return(
     <View>
      <Image source={{uri: 'https://image.tmdb.org/t/p/w500'+ data.backdrop_path,}}
      style={{width:'100%', height : 300 }}/>
      <View style={{padding:10}}>
     <Text style={{fontSize:24,fontWeight: '500', marginVertical: 10}}>{data.title}</Text>
     <Text style={{fontSize:24,fontWeight: '500', marginVertical: 10}}>{data.overview}</Text>
     </View>
     </View>
    );
};

export default MovieDetails;