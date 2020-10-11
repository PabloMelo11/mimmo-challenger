import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

import { IBrands, IProducts, IProductsProps } from './index';

interface ISkinCareProps {
  active: boolean;
}

interface ISnacksProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 30px 36px;
`;

export const TextName = styled.Text`
  font-size: 34px;
  color: #3a3a3a;
  font-family: 'Poppins-Medium';
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #3a3a3a;
  font-family: 'Poppins-Regular';
  margin-top: 10px;
`;

export const ContentPoints = styled.View`
  margin-top: 19.4px;
  flex-direction: row;
  align-items: center;
`;

export const TextPoints = styled.Text`
  font-size: 18px;
  color: #482f05;
  font-family: 'Poppins-Medium';
  margin-left: 5.3px;
`;

export const TextTotalPoints = styled.Text`
  font-size: 25px;
  color: #482f05;
  font-family: 'Poppins-Bold';
  margin-left: 19px;
`;

export const Navigation = styled.View`
  flex-direction: row;
  margin-top: 11px;
`;

export const ContentLoading = styled.View`
  flex: 1;
`;

export const NavigationSkinCare = styled.TouchableOpacity`
  margin-right: 18px;
`;

export const TextSkinCare = styled.Text<ISkinCareProps>`
  color: #999;
  font-size: 18px;
  font-family: 'Poppins-Medium';

  ${props =>
    props.active &&
    css`
      color: #00c3a3;
      font-family: 'Poppins-Bold';

      border-bottom-color: #00c3a3;
      border-bottom-width: 3px;
    `}
`;

export const NavigationSnacks = styled.TouchableOpacity``;

export const TextSnacks = styled.Text<ISnacksProps>`
  color: #999;
  font-size: 18px;
  font-family: 'Poppins-Medium';

  ${props =>
    props.active &&
    css`
      color: #00c3a3;
      font-family: 'Poppins-Bold';

      border-bottom-color: #00c3a3;
      border-bottom-width: 3px;
    `}
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  width: 67.3px;
  height: 67.3px;
  border-radius: 33.65px;
  background: #00c3a3;

  position: absolute;
  bottom: 74.66px;
  right: 40.7px;

  align-items: center;
  justify-content: center;
`;
