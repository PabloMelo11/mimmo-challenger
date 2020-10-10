import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import InfoName from '../screens/InfoName';
import Scare from '../screens/Scare';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#fff',
      },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Name" component={InfoName} />
    <App.Screen name="Scare" component={Scare} />
  </App.Navigator>
);

export default AppRoutes;
