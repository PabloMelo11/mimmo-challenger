import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Scare: React.FC = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    async function handleGetNameAsynStorage() {
      const name = await AsyncStorage.getItem('@mimo:name');

      if (name) {
        setName(name);
      }
    }

    handleGetNameAsynStorage();
  }, []);

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Scare;
