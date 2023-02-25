import poster from '../img/x-men.png';
import { Link } from 'react-router-dom';
import css from './ComicsDetails.module.css';
import ContainerStyled from 'components/Container/Container.styled';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from 'components/Hero/Hero';

const ComicsDetails = () => {
  const { comicsId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (!comicsId) {
      return;
    }

    (async function fetchComicsDetails() {
      const res = await api.getComicsById(comicsId);
      setInfo(res);
    })();
  }, [comicsId]);

  if (!info) return;

  const { title, description, pageCount, textObjects, prices, thumbnail } =
    info;
  const desc = description
    ? description
    : `Unfortunately, there is no description about this comics`;
  const lang = !!textObjects.length && textObjects.language;

  return (
    <ContainerStyled>
      <div className={css.card}>
        {info && (
          <>
            <img
              className={css.img}
              src={`${thumbnail.path}.${thumbnail.extension}`}
              alt={title}
            />
            <div className={css.content}>
              <h2 className={css.title}>{title}</h2>
              <p className={css.desc}>{desc}</p>
              <p className={css.pages}>{pageCount} pages</p>
              {lang && <p className={css.lang}>Language: {lang}</p>}
              <p className={css.price}>{prices[0].price}$</p>
            </div>
            <Link to="" className={css.button}>
              Back to all
            </Link>
          </>
        )}
      </div>
    </ContainerStyled>
  );
};

export default ComicsDetails;
