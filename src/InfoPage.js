import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export function InfoPage() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  // const getMovie = () => {
  //   // https://61e2dd193050a100176822d2.mockapi.io/details/${id}
  //   fetch(``, {
  //     method: "GET",
  //   })
  //     .then((data) => data.json())
  //     .then((info) => console.log(info));
  // };

  useEffect(() => {
    const url2 = `https://61e2dd193050a100176822d2.mockapi.io/details/${id}`;

    fetch(url2)
      .then((data) => data.json())
      .then((movie) => {
        setMovieInfo(movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  console.log(movieInfo);

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
    </div>
  );
}
//constions of map? 