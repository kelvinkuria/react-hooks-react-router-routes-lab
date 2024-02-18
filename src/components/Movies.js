// Movies.js
import React from 'react';
import data from '../data';

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {data.movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;

