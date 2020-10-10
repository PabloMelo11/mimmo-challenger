import React from 'react';
import { useNavigation } from '@react-navigation/native';

import logoMimo from '../../assets/logo.png';
import imageGetOut from '../../assets/sair-da-fila.png';

import {
  Container,
  Content,
  ImageLogo,
  TextWelcome,
  TextSub,
  TextYourself,
  ImageGetOut,
  ButtonStart,
  ButtonStartText,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateName = () => navigation.navigate('Name');

  return (
    <>
      <Container>
        <Content>
          <ImageLogo source={logoMimo} />

          <TextWelcome>Bem vindo à Mimoo!</TextWelcome>

          <TextSub>Alegre. Divertido. Relevante. Você vai adorar!</TextSub>

          <TextYourself>
            Nos conte um pouco sobre você e ganhe pontos!
          </TextYourself>
        </Content>
      </Container>

      <ImageGetOut source={imageGetOut} />

      <ButtonStart onPress={handleNavigateName}>
        <ButtonStartText>Começar</ButtonStartText>
      </ButtonStart>
    </>
  );
};

export default Home;
