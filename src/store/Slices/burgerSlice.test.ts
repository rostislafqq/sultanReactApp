import cartSlice, { setBurger, burger } from './burgerSlice';

describe('cartSlice', () => {
  const initialState: burger = {
    burgerActive: true,
  };

  it('burgerActive:true по дефолту', () => {
    expect(cartSlice(undefined, { type: '' })).toEqual(initialState);
  });

  it('меняется ли состояние бургера', () => {
    const newState = cartSlice(initialState, setBurger(false));
    expect(newState.burgerActive).toEqual(false);
  });
});
