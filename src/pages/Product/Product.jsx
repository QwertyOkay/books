import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import Section from 'components/Section';
import Container from 'components/Container';
import ButtonBack from 'components/ButtonBack/ButtonBack';

import styles from './Product.module.scss';

function Product() {
  const [selectedImg] = useState('image');
  const { id } = useParams();
  const catId = parseInt(id, 10);
  const productItem = products.find(item => item.id === catId);

  return (
    <Section>
      <Container variant="Product">
        <header className={styles.header}>
          <ButtonBack />
        </header>
        <article className={styles.product}>
          <figure className={styles.figure}>
            <img
              src={productItem[selectedImg]}
              alt={productItem.name}
              className={styles.mainImg}
            />
            <figcaption className={styles.caption}>
              <div className={styles.detailBlock}>
                <span className={styles.key}>Downloads: </span>
                <span className={styles.value}>{productItem.downloads}</span>
              </div>
            </figcaption>
          </figure>
          <div className={styles.info}>
            <div className={styles.detailBlock}>
              <span className={styles.key}>Title:</span>
              <h1 className={styles.value}>{productItem.name}</h1>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.key}>Author:</span>
              <h3 className={styles.value}>{productItem.author}</h3>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.key}>Rating:</span>
              <p className={styles.value}>{productItem.rating}</p>
            </div>
            <div className={styles.detailBlock}>
              <span className={styles.key}>Description:</span>
              <p className={styles.value}>{productItem.description}</p>
            </div>

            {/* Отдельная таблица для отзывов */}
            <table className={styles.reviewsTable}>
              <tbody>
                <tr>
                  <th className={styles.reviewHeader}>Reader Reviews:</th>
                  <td>
                    {productItem.reviews.map((review, index) => (
                      <p key={review.id} className={styles.review}>
                        "{review.text}"
                        <cite className={styles.reviewer}>
                          {review.reviewer}, {review.age} years old
                        </cite>
                      </p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </Container>
    </Section>
  );
}

export default Product;
