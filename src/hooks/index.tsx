import React from 'react';

import { ProductsProvider } from './products';
import { PointsProvider } from './points';

const AppProvider: React.FC = ({ children }) => (
  <ProductsProvider>
    <PointsProvider>{children}</PointsProvider>
  </ProductsProvider>
);

export default AppProvider;
