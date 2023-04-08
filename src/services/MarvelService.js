import axios from 'axios';

const API_KEY = 'apikey=cee0614dcab79ba8faa2fc85343f554f';
const BASE_URL = 'https://gateway.marvel.com:443/v1/public/';

class MarvelService {
  getResource = async url => {
    const res = await axios.get(`${BASE_URL}${url}${API_KEY}`);
    return res.data.data;
  };

  /**
   * @param {number} limit
   * @param {number} offset num of skipped results
   * @return {Promise<Array>}
   */

  getAllCharacters = async (limit, offset) => {
    try {
      const res = await this.getResource(
        `characters?orderBy=name&limit=${limit}&offset=${offset}&`
      );
      const { results } = res;
      const characters = results.map(({ id, name, thumbnail }) => ({
        id,
        name,
        thumbnail,
      }));
      return characters;
    } catch (err) {
      console.error(err);
    }
  };

  getCharacterById = async id => {
    try {
      const res = await this.getResource(`characters/${id}?`);
      const { results } = res;
      const { name, description, thumbnail, urls } = results[0];
      return { id, name, description, thumbnail, urls };
    } catch (err) {
      console.error(err);
    }
  };

  getCharactersComics = async id => {
    try {
      const res = await this.getResource(
        `characters/${id}/comics?orderBy=focDate&limit=10&`
      );
      const { results } = res;
      const comics = results.map(({ id, title, urls }) => ({
        id,
        title,
        urls,
      }));
      return comics;
    } catch (err) {
      console.error(err);
    }
  };

  getAllComics = async (limit, offset) => {
    try {
      const res = await this.getResource(
        `comics?orderBy=focDate&limit=${limit}&offset=${offset}&`
      );
      const { results } = res;
      const comics = results.map(({ id, title, thumbnail, prices }) => ({
        id,
        title,
        thumbnail,
        prices,
      }));
      // console.log(limit, offset);
      return comics;
    } catch (err) {
      console.error(err);
    }
  };

  getComicsById = async id => {
    try {
      const res = await this.getResource(`comics/${id}?`);
      const { results } = res;
      const { title, description, pageCount, textObjects, prices, thumbnail } =
        results[0];
      return { title, description, pageCount, textObjects, prices, thumbnail };
    } catch (err) {
      console.error(err);
    }
  };
}

export default MarvelService;
