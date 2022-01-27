import React from 'react';
import { Link } from 'wouter';
import './trend.css';

const Trending = ({name, options = []}) => {
  return (
    <div>
      <ul className="col3">
        {
          options.map((option, index) => (
            <Link key={index} to={`/search/${option}`}>
              <li>{option}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  );
};

export default Trending;
