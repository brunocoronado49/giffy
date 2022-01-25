import React from "react";
import Gif from "./Gif";

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="container d-flex h-100 align-items-center">
      <div className="row">
        {
          gifs.map(({ id, title, url }) => (
            <div className="col-md-4" key={id}>
              <Gif title={title} id={id} url={url} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ListOfGifs;
