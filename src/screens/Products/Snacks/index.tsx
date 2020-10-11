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
  ContainerProductSnacks,
  ProductImageSnacks,
} from './styles';

import { IProductsProps } from '../index';

interface IProducts {
  products: IProductsProps[];
}

const Snacks: React.FC<IProducts> = ({ products }) => {
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
                  <ContainerProductSnacks>
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
