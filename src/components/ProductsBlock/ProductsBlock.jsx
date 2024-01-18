import styles from './ProductsBlock.module.scss';
import products from '../../data/products.json';
import Section from 'components/Section';
import Container from 'components/Container';
import Card from 'components/Card/Card';
import Dropdown from 'components/Dropdown/Dropdown';

function ProductsBlock({ type }) {
  return (
    <Section variant="products">
      <Container>
        <div className={styles.sectionBox}>
          <h2 className={styles.sectionTitle}>Books read this month</h2>
        </div>

        <div className={styles.sectionWrap}>
          <div>
            <span className={styles.sectionNumber}>122 books</span>
          </div>
          <Dropdown />
        </div>
        <div className={styles.products}>
          {products?.map(item =>
            item.type === type ? (
              <li className={styles.productsItem} key={item.id}>
                <Card item={item} type={type} />
              </li>
            ) : null
          )}
        </div>
      </Container>
    </Section>
  );
}

export default ProductsBlock;