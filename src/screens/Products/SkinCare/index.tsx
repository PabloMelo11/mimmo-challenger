import React, { useCallback } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import mapImage from '../../../assets/map.png';

import {
  ListSkinCare,
  ListBrands,
  ContentList,
  ContentCategory,
  TextCategory,
  ListProducts,
  ContainerProductSkinCare,
  ProductImage,
} from './styles';

import { IProductsProps } from '../index';

interface IProducts {
  products: IProductsProps[];
}

interface IProduct {
  name: string;
  image: string;
}

const SkinCare: React.FC<IProducts> = ({ products }) => {
  const navigation = useNavigation();

  const handleNavigateDescription = useCallback((product: IProduct) => {
    const productRoute = {
      ...product,
      colorStatusBar: '#ceb5ab',
    };

    navigation.navigate('Description', { product: productRoute });
  }, []);

  return (
    <ListSkinCare
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
                  <ContainerProductSkinCare
                    onPress={() => handleNavigateDescription(product)}
                  >
                    <ProductImage source={{ uri: product.image }} />
                  </ContainerProductSkinCare>
                )}
              />
            </ContentList>
          )}
        />
      )}
    />
  );
};

export default SkinCare;
