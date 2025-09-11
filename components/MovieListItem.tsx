import {View , Text, Image,Pressable} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
const MovieListItem =({movie})=>{
    return(
        //  link passes all below child through pressable so that we could view each movie details clearly.
        <Link href={'/${movie.id}'} asChild>
             <Pressable style={{padding:10, flex:1}}>
            <Image source={{uri: 'https://image.tmdb.org/t/p/w500'+ movie.poster_path,}}
            style={{width : '100%', aspectRatio: 3 / 5, borderRadius: 20 }}/>
            <Text>{movie.title}</Text>
        </Pressable>
        </Link>
    )
}
export default MovieListItem;