import { render } from '@testing-library/react';
import FormHeader from './formHeader';
import { BrowserRouter } from 'react-router-dom';

test('3 ссылки в компоненте', () => {
  const { getAllByRole } = render(
    <BrowserRouter>
      <FormHeader />
    </BrowserRouter>
  );
  const links = getAllByRole('link');
  expect(links.length).toBe(3);
});
