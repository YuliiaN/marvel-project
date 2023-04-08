import { Link } from 'react-router-dom';
import { routes } from 'routes';
import css from './Comics.module.css';

const ComicsPage = ({ id, title, thumbnail, prices, location }) => {
  const route = `/${routes.COMICS}/${id}`;
  const imgPath = `${thumbnail.path}.${thumbnail.extension}`;
  const price = prices[0].price ? `${prices[0].price}$` : 'not available';

  return (
    <li className={css.item}>
      <Link to={route} state={{ from: location }}>
        <img className={css.img} src={imgPath} alt={title} />
        <h2 className={css.subtitle}>{title}</h2>
        <p className={css.price}>{price}</p>
      </Link>
    </li>
  );
};

export default ComicsPage;
