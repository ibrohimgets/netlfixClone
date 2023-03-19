import React, { useEffect, useState } from "react";
import "./features.scss";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiMore2Fill } from "react-icons/ri";
import axios from "axios";
import Request from "../fetch/Request";
import ReactPlayer from "react-player";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const Features = ({ type, images, description, videos, title }) => {
  const [movies, setMovies] = useState([]);
  const [play, setPlay] = useState(false);
  console.log(movies);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(Request.fetchTrending);

      setMovies(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    };
    fetchData();
  }, []);

  const truncateOverview = (overview, maxLength) => {
    if (!overview) {
      return "";
    }

    return overview.length > maxLength
      ? overview.substring(0, maxLength - 3) + "..."
      : overview;
  };
  const handlePlay = () => {
    setPlay(true);
  };
  return (
    <div className="features">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Moveis" : "Series"}</span>
          <select name="genres">
            <option>Genres</option>
            <option value="1365">Action & Adventure</option>
            <option value="7424">Anime</option>
            <option value="783">Children & Family Movies</option>
            <option value="31574">Classic Movies</option>
            <option value="6548">Comedies</option>
            <option value="10750">Crime Movies</option>
            <option value="6839">Documentaries</option>
            <option value="5763">Dramas</option>
            <option value="8711">Horror Movies</option>
            <option value="7077">Independent Movies</option>
            <option value="78367">International Movies</option>
            <option value="1701">Music</option>
            <option value="8883">Romantic Movies</option>
            <option value="1492">Sci-Fi & Fantasy</option>
            <option value="4370">Sports Movies</option>
            <option value="8933">Thrillers</option>
          </select>
        </div>
      )}
      {!play ? (
        <div className="video">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videos.key}`}
            playing={true}
            controls={false}
            muted
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <div className="info">
          <h2>Title: " {title} "</h2>
          <img src={`${IMG_URL}${images.file_path}`} alt={images.file_path} />
          <h3 className="desc">{truncateOverview(description, 100)}</h3>
          <div className="buttons">
            <button className="play" onCanPlay={handlePlay}>
              <span>Play</span> <AiFillPlayCircle />
            </button>
            <button className="more">
              <span>More</span> <RiMore2Fill />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
