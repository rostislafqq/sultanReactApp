import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CartItem from './cart';

test('верный путь у ссылки', () => {
  render(
    <MemoryRouter>
      <CartItem count={0} cost={0} toggleBurger={() => {}} />
    </MemoryRouter>
  );

  const cartLink = screen.getByRole('link', { name: /корзина/i });
  expect(cartLink).toHaveAttribute('href', '/sultanReactApp/cart');
});
