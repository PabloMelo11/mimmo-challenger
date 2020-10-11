import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, StatusBar } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Content,
  ButtonSave,
  ButtonSaveText,
  Indetification,
  IndetificationText,
  ContentNewProduct,
  ProductName,
  ProductImage,
  CongratulationsText,
  ContinueText,
} from './styles';

interface IParams {
  bar_code: string;
}

interface IProduct {
  name: string;
  image: string;
  brand: string;
}

const NewProduct: React.FC = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as IParams;

  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const handleNavigateProducts = () => navigation.navigate('Products');

  useEffect(() => {
    async function handleGetNewProduct() {
      const response = await api.get<IProduct>(
        `/products/${routeParams.bar_code}`,
      );

      setProduct(response.data);
    }

    handleGetNewProduct();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#dfbf94" />
      <Container>
        <Content>
          <Indetification>
            <IndetificationText>
              Identificamos {'\n'} que você consome
            </IndetificationText>
          </Indetification>

          <ContentNewProduct>
            <ProductName>{product.name}</ProductName>

            <ProductImage source={{ uri: product.image }} />
          </ContentNewProduct>

          <CongratulationsText>
            Parabéns {'\n'} Você ganhou 100 pontos!
          </CongratulationsText>

          <ContinueText>Continue para ganhar ainda mais pontos</ContinueText>
        </Content>
      </Container>

      <ButtonSave onPress={handleNavigateProducts}>
        <ButtonSaveText>Salvar</ButtonSaveText>
      </ButtonSave>
    </>
  );
};

export default NewProduct;
