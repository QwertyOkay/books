import { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import Section from 'components/Section';
import Container from 'components/Container';
import ButtonBack from 'components/ButtonBack/ButtonBack';

import styles from './Product.module.scss';

function Product() {
  const [selectedImg] = useState('image');
  const catId = parseInt(useParams().id);
  let productItem = products.find(item => item.id === catId);

  const [firstReview, ...otherReviews] = productItem.reviews;

  return (
    <Section>
      <Container>
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
                <span className={styles.key}>Downloads:</span>
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
            <div className={styles.reviewsContainer}>
              <div className={styles.firstReviewBlock}>
                <span className={styles.key}>Reader Reviews:</span>
                <blockquote key={firstReview.id} className={styles.review}>
                  <p className={styles.value}>"{firstReview.text}"</p>
                  <cite className={styles.reviewer}>
                    {firstReview.reviewer}, {firstReview.age} years old
                  </cite>
                </blockquote>
              </div>
              <div className={styles.otherReviews}>
                {otherReviews.map(review => (
                  <blockquote key={review.id} className={styles.review}>
                    <p className={styles.value}>"{review.text}"</p>
                    <cite className={styles.reviewer}>
                      {review.reviewer}, {review.age} years old
                    </cite>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}

export default Product;
