import { render, fireEvent } from '@testing-library/react';
import Chose from './chose';

describe('Chose', () => {
  test('изменение класснейма', () => {
    const chosen = 'Item 1';
    const choseItem = 'Item 1';
    const setChosen = jest.fn();

    const { getByText } = render(
      <Chose chosen={chosen} setChosen={setChosen} choseItem={choseItem} />
    );

    const item = getByText('Item 1');

    expect(item).toHaveClass('item');

    fireEvent.click(item);

    expect(item).toHaveClass('item active');
  });

  test('класснейм не меняется', () => {
    const chosen = 'Item 1';
    const choseItem = 'Item 2';
    const setChosen = jest.fn();

    const { getByText } = render(
      <Chose chosen={chosen} setChosen={setChosen} choseItem={choseItem} />
    );

    const item = getByText('Item 2');
    expect(item).toHaveClass('item');
    fireEvent.click(item);
    expect(item).toHaveClass('item');
  });
});
