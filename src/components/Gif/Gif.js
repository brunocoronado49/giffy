import React from 'react';
import {Link} from 'wouter';
import './gif.css';

const Gif = ({title, id, url}) => {
  return (
    <Link to={`/gif/${id}`}>
      <div className="gif">
        <img src={url} alt={title}/>
        <button className="btn btn-outline-dark" onClick={
          () => alert(`${title} - ${id}`)
        }>{title}</button>
      </div>
    </Link>
  );
};

export default Gif;
