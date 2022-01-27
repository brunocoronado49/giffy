import {limit, apiKey, apiUrl} from './settings';

const fromApi = apiResponse => {
    const {data = []} = apiResponse;
    return data;
}

export const getTrending = async ({signal}) => {
    const apiURL = `${apiUrl}/trending/searches?api_key=${apiKey}`

    return await fetch(apiURL, {signal})
        .then(res => res.json())
        .then(fromApi);
}
