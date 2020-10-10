import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  padding: 42px 36px;
`;

export const TextInformationName = styled.Text`
  color: #3a3a3a;
  font-size: 30px;
  font-family: 'Poppins-Medium';
  margin-top: 60px;
  margin-bottom: 39px;
`;

export const ButtonContinue = styled.TouchableOpacity`
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

export const ButtonContinueText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Circular-Std-Black';
`;
