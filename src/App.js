// import "./App.css";

import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MoviePage from "./pages/MoviePage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/movie/:imdb_id" component={MoviePage} exact={true} />
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
