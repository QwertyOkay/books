import React from 'react';
import { render } from '@testing-library/react';
import ProductsBlock from 'components/ProductsBlock/ProductsBlock';

beforeAll(() => {
  global.IntersectionObserver = class {
    // eslint-disable-next-line no-useless-constructor
    constructor() {}
    disconnect() {}
    observe() {}
    takeRecords() {}
    unobserve() {}
  };
});

afterAll(() => {
  delete global.IntersectionObserver;
});

describe('ProductsBlock', () => {
  it('renders correctly', () => {
    const mockOnSort = jest.fn();
    const { asFragment } = render(<ProductsBlock type="someType" onSort={mockOnSort} />);
    expect(asFragment()).toMatchSnapshot();
  });
});