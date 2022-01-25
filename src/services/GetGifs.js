import { initialGifs, otherGifs } from '../URL/Gifs';

const apiKey = 'dCzb9bR9IUraKv4mQ4MFHKO49ZOPQ722'

export const getGifs = async ({keyword = 'cyberpunk+2077'} = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=pg-13&lang=en`

    return await fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      const gifsURL = data.map(image => {
          const {images, title, id} = image
          const {url} = images.downsized_medium
          return {title, id, url}
      })

      return gifsURL;
    })
}
