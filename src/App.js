import React from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import AddMovies from './AddMovies';
import { MovieProvider } from './MovieContext';

// Source: https://www.youtube.com/watch?v=35lXWvCuM8o

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
