import { Link } from 'react-router-dom';
import ControlRating from 'components/ControlRating';
import styles from './Card.module.scss';

function Card({ item, type }) {
  return (
    <Link to={`/product/${item?.id}`} className={styles.card}>
      <div className={styles.cardImage}>
        <img src={item?.image} alt={item?.title} className={styles.mainImage} />
        {item.badge && (
          <div className={styles.badge}>
            <span>{item.badge}</span>
          </div>
        )}
      </div>
      <div className={styles.desc}>
        <h2 className={styles.title}>{item?.title}</h2>
        {item.type !== type && (
          <ControlRating
            rating={Number(item.rating)}
            readOnly={true}
            name="read-only"
            size="small"
          />
        )}

        <ul className={styles.priceList}>
          {item?.oldPrice && (
            <li className={styles.oldPrice}>€ {item?.oldPrice.toFixed(2)}</li>
          )}
          <li className={styles.price}>€ {item?.price.toFixed(2)}</li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;
