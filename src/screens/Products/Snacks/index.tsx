import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import mapImage from '../../../assets/map.png';

import {
  ListSnacks,
  ListBrands,
  ContentList,
  ContentCategory,
  TextCategory,
  ListProducts,
  ContainerProductSnacks,
  ProductImageSnacks,
} from './styles';

import { IProductsProps } from '../index';

interface IProducts {
  products: IProductsProps[];
}

interface IProduct {
  name: string;
  image: string;
}

const Snacks: React.FC<IProducts> = ({ products }) => {
  const navigation = useNavigation();

  const handleNavigateDescription = useCallback((product: IProduct) => {
    const productRoute = {
      ...product,
      colorStatusBar: '#abc3ce',
    };

    navigation.navigate('Description', { product: productRoute });
  }, []);

  return (
    <ListSnacks
      data={products}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: product }) => (
        <ListBrands
          data={product.brands}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: brand }) => (
            <ContentList>
              <ContentCategory>
                <Image source={mapImage} />
                <TextCategory>{brand.name}</TextCategory>
              </ContentCategory>
              <ListProducts
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                data={brand.products}
                renderItem={({ item: product }) => (
                  <ContainerProductSnacks
                    onPress={() => handleNavigateDescription(product)}
                  >
                    <ProductImageSnacks source={{ uri: product.image }} />
                  </ContainerProductSnacks>
                )}
              />
            </ContentList>
          )}
        />
      )}
    />
  );
};

export default Snacks;
