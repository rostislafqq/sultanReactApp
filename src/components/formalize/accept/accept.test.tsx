import React from 'react';
import { render, fireEvent, getByAltText } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Accept from './accept';

test('вызов функии при нажатии на картинку', () => {
    const acceptMeMock = jest.fn();
    const { getByAltText } = render(
      <MemoryRouter>
        <Accept active={true} acceptMe={acceptMeMock} />
      </MemoryRouter>
    );
    const link = getByAltText('x');
    fireEvent.click(link);
    expect(acceptMeMock).toHaveBeenCalled();
  });