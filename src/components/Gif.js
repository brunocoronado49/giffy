import React from 'react';
import './gif.css';

const Gif = ({title, id, url}) => {
  return <div className="gif"> 
    <h5>{title}</h5>
    <img src={url} alt={title} />
    <a href={`#${id}`}>Show ID</a>
</div>;
};

export default Gif;
