import React, { useContext } from 'react';
import GifsContext from '../../context/GifsContext';
import Gif from '../../components/Gif/Gif';

const Detail = ({params}) => {
const {gifs} = useContext(GifsContext);
  console.log({gifs});

  const gif = gifs.find(singleGif => singleGif.id === params.id);

  console.log(gif);

  return <div>
    <h1>{gif.title}</h1>
    <Gif {...gif}/>
  </div> // Way more easily to get the params/props
};

export default Detail;
