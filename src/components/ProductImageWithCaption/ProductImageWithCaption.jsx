// import React from 'react';
// import styles from './ProductImageWithCaption.module.scss';

// function ProductImageWithCaption({ image, name, downloads }) {
//   return (
//     <figure className={styles.figure}>
//       <img src={image} alt={name} className={styles.mainImg} />
//       <figcaption className={styles.caption}>
//         <div className={styles.detailBlock}>
//           <span className={styles.key}>Downloads: </span>
//           <span className={styles.value}>{downloads}</span>
//         </div>
//       </figcaption>
//     </figure>
//   );
// }

// export default ProductImageWithCaption;

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Стили для эффекта размытия
import styles from './ProductImageWithCaption.module.scss';

function ProductImageWithCaption({ image, name, downloads }) {
  return (
    <figure className={styles.figure}>
      <LazyLoadImage
        src={image}
        alt={name}
        className={styles.mainImg}
        effect="blur" // Эффект при загрузке
      />
      <figcaption className={styles.caption}>
        <div className={styles.detailBlock}>
          <span className={styles.key}>Downloads: </span>
          <span className={styles.value}>{downloads}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default ProductImageWithCaption;
