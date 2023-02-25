import { Link, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { routes } from 'routes';
import { api } from 'components/Hero/Hero';
import css from './ComicsDetails.module.css';
import ContainerStyled from 'components/Container/Container.styled';

const ComicsDetails = () => {
  const { comicsId } = useParams();
  const [info, setInfo] = useState(null);
  const location = useLocation();

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
  const desc = description ? description : 'No description about the comics';
  const lang = textObjects[0].language && textObjects[0].language;
  const backPath = location.state?.from ?? routes.HOME;
  const pages = pageCount
    ? pageCount
    : 'No information about the number of pages';
  const price = prices[0].price ? `${prices[0].price}$` : 'not available';

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
              <p className={css.pages}>{pages}</p>
              {lang && <p className={css.lang}>Language: {lang}</p>}
              <p className={css.price}>{price}</p>
            </div>
            <Link className={css.button} to={backPath}>
              Back to all
            </Link>
          </>
        )}
      </div>
    </ContainerStyled>
  );
};

export default ComicsDetails;
