import React, { useState, useEffect } from "react";
import { getTrending } from "../../services/GetTrending";
import Trending from "../../components/trending/Trending";

const TrendingPage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
      const controller = new AbortController();
      getTrending({signal: controller.signal})
        .then(setTrends)
        .catch(error => {})
  }, [])

  return <Trending name="Trending" options={trends}/>
};

export default TrendingPage;
