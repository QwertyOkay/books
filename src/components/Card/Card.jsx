import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Добавьте этот импорт
import 'react-lazy-load-image-component/src/effects/blur.css'; // Опционально, для эффекта размытия при загрузке
import ControlRating from 'components/ControlRating';
import styles from './Card.module.scss';

function Card({ item, type }) {
  return (
    <Link to={`/product/${item?.id}`} className={styles.card}>
      <div className={styles.cardImage}>
        {/* Замените тег img на LazyLoadImage */}
        <LazyLoadImage
          src={item?.image} // Используйте URL изображения из вашего объекта item
          alt={item?.title} // Альтернативный текст из объекта item
          effect="blur" // Эффект размытия при загрузке (опционально)
          className={styles.mainImage} // Используйте тот же класс стиля
        />
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
        <ul className={styles.descList}>
          <li className={styles.desc}>{item?.desc}</li>
          <li className={styles.rating}>{item?.rating}</li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;

// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { useEffect, useState } from 'react'; // Добавьте эти импорты
// import ControlRating from 'components/ControlRating';
// import styles from './Card.module.scss';

// function Card({ item, type }) {
//   // Состояние, отвечающее за проверку, просмотрен ли товар
//   const [isViewed, setIsViewed] = useState(false);

//   // Путь к иконкам
//   const viewedIcon = '/path/to/viewed/icon.svg';
//   const notViewedIcon = '/path/to/not-viewed/icon.svg';

//   useEffect(() => {
//     // Проверяем статус просмотра в локальном хранилище
//     const viewedStatus = localStorage.getItem(`viewed-${item.id}`);
//     setIsViewed(viewedStatus === 'true');
//   }, [item.id]);

//   // Функция для обновления статуса просмотра
//   const handleView = () => {
//     localStorage.setItem(`viewed-${item.id}`, 'true');
//     setIsViewed(true);
//     // Здесь может быть логика обновления состояния через Redux
//   };

//   return (
//     <Link to={`/product/${item?.id}`} className={styles.card} onClick={handleView}>
//       <div className={styles.cardImage}>
//         <LazyLoadImage
//           src={item?.image}
//           alt={item?.title}
//           effect="blur"
//           className={styles.mainImage}
//         />
//         {/* Условное отображение иконки на основе статуса */}
//         <div className={styles.badge}>
//           <img src={isViewed ? viewedIcon : notViewedIcon} alt="Status" />
//         </div>
//       </div>
//       <div className={styles.desc}>
//         {/* Остальной код */}
//       </div>
//     </Link>
//   );
// }

// export default Card;
