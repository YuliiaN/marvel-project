import axios from 'axios';

const API_KEY = 'apikey=cee0614dcab79ba8faa2fc85343f554f';
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/';

class MarvelService {
  getResource = async url => {
    const res = await axios.get(`${BASE_URL}${url}${API_KEY}`);
    return res.data.data;
  };

  getAllCharacters = async offset => {
    const res = await this.getResource(`characters?limit=9&offset=${offset}&`);
    const { results } = res;
    const characters = results.map(({ id, name, thumbnail }) => ({
      id,
      name,
      thumbnail,
    }));
    return characters;
  };

  getCharacter = async id => {
    const res = await this.getResource(`characters/${id}?`);
    const { results } = res;
    const { name, description, thumbnail, urls } = results[0];
    return { id, name, description, thumbnail, urls };
  };

  getCharactersComics = async id => {
    const res = await this.getResource(
      `characters/${id}/comics?orderBy=focDate&limit=10&`
    );
    const { results } = res;
    const comics = results.map(({ id, title, urls }) => ({ id, title, urls }));
    return comics;
  };

  getAllComics = async offset => {
    const res = await this.getResource(
      `comics?orderBy=focDate&limit=12&offset=${offset}&`
    );
    const { results } = res;
    const comics = results.map(({ id, title, thumbnail, prices }) => ({
      id,
      title,
      thumbnail,
      prices,
    }));
    return comics;
  };

  getComicsById = async id => {
    const res = await this.getResource(`comics/${id}?`);
    const { results } = res;
    const { title, description, pageCount, textObjects, prices, thumbnail } =
      results[0];
    return { title, description, pageCount, textObjects, prices, thumbnail };
  };
}

export default MarvelService;
