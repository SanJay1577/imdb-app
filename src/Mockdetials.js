import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';


export function Mockdetials({ name, cover, rating, id}) {
    const history = useHistory();
  return (
    <div className='movieCard'>
      <Card sx={{ maxWidth: 245 }} className="insidecard">
        <CardMedia className='image'
          component="img"
          height="340"
          image={cover}
          alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className='ratingElement'>
              {rating} <FavoriteSharpIcon />
            </div>
          </Typography>
        </CardContent>
        <CardActions>
   
            <Button size="small" color = "warning" onClick={()=>{history.push(`/info-page/${id}`)}}>More info</Button>
    
          
     
          <Button size="small" color = "warning" onClick={()=>{history.push(`/trailer-page/${id}`)}}>Watch Trailer</Button>

          
        </CardActions>
      </Card>

    </div>
  );
}
