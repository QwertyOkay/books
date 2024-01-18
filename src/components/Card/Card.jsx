import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ControlRating from 'components/ControlRating';
import styles from './Card.module.scss';
import { ReactComponent as ViewedIconSVG } from '../../assets/images/Already.svg';
import { ReactComponent as DefaultIconSVG } from '../../assets/images/Notyet.svg';

function Card({ item, type }) {
  // Состояние для отслеживания, просмотрен ли товар
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    // При монтировании компонента проверяем, просмотрен ли товар
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
    setIsViewed(!!viewedItems[item.id]);
  }, [item.id]);

  const handleViewed = () => {
    // Отмечаем товар как просмотренный при клике на карточку
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
    viewedItems[item.id] = true;
    localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
    setIsViewed(true);
  };

  // Инлайновый стиль для фона карточки
  const cardStyle = {
    backgroundImage: `url(${item?.image}), linear-gradient(lightgray 50%, #D9D9D9)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: '15px', // Добавление border-radius
  };

  return (
    // Вызываем handleViewed при клике на ссылку
    <Link
      to={`/product/${item?.id}`}
      className={styles.card}
      onClick={handleViewed}
    >
      <div className={styles.cardImage} style={cardStyle}>
        <LazyLoadImage
          src={item?.image}
          alt={item?.title}
          effect="blur"
          className={styles.mainImage}
        />
        {/* Отображаем badge, если он есть */}
        {item.badge && (
          <div className={styles.badge}>
            {isViewed ? <ViewedIconSVG /> : <DefaultIconSVG />}
          </div>
        )}
      </div>
      <div className={styles.desc}>
        <h2 className={styles.title}>{item?.title}</h2>
        {/* Отображаем ControlRating, если тип товара не совпадает с переданным типом */}
        {item.type !== type && (
          <ControlRating
            rating={Number(item.rating)}
            readOnly={true}
            name="read-only"
            size="small"
          />
        )}
        <ul className={styles.descList}>
          <li className={styles.desc}>{item?.desc}</li>
          <li className={styles.rating}>{item?.rating}</li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;
