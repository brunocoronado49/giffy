import React, { useState, useEffect } from 'react';
import { getGifs } from '../services/GetGifs';
import Gif from './Gif';

const ListOfGifs = ({params}) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    const {keyword} = params;

    useEffect(() => {
      setLoading(true)
      console.log('Effect executed!');
      getGifs({keyword}).then(gifs => {
        setGifs(gifs)
        setLoading(false)
      });
    }, [keyword])

    if(loading) return <h1>Cargando gifs...</h1>
    
    return (
      <div>
        {
          gifs.map(({id, title, url}) => (
            <Gif
                key={id}  
                title={title} 
                id={id} 
                url={url} 
            />
          ))
        }
      </div>
    );
};

export default ListOfGifs;
