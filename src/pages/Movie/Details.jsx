import { useEffect, useState } from 'react';

import MovieForm from "../../components/MovieForm";
import { useParams } from "react-router-dom";

import axios from 'axios';


const Details = () => {

  const [moviesDetails, setMoviesDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const param = useParams();

  useEffect(() => {

    if (param.id == null) return;
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${param.id}`);
        setMoviesDetails(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [param.id]);



  return (
    <>
      <div className="mb-10">
        <span>Page</span>
        <h1>Edit Movie Page</h1>
      </div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex">
          <div>
            {moviesDetails && moviesDetails.poster_path ? (
              <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${moviesDetails.poster_path}`} />
            ) : (
              <p>No backdrop path found</p>
            )}
          </div>
          <div className="px-8 flex-1 lg:mt-0 mt-5 ">
            {moviesDetails && <MovieForm {...moviesDetails} />}
          </div>
        </div>
      )}
    </>
  );

}


export default Details;


