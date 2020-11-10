/* eslint-disable indent */
const API = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default getData;
