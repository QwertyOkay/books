import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import LoaderIcon from 'components/LoaderIcon/LoaderIcon';
import styles from './InfiniteScroll.module.scss';

const InfiniteScroll = ({ onLoadMore, loading, hasMore, children }) => {
  const loaderRef = useRef(null);

  const handleObserver = useCallback(
    entities => {
      const target = entities[0];
      if (target.isIntersecting && !loading && hasMore) {
        onLoadMore();
      }
    },
    [loading, onLoadMore, hasMore]
  );

  useEffect(() => {
    const observerRefValue = loaderRef.current;
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerRefValue) observer.observe(observerRefValue);

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [handleObserver]);

  return (
    <>
      {children}
      {loading && (
        <div className={styles.holderLoader}>
          <LoaderIcon />
        </div>
      )}
      <div ref={loaderRef} />
    </>
  );
};

InfiniteScroll.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfiniteScroll;
