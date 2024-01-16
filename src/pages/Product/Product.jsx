import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { addToCart } from 'redux/cartSlice';
import products from '../../data/products.json';
import Button from 'components/Button';
import Section from 'components/Section';
import Container from 'components/Container';
import ControlRating from 'components/ControlRating';
import Collapsible from 'components/Collapsible';
import PaymentsImg from 'assets/images/payment.png';
import styles from './Product.module.scss';

function Product() {
  const [selectedImg, setSelectedImg] = useState('image');
  const [quantity, setQuantity] = useState(1);
  const catId = parseInt(useParams().id);
  const dispatch = useDispatch();

  let productItem = products.find(item => item.id === catId);
  const [selectedColor, setSelectedColor] = useState(productItem.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productItem.sizes[0]);

  const cartProduct = {
    id: productItem.id,
    title: productItem.title,
    desc: productItem.desc,
    image: productItem.image,
    price: productItem.price,
    quantity,
  };

  return (
    <Section>
      <Container>
        <div className={styles.product}>
          <div className={styles.left}>
            <div className={styles.images}>
              <img
                src={productItem.image}
                alt={productItem.title}
                onClick={() => setSelectedImg('image')}
              />
              {productItem.image2 && (
                <img
                  src={productItem.image2}
                  alt={productItem.title}
                  onClick={() => setSelectedImg('image2')}
                />
              )}
            </div>
            <div className={styles.mainImg}>
              <img src={productItem[selectedImg]} alt={productItem.title} />
            </div>
          </div>
          <div className={styles.right}>
            <h2>{productItem.title}</h2>
            <p className={styles.right}>{productItem.desc}</p>
            <ControlRating
              rating={Number(productItem.rating)}
              name="half-rating"
            />
            <p className={styles.price}>{productItem.price.toFixed(2)}€</p>
            <div className={styles.option}>
              {productItem.color && (
                <>
                  <h3 className={styles.optionTitle}>
                    Color: <span>{selectedColor}</span>
                  </h3>
                  <div>
                    {productItem.colors?.map(option => {
                      const colorStyle = {
                        backgroundColor: option.replace(/ /g, ''),
                      };

                      return (
                        <label
                          htmlFor={option}
                          key={option}
                          onClick={() => setSelectedColor(option)}
                        >
                          <input
                            className={styles.radioInput}
                            type="radio"
                            name="color"
                            id={option}
                            value={option}
                            onChange={e => setSelectedColor(e.target.value)}
                            checked={selectedColor === option}
                          />
                          <span
                            className={styles.radioColor}
                            style={colorStyle}
                          />
                        </label>
                      );
                    })}
                  </div>
                </>
              )}

              {productItem.color && (
                <>
                  <h3 className={styles.optionTitle}>
                    Size: <span>{selectedSize}</span>
                  </h3>
                  <div>
                    {productItem.sizes?.map(size => {
                      return (
                        <label
                          htmlFor={size}
                          key={size}
                          onClick={() => setSelectedSize(size)}
                        >
                          <input
                            className={styles.radioInput}
                            type="radio"
                            name="size"
                            id={size}
                            value={size}
                            onChange={e => setSelectedSize(e.target.value)}
                            checked={selectedSize === size}
                          />
                          <span className={styles.size__value}>{size}</span>
                        </label>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            <div className={styles.quantity}>
              <button
                className={styles.productBtn}
                onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              <p className={styles.quantityValue}>{quantity}</p>
              <button
                className={styles.productBtn}
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
            <Button
              variant="btnProduct"
              onClick={() => dispatch(addToCart(cartProduct))}
              title={'ORDER'}
              component={<AddShoppingCartIcon />}
            ></Button>
            <ul className={styles.linkList}>
              <li className={styles.link}>
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </li>
              <li className={styles.link}>
                <BalanceIcon /> ADD TO COMPARE
              </li>
            </ul>
            <div className={styles.details}>
              <Collapsible label="Features">
                <ul>
                  {productItem.features?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Collapsible>
              <Collapsible label="Payments">
                <img src={PaymentsImg} alt="Payment options" />
              </Collapsible>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Product;
