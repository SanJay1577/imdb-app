import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function InfoPage() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const getMovie = () => {
    fetch(`https://61e2dd193050a100176822d2.mockapi.io/details/${id}`,
      { method: "GET" })
    .then((data) => data.json())
    .then((info) => setMovieInfo(info))
  };
   
  useEffect(getMovie, []);

  
  return (
          <div className="info-headings">
        <Card sx={{ minWidth: 275}}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          {movieInfo.name} 
        </Typography>
      </CardContent>
       </Card>
   
       <div className="info-details">

          <div className= "info-image">
               {movieInfo.images.map((sub)=> <img key ={sub.id} className = "info-images" src = {sub.url}
            alt = "Spider-man images"/>)}
            </div>
            
         
             <div className= "info-cast">
               {movieInfo.cast.map((sub)=>
               <div key ={sub.id}>
               <img className= "cast-images" src ={sub.image}
               alt ={sub.name}/>
             <Typography className="cast-name" sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
           {sub.name}
          </Typography>
          <Typography className="cast-role" sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {sub.role}
          </Typography>
          </div>)}
              
             </div>

       </div>

       <div className="info-genre">
          {movieInfo.genre.map((sub)=><div className="badge" key ={sub.id}>
                   <Typography className="cast-role" sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                   {sub.type}
                 </Typography></div>)} 
        </div> 

        <div className="info-summary">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {movieInfo.summary} 
         </Typography>
        </div>

     </div> 
  );
}
