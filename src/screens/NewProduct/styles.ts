import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  background: #dfbf94;
  padding: 46px 50px 16px 50px;
`;

export const ButtonSave = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 8px;

  height: 50px;

  justify-content: center;
  align-items: center;
`;

export const ButtonSaveText = styled.Text`
  color: #00c3a3;
  font-size: 20px;
  font-family: 'Circular-Std-Black';
`;

export const Indetification = styled.View``;

export const IndetificationText = styled.Text`
  font-size: 25px;
  font-family: 'Poppins-Medium';
  color: #fff;
  text-align: center;
`;

export const ContentNewProduct = styled.View`
  align-items: center;
`;

export const ProductName = styled.Text`
  font-size: 34px;
  color: #fff;
  font-family: 'Poppins-Bold';
  text-align: center;
`;

export const ProductImage = styled.Image`
  width: 280px;
  height: 400px;
`;

export const CongratulationsText = styled.Text`
  font-size: 20px;
  color: #3a3a3a;
  font-family: 'Poppins-Bold';
  text-align: center;
`;

export const ContinueText = styled.Text`
  font-size: 18px;
  color: #3a3a3a;
  font-family: 'Poppins-Medium';
  text-align: center;
  margin-top: 15px;
`;
