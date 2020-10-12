import React from 'react';
import { render } from '@testing-library/react-native';

import InfoName from '../../screens/InfoName';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('InfoName page', () => {
  it('should contains name input', () => {
    const { getByPlaceholderText } = render(<InfoName />);

    expect(getByPlaceholderText('Nome')).toBeTruthy();
  });
});
