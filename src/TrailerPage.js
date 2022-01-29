import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function TrailerPage() {
  const { id } = useParams();
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovie =  () => {
     fetch(`https://61e2dd193050a100176822d2.mockapi.io/details/${id}`,
      { method: "GET" })
      .then((data) => data.json())
      .then((trailers) => setMovieTrailer(trailers))
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false));
  };

  useEffect(getMovie, []);
 const styles ={color:"white"}
  if(loading){
    return <p style={styles}>Data is Loading.....</p>
  }
  return (
    
    <div className="trailer-details">
        <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {movieTrailer.name} 
        </Typography>
      </CardContent>
    </Card>
      <div className="trailer-div"> 
      <iframe 
      width="550" height="500" 
      src={movieTrailer.trailer}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
      </div>


    </div>
  );
}
