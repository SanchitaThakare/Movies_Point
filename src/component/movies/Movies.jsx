import React from "react";
import { useGlobalContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import filmcamera from "../../assets/img/My project.png";
import "./../../assets/css/movie.css";

function Movies() {
  const { movie, isLoading } = useGlobalContext();

  return (
    <>
      {isLoading ? (
        <div className={"loaderDiv"}>
          <div className={"loaderRing"}></div>
        </div>
      ) : (
        <div className="banners">
          {movie
            ? movie.map((curr) => {
              const { imdbID, Poster, Title, Type, Year } = curr;
              const movieName = Title.substring(0, 15);
              return (
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                  <div className="card-wrapper">
                    <div className="card-content">

                      <a href="" className="card-image image">
                        <img src={Poster === "N/A" ? filmcamera : Poster}
                          alt={"poster"} />
                      </a>
                      <div className="card-info">
                        <a href="" className="title">{movieName}</a>
                      </div>
                    </div>
                  </div>
                </NavLink>
              );
            })
            : ""}
        </div>

      )}
    </>
  );
}

export default Movies;
