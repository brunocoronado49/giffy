import React from 'react';
import './gif.css';

const Gif = ({title, id, url}) => {
  return (
    <div className="gif"> 
      <img src={url} alt={title} />
      <h3></h3>
      <button className="btn btn-outline-warning" onClick={
        () => alert(`${title} - ${id}`)
      }>{title}</button>
    </div>
  );
};

export default Gif;
