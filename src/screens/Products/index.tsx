import React, { useState, useEffect, useCallback, memo } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

import mapImage from '../../assets/map.png';
import Loading from '../../components/Loading';

import Snacks from './Snacks';

import api from '../../services/api';

import {
  Container,
  Content,
  TextName,
  Description,
  ContentPoints,
  TextPoints,
  TextTotalPoints,
  Navigation,
  ContentLoading,
  NavigationSkinCare,
  TextSkinCare,
  NavigationSnacks,
  TextSnacks,
  ListSkinCare,
  ListBrands,
  ContentList,
  ContentCategory,
  TextCategory,
  ListProducts,
  ContainerProductSkinCare,
  ContainerProductSnacks,
  ProductImage,
  ProductImageSnacks,
} from './styles';

export interface IProducts {
  name: string;
  image: string;
}

export interface IBrands {
  name: string;
  products: IProducts[];
}

export interface IProductsProps {
  category: string;
  brands: IBrands[];
}

const Products: React.FC = () => {
  const [name, setName] = useState('');
  const [activeSkin, setActiveSkin] = useState(true);
  const [activeSnacks, setActiveSnacks] = useState(false);
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState<IProductsProps[]>([]);
  const [productsSnacks, setProductsSnacks] = useState<IProductsProps[]>([]);

  const handleActiveSkinCare = useCallback(() => {
    setActiveSkin(true);
    setActiveSnacks(false);
  }, []);

  const handleActiveSnacks = useCallback(() => {
    setActiveSnacks(true);
    setActiveSkin(false);
  }, []);

  useEffect(() => {
    async function handleGetNameAsynStorage() {
      const name = await AsyncStorage.getItem('@mimo:name');

      if (name) {
        setName(name);
      } else {
        setName('Carol');
      }
    }

    handleGetNameAsynStorage();
  }, []);

  useEffect(() => {
    async function handleGetProducts() {
      try {
        setLoading(true);

        const response = await api.get<IProductsProps[]>('/products');

        const productsSkinCare = response.data.filter(
          product => product.category === 'Skin Care',
        );

        const productsSnacks = response.data.filter(
          product => product.category === 'Snacks',
        );

        setProducts(productsSkinCare);
        setProductsSnacks(productsSnacks);

        setLoading(false);
      } catch {
        setLoading(false);
      }
    }

    handleGetProducts();
  }, []);

  return (
    <Container>
      <Content>
        <TextName>{`Olá ${name}!`}</TextName>
        <Description>
          Adicione mais produtos à sua lista e ganhe pontos!
        </Description>

        <ContentPoints>
          <Icon name="star" color="#482F05" size={14} />
          <TextPoints>Pontos</TextPoints>
        </ContentPoints>

        <TextTotalPoints>100</TextTotalPoints>

        <Navigation>
          <NavigationSkinCare onPress={handleActiveSkinCare}>
            <TextSkinCare active={activeSkin}>Skin Care</TextSkinCare>
          </NavigationSkinCare>

          <NavigationSnacks onPress={handleActiveSnacks}>
            <TextSnacks active={activeSnacks}>Snacks</TextSnacks>
          </NavigationSnacks>
        </Navigation>

        {loading && (
          <ContentLoading>
            <Loading />
          </ContentLoading>
        )}

        {!loading && activeSkin && (
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
        )}

        {!loading && activeSnacks && <Snacks products={productsSnacks} />}
      </Content>
    </Container>
  );
};

export default memo(Products);
