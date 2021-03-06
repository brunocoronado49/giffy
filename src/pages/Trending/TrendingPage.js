import React, { useState, useEffect } from "react";
import { getTrending } from "../../services/GetTrending";
import Trending from "../../components/trending/Trending";

const TrendingPage = ({title}) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
      const controller = new AbortController();
      getTrending({signal: controller.signal})
        .then(setTrends)
        .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <Trending name="Trending" options={trends}/>
    </div>
  );
};

export default TrendingPage;
