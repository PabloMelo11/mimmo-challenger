import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import InfoName from '../screens/InfoName';
import Products from '../screens/Products';
import BarCode from '../screens/BarCode';
import NewProduct from '../screens/NewProduct';
import Description from '../screens/Products/Description';

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
    <App.Screen name="Products" component={Products} />
    <App.Screen name="BarCode" component={BarCode} />
    <App.Screen name="NewProduct" component={NewProduct} />
    <App.Screen name="Description" component={Description} />
  </App.Navigator>
);

export default AppRoutes;
