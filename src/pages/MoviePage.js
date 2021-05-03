import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MoviePage.css";

export default function MoviePage() {
  const route_parameters = useParams();

  const [movieData, set_movieData] = useState({ status: "Searching..." });

  useEffect(() => {
    async function fetchData() {
      const queryParam = encodeURIComponent(route_parameters.imdb_id);
      const response = await axios.get(
        `https://omdbapi.com/?apikey=8d9f6220&i=${queryParam}`
      );
      console.log("data", response.data);
      set_movieData(response.data);
    }
    fetchData();
  }, [route_parameters.imdb_id]);

  return (
    <div>
      <div className="title-box">
        <h1>
          {movieData.Title} ({movieData.Year})
        </h1>
        {movieData.Genre
          ? movieData.Genre.split(",").map((element) => {
              return <button>{element}</button>;
            })
          : null}
      </div>

      <div className="movie-detail-container">
        <div className="movie-detail-box">
          <img src={movieData.Poster} alt="" />
        </div>
        <div className="movie-detail-box">
          <h3>Director:</h3>
          <p>{movieData.Director}</p>
          <h3>Language:</h3>
          <p>{movieData.Language}</p>
          <h3>Plot:</h3>
          <p>{movieData.Plot}</p>
          <h3>IMDB Rating:</h3>
          <p>{movieData.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}
