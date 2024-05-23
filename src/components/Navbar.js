// NavBar.js
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import BurgerMenu from './BurgerMenu';
import styles from './NavBar.module.css';
import { SearchContext } from './SearchContext'; // import the SearchContext

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { setSearchQuery } = useContext(SearchContext); // get the setSearchQuery function from the context
  const [searchInput, setSearchInput] = useState(''); // state to keep track of the search input

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(searchInput); // when the form is submitted, update the searchQuery in the context
  };

  return (
    <div className={styles.navbar}>
      {windowWidth <= 600 && <BurgerMenu />}
      {windowWidth > 600 && (
        <>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </>
      )}
      <div className={styles.searchContainer}>
        <form onSubmit={handleSearch}> {/* wrap the input and button in a form and add an onSubmit handler */}
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Search products..."
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)} // when the input changes, update the searchInput state
          />
          <button className={styles.searchButton} type="submit">
            <FaSearch size={11} color="white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;