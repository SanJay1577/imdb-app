import { Mockdetials } from './Mockdetials';
import { useState, useEffect } from 'react';
export function LandingPage() {
    const [movies, setMovie] = useState([]);


   useEffect(()=>{ 
    const getMovies =()=>{
      fetch("https://61e2dd193050a100176822d2.mockapi.io/details",
      {method:"GET"})
      .then((data)=>data.json())
      .then((movie)=>setMovie(movie));
      
 };
 getMovies()

   },[]);


  return (
    <div className='app-page'>
      {movies.map(({ id, name, genre, images, cover, rating }) => <Mockdetials
        id={id}
        name={name}
        genre={genre}
        images={images}
        cover={cover}
        rating={rating} 
        />)}

    </div>
  );
}
// intial mount -> 
// then useEffect -> re rendering the state. 