import React from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';

// Source: https://www.youtube.com/watch?v=35lXWvCuM8o

function App() {
  return (
    <div className='App'>
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
