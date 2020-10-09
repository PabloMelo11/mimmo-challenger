import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 42px 23px;
`;

export const TitleMimo = styled.Text`
  color: #00c3a3;
  font-size: 35px;
  font-family: 'Poppins-Bold';
  margin-bottom: 23px;
`;

export const TextWelcome = styled.Text`
  color: #00c3a3;
  font-size: 35px;
  font-family: 'Poppins-Bold';
`;

export const TextSub = styled.Text`
  color: #00c3a3;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  margin-top: 21px;
`;

export const TextYourself = styled.Text`
  color: #3a3a3a;
  font-size: 20px;
  font-family: 'Poppins-Regular';
  margin-top: 21px;
`;

export const ButtonStart = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00c3a3;
  box-shadow: #067a678c 0px 3px 8px;

  height: 50px;

  justify-content: center;
  align-items: center;
`;

export const ButtonStartText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Circular-Std-Black';
`;
