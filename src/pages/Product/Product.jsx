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
        <div className={styles.buttonHolder}>
          <ButtonBack />
        </div>
        <div className={styles.product}>
          <div className={styles.left}>
            <div className={styles.images}></div>
            <div className={styles.mainImg}>
              <img src={productItem[selectedImg]} alt={productItem.title} />
            </div>
          </div>
          <div className={styles.right}>
            <h2>{productItem.title}</h2>
            <p className={styles.right}>{productItem.desc}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Product;
