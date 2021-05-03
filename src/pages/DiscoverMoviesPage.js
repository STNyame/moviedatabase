import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Discover.css";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchState, set_searchState] = useState([{ status: "idle" }]);

  const history = useHistory();

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
    search(routeParam);
  };
  const search = async () => {
    set_searchState({ status: "searching..." });
    console.log("TODO search movies for:", searchText);
    const queryParam = encodeURIComponent(searchText);

    const data = await axios.get(
      `https://omdbapi.com/?apikey=8d9f6220&s=${queryParam}`
    );
    return set_searchState({ status: "done", data: data.data });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={navigateToSearch}>Search</button>
      </p>

      <div>
        <h2>
          {searchState.status === "searching..." ? searchState.status : null}
        </h2>
      </div>
      <div className="movie-container">
        {searchState.status === "done"
          ? searchState.data.Search.map((element) => {
              return (
                <Link to={`/movie/${element.imdbID}`}>
                  <div className="movie-box">
                    <h2>{element.Title}</h2>
                    <h3>{element.Year}</h3>
                    <p>(imdb: {element.imdbID})</p>
                    <img src={element.Poster} />
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}
