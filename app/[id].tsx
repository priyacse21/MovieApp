import { fetchMovie } from '@/api/movies';
import { addMovieToWatchList } from '@/api/watchlist';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Stack, useLocalSearchParams } from 'expo-router';
import {View, Text, ActivityIndicator, Image, Pressable} from 'react-native'
 
const MovieDetails = () =>{
   const client=useQueryClient();
    const {id}=useLocalSearchParams();
    const {data, isLoading, error}=useQuery({
        queryKey:['movies', id],
        queryFn: () => fetchMovie(id)
    })

const {mutate}=useMutation({
   mutationFn: () => addMovieToWatchList(id),
   onSuccess: () =>{
      client.invalidateQueries(['watchlist']);
   }
});



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
      <Stack.Screen options={{title: data.title}} />
      <Image source={{uri: 'https://image.tmdb.org/t/p/w500'+ data.backdrop_path,}}
      style={{width:'100%', height : 300 }}/>
      <View style={{padding:10}}>
     <Text style={{fontSize:24,fontWeight: '500', marginVertical: 10}}>{data.title}</Text>
     <View style={{marginVertical: 10}}>
      <Pressable onPress={() => mutate()} style={{flexDirection:'row',alignItems:'center', gap: 6}}>
       <FontAwesome name="bookmark-o" size={24} color="black" />
       <Text>WatchList</Text>
      </Pressable>
     </View>
     <Text style={{fontSize:24,fontWeight: '500', marginVertical: 10}}>{data.overview}</Text>
     </View>
     </View>
    );
};

export default MovieDetails;
