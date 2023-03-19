import axios from "axios";
import { useState, useEffect } from "react";
import Features from "../comps/features/Features";
document.cookie = "mycookie=value; SameSite=None; Secure";
document.cookie = "mycookie=value; SameSite=Strict";

const API_KEY = "2710bac6b7996d7a66f1d6e4c63c15c8";

/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

const movieIds = [
  497698, 550988, 580175, 522444, 581389, 579583, 639721, 795853, 755812,
  808023, 583406, 773655, 595743, 714011, 738652, 696007, 635302, 744275,
  610253, 595743, 457335, 399566, 290859, 522938, 299534, 157336, 19995,
];
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

const randomMovieId = movieIds[Math.floor(Math.random() * movieIds.length)];
console.log(randomMovieId);

/* --------------------------------------------------------------------- */
function MovieList({ type }) {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=${API_KEY}&append_to_response=videos,images`
        );
        const title = response.data.title;
        const description = response.data.overview;
        const images = response.data.images.backdrops.sort(
          () => Math.random() - 0.5
        );
        const videos = response.data.videos.results.sort(
          () => Math.random() - 0.5
        );
        setImages(images[0]);
        setVideos(videos[0]);
        setLoading(false);
        setDescription(description);
        setTitle(title);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Features
          type={type}
          images={images}
          videos={videos}
          description={description}
          title={title}
        />
      )}
    </>
  );
}
export default MovieList;
