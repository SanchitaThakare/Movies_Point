import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Navbar from './../Navbar';
import "./../../assets/css/banner.css"
import "./../../App.css"

function MovieDetails() {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie, isError } = useFetch(`&i=${id}`);


  return (
    <>
      {isLoading ? (
        <div className={"loaderDiv"}>
          <div className={"loaderRing"}></div>{" "}
        </div>
      ) : (
        <section >
          <div className="default-view app-header">
            <div className="status-bar"></div>
            <Navbar />
            <div class="tv-show-details-page page container">
              <div class="details-header">
                <div class="banner image">
                  <img src={movie.Poster} alt="" />
                </div>
                <div class="header-title-container bg-blur">
                  <div class="breadcrumb-container">
                    <a href="/" class="breadcrumb-link-item nuxt-link-active">MaileHereko</a>
                    <p class="small breadcrumb-seperator">/</p>
                    <a href="/tvshows" class="breadcrumb-link-item">TV Shows
                    </a></div>
                  <h1 class="title" style={{ color: "#ebeef5" }}>{movie.Title}</h1>
                </div>
              </div>
              <div class="details-wrapper">
                <div class="poster image"><img src={movie.Poster} alt="" />
                </div>
                <div class="details-container">
                  <div class="tagline-container detail"><h2 class="tagline">
                    {movie.Type}
                  </h2></div>
                  <div class="description-container detail">
                    <p class="label" style={{ fontSize: "20px" }}>
                      {movie.Plot}
                    </p>
                  </div>
                  <div class="rating detail">

                    <i className="mh-icon icon-star">
                      <i className="fa fa-star" style={{ color: "#ffad49", fontSize: "20px" }}></i>
                    </i>
                    <p style={{ fontSize: "20px" }}><b>{movie.imdbRating}</b></p>
                  </div>
                  <div class="type-status details-row">
                    <div class="type detail">
                      <p class="label" style={{ fontSize: "20px" }}>Type</p>
                      <p class="large" style={{ fontSize: "23px" }}><b>{movie.Type}</b></p>
                    </div>
                  </div>
                  <div class="run-time detail">
                    <div class="first-air-date detail">
                      <p class="label" style={{ fontSize: "20px" }}>Released Date</p>
                      <p class="run-time large" style={{ fontSize: "23px" }}><b>{movie.Released}</b></p>
                    </div>
                  </div>
                  <div class="run-time detail">
                    <p class="label" style={{ fontSize: "20px" }}>Runtime</p>
                    <p class="runtime-wrapper" style={{ fontSize: "23px" }}><span class="run-time large">
                      <b>{movie.Runtime}</b>
                    </span>
                    </p></div>
                  <div class="genres detail">
                    <p class="label" style={{ fontSize: "20px" }}>Genres</p>
                    <p class="genre-wrapper">
                      <span class="genre large" style={{ fontSize: "23px" }}>
                        <b> {movie.Genre}</b>
                      </span></p></div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MovieDetails;
