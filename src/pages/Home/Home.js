import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useGifs } from '../../hooks/useGifs';
import ListOfGifs from '../../components/Gif/ListOfGifs';

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation();
  const {loading, gifs} = useGifs();

  const handleInput = event => {
    setKeyword(event.target.value);
  }

  const handleSumit = event => {
    event.preventDefault();
    console.log(keyword);
    pushLocation(`/search/${keyword}`);
  }

  return <div>
    <form onSubmit={handleSumit}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          name="keyword" 
          placeholder="Search gifs"
          onChange={handleInput}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning w-100">Search</button>
      </div>
    </form>
    <h3>Última búsqueda</h3>
    <ListOfGifs gifs={gifs} />
  </div>;
};

export default Home;
