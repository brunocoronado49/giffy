import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/Gif/ListOfGifs";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleInput = (event) => {
    setKeyword(event.target.value);
  };

  const handleSumit = (event) => {
    event.preventDefault();
    console.log(keyword);
    pushLocation(`/search/${keyword}`);
  };

  return (
    <div className="container p-4">
      <div className="col-md-8">
        <form onSubmit={handleSumit}>
          <input
            type="text"
            className="form-control"
            name="keyword"
            placeholder="Search gifs"
            onChange={handleInput}
          />
        </form>
      </div>
      <br />
      <h3>Última búsqueda</h3>
      <ListOfGifs gifs={gifs} />
    </div>
  );
};

export default Home;
