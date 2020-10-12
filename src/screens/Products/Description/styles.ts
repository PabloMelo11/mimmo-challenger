import styled from 'styled-components/native';

interface IContenProps {
  backgroundColor: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View<IContenProps>`
  flex: 1;
  padding: 42px 36px 0px 36px;
  background: ${props => props.backgroundColor};
`;

export const ContentNewProduct = styled.View`
  flex: 1;

  align-items: center;
  justify-content: flex-end;
`;

export const ProductName = styled.Text`
  font-size: 28px;
  color: #fff;
  font-family: 'Poppins-Bold';
  text-align: center;
  margin-top: 28px;
`;

export const PointsText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: 'Poppins-Medium';
  margin: 24px 0px;
  text-align: center;
`;

export const ContentProductText = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ProductText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-family: 'Poppins-Medium';
  text-align: center;
  margin-top: 40px;
`;

export const ProductImage = styled.Image`
  width: 350px;
  height: 350px;
`;
