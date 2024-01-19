import React from 'react';
import styles from './ProductReviews.module.scss';

function ProductReviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <div className={styles.noReviews}>No reviews yet.</div>;
  }

  return (
    <table className={styles.reviewsTable}>
      <tbody>
        <tr>
          <th className={styles.reviewHeader}>Reader Reviews:</th>
          <td>
            {reviews.map(review => (
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
  );
}

export default ProductReviews;
