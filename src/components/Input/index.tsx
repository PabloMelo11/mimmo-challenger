import React, { useRef, useCallback, useState, useEffect } from 'react';
import { TextInputProps } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: object;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, containerStyle, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const inputValueRef = useRef<InputValueReference>({ value: '' });

  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, []);

  useEffect(() => {
    async function handleSaveNameInAsynStorage() {
      await AsyncStorage.setItem('@mimo:name', value);
    }

    handleSaveNameInAsynStorage();
  }, [value]);

  return (
    <Container style={containerStyle} isFocused={isFocused} isFilled={isFilled}>
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        defaultValue={value}
        placeholderTextColor="#999"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={value => {
          setValue(value);
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
