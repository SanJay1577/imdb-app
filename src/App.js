
import './App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import { LandingPage } from './LandingPage';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Mockdetials } from './Mockdetials';
import { InfoPage } from './InfoPage';
import { TrailerPage } from './TrailerPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import { ReviewPage } from './ReviewPage';

function App() {

const theme = createTheme({
 palette:{
   mode:"dark",
 },
});
  const history = useHistory();
  
  return (
    <ThemeProvider theme ={theme}>
    <div className="App">
      <Box sx={{ flexGrow: 1}}>
        <AppBar position='static'>
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IMDB Spiders
          </Typography>
             <ButtonGroup variant="contained"  aria-label="outlined primary button group">
                <Button color = "warning" onClick={()=>{history.push("/")}}>Home</Button>
             </ButtonGroup>
          </Toolbar>
        </AppBar>
      </Box>


  <Switch>
    <Route exact path ="/">
     <LandingPage/>
    </Route>
    <Route  path ="/info-page/:id">
     <InfoPage/>
    </Route>
    <Route  path ="/trailer-page/:id">
     <TrailerPage/>
    </Route>
    <Route path="/review-page/:id">
    <ReviewPage/>
    </Route>
  </Switch>

 
    </div>
    </ThemeProvider>
  );
}

export default App;

