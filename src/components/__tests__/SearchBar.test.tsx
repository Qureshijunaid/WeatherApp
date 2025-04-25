import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from '../../context/ThemeContext';
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';

describe('SearchBarComponent', () => {
  const renderComponent = (props: any) =>
    render(
      <ThemeProvider>
        <SearchBarComponent {...props} />
      </ThemeProvider>
    );

  it('should render with correct placeholder', () => {
    const { getByPlaceholderText } = renderComponent({
      value: '',
      onChange: jest.fn(),
      onSearch: jest.fn(),
    });

    expect(getByPlaceholderText('Enter the city name here...')).toBeDefined();
  });

  it('should disable the search button when input length is less than 2', () => {
    const { getByRole } = renderComponent({
      value: 'A',
      onChange: jest.fn(),
      onSearch: jest.fn(),
    });

    expect(getByRole('button')).toBeDisabled();
  });

  it('should enable the search button when input length is 2 or more', () => {
    const { getByRole } = renderComponent({
      value: 'NY',
      onChange: jest.fn(),
      onSearch: jest.fn(),
    });

    expect(getByRole('button')).not.toBeDisabled();
  });

  it('should call onSearch when the search button is pressed', () => {
    const mockOnSearch = jest.fn();
    const { getByRole } = renderComponent({
      value: 'London',
      onChange: jest.fn(),
      onSearch: mockOnSearch,
    });

    fireEvent.press(getByRole('button'));
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });
});
