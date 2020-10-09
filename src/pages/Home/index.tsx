import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Content,
  TitleMimo,
  TextWelcome,
  TextSub,
  TextYourself,
  ButtonStart,
  ButtonStartText,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <TitleMimo>mimo</TitleMimo>

          <TextWelcome>Bem vindo à Mimoo!</TextWelcome>

          <TextSub>Alegre. Divertido. Relevante. Você vai adorar!</TextSub>

          <TextYourself>
            Nos conte um pouco sobre você e ganhe pontos!
          </TextYourself>
        </Content>
      </Container>

      <ButtonStart>
        <ButtonStartText>Começar</ButtonStartText>
      </ButtonStart>
    </>
  );
};

export default Home;
