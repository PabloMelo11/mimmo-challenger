import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks/index';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </View>
  </NavigationContainer>
);

export default App;
