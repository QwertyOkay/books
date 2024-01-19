import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import Section from 'components/Section';
import Container from 'components/Container';
import ProductHeader from 'components/ProductHeader/ProductHeader';
import ProductImageWithCaption from 'components/ProductImageWithCaption/ProductImageWithCaption';
import ProductReviews from 'components/ProductReviews/ProductReviews';

// import ProductDetails from 'components/ProductDetails/ProductDetails';

import styles from './Product.module.scss';

function Product() {
  const [selectedImg] = useState('image');
  const { id } = useParams();
  const catId = parseInt(id, 10);
  const productItem = products.find(item => item.id === catId);

  if (!productItem) {
    return <div>Product not found</div>;
  }

  return (
    <Section>
      <Container variant="Product">
        <ProductHeader />
        <article className={styles.product}>
          <ProductImageWithCaption
            image={productItem[selectedImg]}
            name={productItem.name}
            downloads={productItem.downloads}
          />

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

            <ProductReviews reviews={productItem.reviews} />
          </div>
        </article>
      </Container>
    </Section>
  );
}

export default Product;
