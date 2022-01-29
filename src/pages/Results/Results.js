import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import ListOfGifs from "../../components/Gif/ListOfGifs";
import { useGifs } from '../../hooks/useGifs';

const Results = ({ params }) => {
  const { keyword } = params;
  const {loading, gifs} = useGifs({keyword});

  return <div>{loading ? <Loading /> : <ListOfGifs gifs={gifs} />}</div>;
};

export default Results;
