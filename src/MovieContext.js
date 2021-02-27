import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
