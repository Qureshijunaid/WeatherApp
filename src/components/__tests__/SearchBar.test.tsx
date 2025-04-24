import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';

describe('SearchBarComponent', () => {
  it('should render with correct placeholder', () => {
    const { getByPlaceholderText } = render(
      <SearchBarComponent value="" onChange={() => {}} onSearch={() => {}} />,
    );

    expect(getByPlaceholderText('Enter the city name here...')).toBeTruthy();
  });

  it('should disable the search button when input length is less than 2', () => {
    const { getByRole } = render(
      <SearchBarComponent value="A" onChange={() => {}} onSearch={() => {}} />,
    );

    expect(getByRole('button')).toBeDisabled();
  });

  it('should enable the search button when input length is 2 or more', () => {
    const { getByRole } = render(
      <SearchBarComponent value="NY" onChange={() => {}} onSearch={() => {}} />,
    );

    expect(getByRole('button')).not.toBeDisabled();
  });

  it('should call onSearch when the search button is pressed', () => {
    const mockOnSearch = jest.fn();

    const { getByRole } = render(
      <SearchBarComponent value="London" onChange={() => {}} onSearch={mockOnSearch} />,
    );

    fireEvent.press(getByRole('button'));
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });
});
