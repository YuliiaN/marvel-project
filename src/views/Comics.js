import css from './Comics.module.css';
import ContainerStyled from 'components/Container/Container.styled';
import avengers from '../img/Avengers.png';
import logo from '../img/Avengers_logo.png';
import { HeroBtn, BtnInner } from 'components/Hero/Hero.styled';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { useState, useEffect } from 'react';
import { api } from 'components/Hero/Hero';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchAllComics(offset);
  }, []);

  useEffect(() => {
    fetchAllComics(offset);
  }, [offset]);

  async function fetchAllComics(offset) {
    try {
      const res = await api.getAllComics(offset);
      setComics(prevData => (prevData.length ? [...comics, ...res] : [...res]));
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleClick = () => {
    setOffset(prevState => prevState + 9);
  };

  return (
    <>
      <ContainerStyled>
        <div className={css.banner}>
          <img src={avengers} className={css.avengers} alt="avengers heroes" />
          <h1 className={css.title}>New comics every week! Stay tuned!</h1>
          <img src={logo} className={css.logo} alt="avengers logo" />
        </div>
      </ContainerStyled>

      <section style={{ padding: '45px 0 50px' }}>
        <ContainerStyled>
          {!!comics.length && (
            <ul className={css.list}>
              {comics.map(({ id, title, thumbnail, prices }) => (
                <li key={nanoid()} className={css.item}>
                  <Link
                    to={`/${routes.COMICS}/${id}`}
                    state={{ from: location }}
                  >
                    <img
                      className={css.img}
                      src={`${thumbnail.path}.${thumbnail.extension}`}
                      alt={title}
                    />
                    <h2 className={css.subtitle}>{title}</h2>
                    <p className={css.price}>
                      {prices[0].price
                        ? `${prices[0].price}$`
                        : 'not available'}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}

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
        </ContainerStyled>
      </section>
    </>
  );
};

export default Comics;
