import axios from 'axios';

const API_KEY = 'apikey=cd3b3e4936caf14a80d50b4331d4386c';
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/';

class MarvelService {
  getResource = async url => {
    try {
      const res = await axios.get(url);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  getAllCharacters = () => {
    return this.getResource(`${BASE_URL}characters?limit=9&${API_KEY}
`);
  };

  getCharacter = id => {
    return this.getResource(`${BASE_URL}characters/${id}?${API_KEY}
`);
  };
}

export default MarvelService;
