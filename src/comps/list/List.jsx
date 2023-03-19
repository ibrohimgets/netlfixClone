import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./list.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
document.cookie = "mycookie=value; SameSite=None; Secure";
document.cookie = "mycookie=value; SameSite=Strict";

const List = ({ title, fetch, isLargeRow }) => {
  const header = useRef();
  const [move, setMove] = useState(false);
  const [stop, setStop] = useState(0);
  const [movie, setMovie] = useState([]);

  const img_URL = "https://image.tmdb.org/t/p/w500";

  const handleClick = (direction) => {
    setMove(true);
    let distance = header.current.getBoundingClientRect().x - 80;
    if (direction === "left" && stop > 0) {
      setStop(stop - 1);
      header.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && stop < 11) {
      setStop(stop + 1);
      header.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetch);
      setMovie(res.data.results);
      return res;
    }
    fetchData();
  }, [fetch]);

  return (
    <div className="list">
      <span className="listTitle">{title}</span>
      <div className="wrapper">
        <IoIosArrowBack
          className="slider left"
          onClick={() => handleClick("left")}
          style={{ display: !move && "none" }}
        />{" "}
        <div className="container" ref={header}>
          {movie.map((movies) => (
            <div key={movies.id} className="video-row">
              <div className="video-item">
                <img
                  src={`${img_URL}${movies.poster_path}`}
                  alt={movies.original_title}
                />
                <div className="video-overlay">
                  <div className="video-info">
                    <h3>{movies.title}</h3>
                    <p>{movies.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <IoIosArrowForward
          className="slider right"
          onClick={() => handleClick("right")}
        />
      </div>{" "}
    </div>
  );
};

export default List;
