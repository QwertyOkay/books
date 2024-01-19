import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList/ProductList';

describe('ProductList Component', () => {
  const mockProducts = [
    { id: 1, name: 'Test Book 1', author: 'Author 1', type: 'best sellers' },
    { id: 2, name: 'Test Book 2', author: 'Author 2', type: 'best sellers' }
  ];

  it('renders a list of products', () => {
    render(<ProductList products={mockProducts} type="best sellers" />);
    expect(screen.getByText('Test Book 1')).toBeInTheDocument();
    expect(screen.getByText('Test Book 2')).toBeInTheDocument();
  });
});
