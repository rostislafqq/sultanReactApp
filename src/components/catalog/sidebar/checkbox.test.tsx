import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './checkbox';
import { IManuf } from '../../../types/card';
import { setChecked } from '../../../store/Slices/cardsSlice';
 

describe('Checkbox', () => {
  const mockDispatch = jest.fn();

  const manuf: IManuf = {
    manuf: 'Paclan',
    count: 1,
    checked: false,
  };

  beforeEach(() => {
    jest.resetAllMocks();
    jest.mock('react-redux', () => ({
      ...jest.requireActual('react-redux'),
      useDispatch: () => mockDispatch,
    }));
  });

  it('изменение состояния чекбокса', () => {
    render(<Checkbox {...manuf} />);

    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(setChecked([{ manuf: manuf.manuf, check: true }]));
  });
});
