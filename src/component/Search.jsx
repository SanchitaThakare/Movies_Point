import React from "react";
import { useGlobalContext } from "../context/context";

function Search() {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <>
    
      <div className="header">
        <h1>MaileHereko</h1>
        <p>
          List of movies and TV Shows, I,
          <a href="" className="external-links">Pramod Poudel</a>
          have watched till date. Explore what I have watched and also feel free to make a
          suggestion. 😉
        </p>
        <div className="search-wrapper">
          <div className="input-group">
            <div className="left-icon icon-wrapper">
              <i className="mh-icon icon-search">
                <i className="fa fa-search"></i>
              </i>
            </div>
            <input type="text" name="search" placeholder="Search movies or tv shows" id="search" style={{ color: "white", paddingTop: "13px", width: "61%", borderRadius: "10px" }} value={query}
              onChange={(e) => setQuery(e.target.value)} />
          </div>
        </div>
        <div className="segmented-control-wrapper">
          <div className="segmented-control">
            <div className="active-indicator" style={{ width: '5.3125rem', left: '0.5rem' }}></div>
            <div className="segmented-group">
              <input type="radio" name="List Type" value="all" defaultChecked className="segmented-input text" />
              <label htmlFor="all" className="segmented-label">All</label>
            </div>
            <div className="segmented-group">
              <input type="radio" name="List Type" value="movie" className="segmented-input" />
              <label htmlFor="movie" className="segmented-label">Movies</label>
            </div>
            <div className="segmented-group">
              <input type="radio" name="List Type" value="tv" className="segmented-input" />
              <label htmlFor="tv" className="segmented-label">TV Shows</label>
            </div>
          </div>
        </div>
        <div className="category-title">
          <h3>All <span>(183)</span></h3>
        </div>
      </div>
    </>
  );
}

export default Search;
