import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ScanningCode = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 52px;
  margin-left: 66px;
  margin-right: 66px;
  z-index: 1;
`;

export const ScanningCodeText = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

export const ContentBarCode = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding-left: 46px;
  z-index: 1;
  position: absolute;
  bottom: 50px;
  background-color: #fff;
  opacity: 0.6;
  width: 100%;
  height: 100px;
`;

export const ContentTextBarCode = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
`;

export const TextBarCode = styled.Text`
  font-size: 22px;
  color: #fff;
  text-align: center;
`;

export const ButtonBack = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background: #fff;
  box-shadow: #067a678c 0px 3px 8px;
  padding: 0 41px;

  height: 57px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonBackText = styled.Text`
  color: #3a3a3a;
  opacity: 0.47;
  font-size: 23px;
  font-family: 'Circular-Std-Black';
  margin: 0 auto;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  box-shadow: #067a678c 0px 3px 8px;

  height: 50px;

  justify-content: center;
  align-items: center;
`;

export const ButtonConfirmText = styled.Text`
  color: #00c3a3;
  font-size: 20px;
  font-family: 'Circular-Std-Black';
`;
