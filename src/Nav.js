import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

// Navbar: https://www.w3schools.com/howto/howto_js_topnav.asp

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className='topnav'>
      <li className='active'>MovieContext</li>
      <li>Number of Movies: {movies.length}</li>
    </div>
  );
};

export default Nav;
