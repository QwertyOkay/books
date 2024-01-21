import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import Section from 'components/Section';
import Container from 'components/Container';
import ProductHeader from 'components/ProductHeader/ProductHeader';
import ProductImageWithCaption from 'components/ProductImageWithCaption/ProductImageWithCaption';
import ProductDetails from 'components/ProductDetails/ProductDetails';
import ProductReviews from 'components/ProductReviews/ProductReviews';
import styles from './Product.module.scss';

function Product() {
  const [selectedImg] = useState('image');
  const { id } = useParams();
  const catId = parseInt(id, 10);
  const productItem = products
    ? products.find(item => item.id === catId)
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <ProductDetails
              title={productItem.name}
              author={productItem.author}
              rating={productItem.rating}
              description={productItem.description}
            />

            <ProductReviews reviews={productItem.reviews} />
          </div>
        </article>
      </Container>
    </Section>
  );
}

export default Product;
