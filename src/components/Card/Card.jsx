// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import ControlRating from 'components/ControlRating';
// import styles from './Card.module.scss';
// import { ReactComponent as ViewedIconSVG } from '../../assets/images/Already.svg';
// import { ReactComponent as DefaultIconSVG } from '../../assets/images/Notyet.svg';

// function Card({ item, type }) {
//   const [isViewed, setIsViewed] = useState(false);

//   useEffect(() => {
//     const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
//     setIsViewed(!!viewedItems[item.id]);
//   }, [item.id]);

//   const handleViewed = () => {
//     const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
//     viewedItems[item.id] = true;
//     localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
//     setIsViewed(true);
//   };

//   return (
//     <Link
//       to={`/product/${item?.id}`}
//       className={styles.card}
//       onClick={handleViewed}
//     >
//       <div className={styles.cardImage}>
//         <LazyLoadImage
//           src={item?.image}
//           alt={item?.author}
//           effect="blur"
//           className={styles.mainImage}
//         />
//         {/* Отображаем badge, если он есть */}
//         {item.badge && (
//           <div className={styles.badge}>
//             {isViewed ? <ViewedIconSVG /> : <DefaultIconSVG />}
//           </div>
//         )}
//       </div>
//       <div className={styles.desc}>
//         <h2 className={styles.author}>{item?.author}</h2>
//         {/* Отображаем ControlRating, если тип товара не совпадает с переданным типом */}
//         {item.type !== type && (
//           <ControlRating
//             rating={Number(item.rating)}
//             readOnly={true}
//             name="read-only"
//             size="small"
//           />
//         )}
//         <ul className={styles.descList}>
//           <li className={styles.desc}>{item?.name}</li>
//           <li className={styles.rating}>{item?.rating}</li>
//         </ul>
//       </div>
//     </Link>
//   );
// }

// export default Card;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import ControlRating from 'components/ControlRating';
// import styles from './Card.module.scss';
// import { ReactComponent as ViewedIconSVG } from '../../assets/images/Already.svg';
// import { ReactComponent as DefaultIconSVG } from '../../assets/images/Notyet.svg';

// function Card({ item, type }) {
//   const [isViewed, setIsViewed] = useState(false);
//   const [isImageLoading, setIsImageLoading] = useState(true); // Добавляем состояние для загрузки изображения

//   useEffect(() => {
//     const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
//     setIsViewed(!!viewedItems[item.id]);
//   }, [item.id]);

//   const handleViewed = () => {
//     const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
//     viewedItems[item.id] = true;
//     localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
//     setIsViewed(true);
//   };

//   const handleImageLoaded = () => {
//     setIsImageLoading(false); // Изменяем состояние при загрузке изображения
//   };

//   return (
//     <Link
//       to={`/product/${item?.id}`}
//       className={styles.card}
//       onClick={handleViewed}
//     >
//       <div className={styles.cardImage}>
//         <LazyLoadImage
//           src={item?.image}
//           alt={item?.author}
//           effect="blur"
//           className={styles.mainImage}
//           onLoad={handleImageLoaded}
//         />
//         {/* Добавляем div для эффекта размытия */}
//         {isImageLoading && <div className={styles.imageBlurOverlay}></div>}
//         {item.badge && (
//           <div className={styles.badge}>
//             {isViewed ? <ViewedIconSVG /> : <DefaultIconSVG />}
//           </div>
//         )}
//       </div>
//       <div className={styles.desc}>
//         <h2 className={styles.author}>{item?.author}</h2>
//         {item.type !== type && (
//           <ControlRating
//             rating={Number(item.rating)}
//             readOnly={true}
//             name="read-only"
//             size="small"
//           />
//         )}
//         <ul className={styles.descList}>
//           <li className={styles.desc}>{item?.name}</li>
//           <li className={styles.rating}>{item?.rating}</li>
//         </ul>
//       </div>
//     </Link>
//   );
// }

// export default Card;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ControlRating from 'components/ControlRating';
import styles from './Card.module.scss';
import { ReactComponent as ViewedIconSVG } from '../../assets/images/Already.svg';
import { ReactComponent as DefaultIconSVG } from '../../assets/images/Notyet.svg';

function Card({ item, type }) {
  const [isViewed, setIsViewed] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
    setIsViewed(!!viewedItems[item.id]);
  }, [item.id]);

  const handleViewed = () => {
    const viewedItems = JSON.parse(localStorage.getItem('viewedItems') || '{}');
    viewedItems[item.id] = true;
    localStorage.setItem('viewedItems', JSON.stringify(viewedItems));
    setIsViewed(true);
  };

  const handleImageLoaded = () => {
    setIsImageLoading(false);
  };

  return (
    <Link
      to={`/product/${item?.id}`}
      className={styles.card}
      onClick={handleViewed}
    >
      <div className={styles.cardImage}>
        <LazyLoadImage
          src={item?.image}
          alt={item?.author}
          className={`${styles.mainImage} ${
            isImageLoading ? styles.loading : ''
          }`}
          onLoad={handleImageLoaded}
        />
        {item.badge && (
          <div className={styles.badge}>
            {isViewed ? <ViewedIconSVG /> : <DefaultIconSVG />}
          </div>
        )}
      </div>
      <div className={styles.desc}>
        <h2 className={styles.author}>{item?.author}</h2>
        {item.type !== type && (
          <ControlRating
            rating={Number(item.rating)}
            readOnly={true}
            name="read-only"
            size="small"
          />
        )}
        <ul className={styles.descList}>
          <li className={styles.desc}>{item?.name}</li>
          <li className={styles.rating}>{item?.rating}</li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;
