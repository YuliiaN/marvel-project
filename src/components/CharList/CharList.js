import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import debounce from 'debounce';
import { api } from 'components/Hero/Hero';
import CharListStyled from './CharList.styled';
import CharItem from 'components/CharItem/CharItem';
import { HeroBtn, BtnInner } from 'components/Hero/Hero.styled';
import Loader from 'components/Loader/Loader';

const CharList = ({ onCharSelected }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchAllCharacters(9, offset);
  }, [offset]);

  async function fetchAllCharacters(limit, offset) {
    try {
      const res = await api.getAllCharacters(limit, offset);
      setCharacters(prevData => [...prevData, ...res]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  const handleClick = debounce(() => {
    setOffset(prevState => prevState + 9);
  }, 500);

  return (
    <>
      {loading && <Loader />}
      {!!characters.length && (
        <div styles={{ height: '100%' }}>
          <CharListStyled>
            {characters.map(({ id, name, thumbnail }) => (
              <CharItem
                key={nanoid()}
                id={id}
                name={name}
                thumbnail={thumbnail}
                handleClick={onCharSelected}
              />
            ))}
          </CharListStyled>
          <HeroBtn
            style={{
              display: 'block',
              width: '170px',
              margin: '45px auto 0',
            }}
            onClick={handleClick}
          >
            <BtnInner>Load more</BtnInner>
          </HeroBtn>
        </div>
      )}
    </>
  );
};

export default CharList;
