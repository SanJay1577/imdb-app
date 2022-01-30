import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function InfoPage() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const[ratings, setRatings] = useState({});


  useEffect(()=>{ 
    const getMovies =()=>{
      fetch(`https://61e2dd193050a100176822d2.mockapi.io/details/${id}`,
      {method:"GET"})
      .then((data)=>data.json())
      .then((movie)=>setMovieInfo(movie));
      
 };
 getMovies()

 const getratings=()=>{
   fetch(`https://61e2dd193050a100176822d2.mockapi.io/ratings/${id}`,
   {method:"GET"})
   .then((res)=>res.json())
   .then((rating)=>setRatings(rating));
 };

 getratings()

   },[]);

   const history = useHistory();



  return (
    <div className="info-headings">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
            {movieInfo.name}
          </Typography>
        </CardContent>
      </Card>

      {movieInfo && (
        <>
          <div className="info-details">
            <div className="info-image">
              {movieInfo &&
                movieInfo?.images?.map((sub) => (
                  <img
                    key={sub.id}
                    className="info-images"
                    src={sub.url}
                    alt="Spider-man images"
                  />
                ))}
            </div>
            <div className="info-cast">
              {movieInfo?.cast?.map((sub) => (
                <div key={sub.id}>
                  <img className="cast-images" src={sub.image} alt={sub.name} />
                  <Typography
                    className="cast-name"
                    sx={{ fontSize: 15 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {sub.name}
                  </Typography>
                  <Typography
                    className="cast-role"
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {sub.role}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className="info-genre">
            {movieInfo?.genre?.map((sub) => (
              <div className="badge" key={sub.id}>
                <Typography
                  className="cast-role"
                  sx={{ fontSize: 12 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {sub.type}
                </Typography>
              </div>
            ))}
          </div>
          <div className="info-summary">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {movieInfo.summary}
            </Typography>
          </div>
        </>
      )}
   {ratings&&(
      <div >
          <ButtonGroup variant="contained"  aria-label="outlined primary button group">
                <Button color = "warning" onClick={()=>history.push(`/review-page/${id}`)}>Add review</Button>
            </ButtonGroup>
            <Card className="review-div">
              {ratings?.rating?.map((sub)=>
              <div className="review-div">
                <Typography key={sub.id}
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              {sub.user} 
               </Typography>
               <Typography key={sub.id}
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
               {sub.comment}
               </Typography>
            </div>)}
            </Card> 

      </div>
      )}
    </div>
  );
}
//constions of map? 
