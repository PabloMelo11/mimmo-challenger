import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Snacks from './Snacks';
import SkinCare from './SkinCare';

import Loading from '../../components/Loading';
import { usePoints } from '../../hooks/points';
import { useProducts } from '../../hooks/products';

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
  ButtonAddProduct,
} from './styles';

const Products: React.FC = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [activeSkin, setActiveSkin] = useState(true);
  const [activeSnacks, setActiveSnacks] = useState(false);

  const { points } = usePoints();
  const {
    handleGetProducts,
    loading,
    productsSkinCare,
    productsSnacks,
  } = useProducts();

  const handleActiveSkinCare = useCallback(() => {
    setActiveSkin(true);
    setActiveSnacks(false);
  }, []);

  const handleActiveSnacks = useCallback(() => {
    setActiveSnacks(true);
    setActiveSkin(false);
  }, []);

  const handleNavigateBarCode = () => navigation.navigate('BarCode');

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
    handleGetProducts();
  }, [handleGetProducts]);

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

        <TextTotalPoints>{points}</TextTotalPoints>

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

        {!loading && activeSkin && <SkinCare products={productsSkinCare} />}

        {!loading && activeSnacks && <Snacks products={productsSnacks} />}

        <ButtonAddProduct onPress={handleNavigateBarCode}>
          <Icon name="plus" color="#fff" size={38} />
        </ButtonAddProduct>
      </Content>
    </Container>
  );
};

export default Products;
