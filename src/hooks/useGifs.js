import React, { useState, useEffect } from "react";
import { getGifs } from '../services/GetGifs';

export const useGifs = ({keyword} = {keyword: null}) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // recover the keyword of localStorage
    const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')

    getGifs({ keyword: keywordToUse }).then((gifsResult) => {
      setGifs(gifsResult);
      setLoading(false);
      
      // Save the keyword of localStorage in keyword
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword]);

  return {loading, gifs}
};
