import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { IProductsProps, IProducts, IBrands } from '../index';

export const ListSnacks = styled(
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

export const ContainerProductSnacks = styled.TouchableOpacity`
  background: #abc3ce;
  height: 167px;
  width: 160px;
  box-shadow: #00000029 0px 0px 4px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const ProductImageSnacks = styled.Image`
  width: 159px;
  height: 167px;
  border-radius: 8px;
`;
