import React from 'react';
import {Link, NavLink} from "react-router-dom";

const SavedList = props => {
  // console.log("SavedList:", props)
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span className="saved-movie" key={movie.id}><NavLink to={`/movies/${movie.id}`}><button>{movie.title}</button></NavLink></span>
        ))}
        <Link to="/">
          <div className="home-button">Home</div>
        </Link>
      </div>
      )
};

export default SavedList;
