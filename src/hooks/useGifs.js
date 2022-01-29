import React, { useState, useEffect, useContext } from "react";
import GifsContext from '../context/GifsContext';
import { getGifs } from '../services/GetGifs';

export const useGifs = ({keyword} = {keyword: null}) => {
  
  //const [gifs, setGifs] = useState([]);
  const {gifs, setGifs} = useContext(GifsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // recover the keyword of localStorage
    const keywordToUse = 
    keyword ? keyword 
    : localStorage.getItem('lastKeyword') || 'random'

    getGifs({ keyword: keywordToUse }).then((gifsResult) => {
      setGifs(gifsResult);
      setLoading(false);
      
      // Save the keyword of localStorage in keyword
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, setGifs]);

  return {loading, gifs}
};
