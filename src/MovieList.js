import React, { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 12345,
    },
    {
      name: 'Jaws',
      price: '$8',
      id: 54321,
    },
    {
      name: 'Lady Snowblood',
      price: '$15',
      id: 66666,
    },
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export default MovieList;
