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

  return (
    <Section>
      <Container>
        <header className={styles.buttonHolder}>
          <ButtonBack />
        </header>
        {/* <div className={styles.product}>
          <div className={styles.left}>
            <div className={styles.images}></div>
            <div className={styles.mainImg}>
              <img src={productItem[selectedImg]} alt={productItem.name} />
            </div>
          </div>
          <div className={styles.right}>
            <h2>{productItem.name}</h2>
            <p className={styles.right}>{productItem.desc}</p>
          </div>
        </div> */}
        <article className={styles.product}>
          <figure className={styles.figure}>
            <img
              src={productItem[selectedImg]}
              alt={productItem.name}
              className={styles.mainImg}
            />
            <figcaption className={styles.caption}>
              Downloads: {productItem.downloads}
            </figcaption>
          </figure>
          <div className={styles.info}>
            <h1 className={styles.name}>Title: {productItem.name}</h1>
            <h3 className={styles.author}>Author: {productItem.author}</h3>
            <p className={styles.rating}>Rating: {productItem.rating}</p>
            <p className={styles.description}>
              Description: {productItem.description}
            </p>
            <div className={styles.reviews}>
              Reader reviews:
              {productItem.reviews.map(review => (
                <blockquote key={review.id} className={styles.review}>
                  "{review.text}"
                  <footer className={styles.reviewer}>
                    {review.reviewer}, {review.age} years old
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </article>
      </Container>
    </Section>
  );
}

export default Product;
