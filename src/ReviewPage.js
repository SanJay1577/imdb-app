import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

export function ReviewPage() {
  const history = useHistory();
  const { id } = useParams();
  // const [user, setUser] = useState("");
  // const [content, setContent] = useState("")

  //   const addReview = ()=>{
  //     const newReview ={

  //       user:user,
  //       content:content
  // };
  //     console.log(newReview)
  //     fetch(`https://61e2dd193050a100176822d2.mockapi.io/ratings/${id}`,{
  //       method:"POST",
  //       body:JSON.stringify(newReview),
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //     })
  //     .then((data)=>data.json())
  //     .then(()=>history.push("/info-page/:id"));

  //   }

  return (
    <div>
      <Card className="review-box">
        <CardContent className="review-card">
          <TextField
            label="User Name"
            variant="filled"
            //  value ={user}
            //  onChange={(event)=>setUser(event.target.value)}
          />

          <TextField
            id="filled-multiline-static"
            label="Review"
            multiline
            rows={4}
            variant="filled"
            // value ={content}
            // onChange={(event)=>setContent(event.target.value)}
          />
        </CardContent>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            color="warning"
            onClick={() => history.push(`/info-page/${id}`)}
          >
            Submit
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}
