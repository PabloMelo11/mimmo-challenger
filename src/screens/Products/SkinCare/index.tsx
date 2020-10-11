import React from 'react';
import { Image } from 'react-native';

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

const SkinCare: React.FC<IProducts> = ({ products }) => {
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
                  <ContainerProductSkinCare>
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
