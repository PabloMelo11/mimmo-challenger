import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import {
  Container,
  Content,
  TextInformationName,
  ButtonContinue,
  ButtonContinueText,
} from './styles';

const InfoName: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateScare = () => navigation.navigate('Scare');

  return (
    <>
      <Container>
        <Content>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={32} color="#00c3a3" />
          </TouchableOpacity>

          <TextInformationName>Informe seu nome</TextInformationName>

          <Input
            autoCorrect={false}
            autoCapitalize="none"
            name="name"
            placeholder="Nome"
            onSubmitEditing={() => {
              handleNavigateScare();
            }}
          />
        </Content>
      </Container>

      <ButtonContinue onPress={handleNavigateScare}>
        <ButtonContinueText>Continuar</ButtonContinueText>
      </ButtonContinue>
    </>
  );
};

export default InfoName;
