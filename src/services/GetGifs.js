import {limit, apiKey, apiUrl} from './settings';

export const getGifs = async ({keyword = 'cyberpunk+2077'} = {}) => {
    const apiURL = `${apiUrl}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=pg-13&lang=en`

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
