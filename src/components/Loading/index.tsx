import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color="#00c3a3" />
    </Container>
  );
};
export default memo(Loading);
