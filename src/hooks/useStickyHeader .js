import { useEffect, useState } from 'react';

const useStickyHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.body.style.overflow = 'unset';
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCartOpen]);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return {
    isCartOpen,
    isSticky: scrollPosition >= 100,
    toggleCartOpen,
  };
};

export default useStickyHeader;
