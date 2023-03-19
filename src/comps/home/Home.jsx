import List from "../list/List";
import Navbar from "../navbar/Navbar";
import Request from "../fetch/Request";
import MovieList from "../../videos/MovieList";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <MovieList type={"movies"} />
      <List title="Netflix Originals" fetch={Request.fetchNetflixOrigianls} />
      <List title="Trending" fetch={Request.fetchTrending} />
      <List title="Horror" fetch={Request.fetchHorror} />
      <List title="Romance" fetch={Request.fetchRomance} />
      <List title="Documentry" fetch={Request.fetchDocumentary} />
      <List title="Action" fetch={Request.fetchAction} />
      <List title="Western" fetch={Request.fethWestern} />
    </div>
  );
};

export default Home;
