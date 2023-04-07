import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Text from './text';


jest.mock('react-redux');

test('renders learn react link', () => {
  const useSelectorMock = useSelector as jest.Mock<ReturnType<typeof useSelector>>;
  useSelectorMock.mockReturnValue([]);
  render(<Text />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeInTheDocument();
});
