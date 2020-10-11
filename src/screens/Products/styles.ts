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

export const ListSkinCare = styled(
  FlatList as new () => FlatList<IProductsProps>,
)`
  margin-top: 57px;
`;

export const ContentList = styled.View`
  margin-bottom: 27.2px;
`;

export const ContentCategory = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const TextCategory = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 12px;
  color: #949494;
  margin-left: 6px;
`;

export const ListBrands = styled(FlatList as new () => FlatList<IBrands>)``;

export const ListProducts = styled(FlatList as new () => FlatList<IProducts>)``;

export const ContainerProductSkinCare = styled.View`
  background: #ceb5ab;
  height: 167px;
  width: 160px;
  box-shadow: #00000029 0px 0px 4px;
  border-radius: 8px;
  margin-right: 16px;

  align-items: flex-end;
  justify-content: flex-end;
`;

export const ContainerProductSnacks = styled.View`
  background: #abc3ce;
  height: 167px;
  width: 160px;
  box-shadow: #00000029 0px 0px 4px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ProductImage = styled.Image`
  width: 140px;
  height: 147px;
  border-radius: 8px;
`;

export const ProductImageSnacks = styled.Image`
  width: 159px;
  height: 167px;
  border-radius: 8px;
`;
