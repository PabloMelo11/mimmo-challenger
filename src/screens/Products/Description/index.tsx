import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Content,
  ContentNewProduct,
  ProductName,
  PointsText,
  ContentProductText,
  ProductText,
  ProductImage,
} from './styles';

interface IProduct {
  name: string;
  image: string;
  colorStatusBar: string;
}

interface IParams {
  product: IProduct;
}

const Description: React.FC = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as IParams;

  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const handleNavigateGoBack = () => navigation.goBack();

  useEffect(() => {
    setProduct(routeParams.product);
  }, [routeParams.product]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={product.colorStatusBar}
      />
      <Container>
        <Content backgroundColor={product.colorStatusBar || '#3A3A3A'}>
          <TouchableOpacity onPress={handleNavigateGoBack}>
            <Icon name="arrow-left" size={32} color="#fff" />
          </TouchableOpacity>
          <ProductName>{product.name}</ProductName>

          <ContentProductText>
            <PointsText>100 pontos adquiridos com esse produto</PointsText>

            <ProductText>Produto mais consumido na mimmo</ProductText>
          </ContentProductText>

          <ContentNewProduct>
            <ProductImage source={{ uri: product.image }} />
          </ContentNewProduct>
        </Content>
      </Container>
    </>
  );
};

export default Description;
