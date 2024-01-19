import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsBlock from '../components/ProductsBlock/ProductsBlock';
import { BrowserRouter } from 'react-router-dom';

describe('ProductsBlock Component', () => {
  it('renders correctly and shows the title', () => {
    render(
      <BrowserRouter>
        <ProductsBlock type="best sellers" />
      </BrowserRouter>
    );
    expect(screen.getByText('Books read this month')).toBeInTheDocument();
  });
});
