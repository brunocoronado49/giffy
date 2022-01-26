import React, { useContext } from 'react';
import GifsContext from '../../context/GifsContext';
import Gif from '../../components/Gif/Gif';

const Detail = ({params}) => {
const {gifs} = useContext(GifsContext);
  console.log({gifs});

  const gif = gifs.find(singleGif => singleGif.id === params.id);

  console.log(gif);

  return <Gif {...gif}/> // Way more easily to get the params/props
};

export default Detail;
