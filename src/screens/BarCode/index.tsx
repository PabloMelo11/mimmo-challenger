import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import { View, Text, TouchableOpacity } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';

import {
  Container,
  ScanningCode,
  ScanningCodeText,
  ContentBarCode,
  ContentTextBarCode,
  TextBarCode,
  ButtonBack,
  ButtonBackText,
  ButtonConfirm,
  ButtonConfirmText,
} from './styles';

const BarCode: React.FC = () => {
  const navigation = useNavigation();

  const [barCode, setBarCode] = useState<string[]>(['000000000000000']);

  const handleNavigateProducts = () => navigation.goBack();

  const handleNavigateNewProduct = () =>
    navigation.navigate('NewProduct', { bar_code: barCode });

  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Carregando</Text>
    </View>
  );

  return (
    <>
      <ButtonBack>
        <TouchableOpacity onPress={handleNavigateProducts}>
          <Icon name="arrow-left" size={32} color="#00c3a3" />
        </TouchableOpacity>
        <ButtonBackText>Escanear Produto</ButtonBackText>
      </ButtonBack>

      <Container>
        <RNCamera
          style={{
            flex: 1,
            marginTop: 57,
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar câmera',
            message: 'Precisamos de sua permissão para usar sua câmera',
            buttonPositive: 'Aceitar',
            buttonNegative: 'Cancelar',
          }}
          googleVisionBarcodeType={
            RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.EAN_13
          }
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            setBarCode(barcodes.map(barcode => barcode.data));
          }}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <>
                <ScanningCode>
                  <ScanningCodeText>
                    Escaneando o código de barras
                  </ScanningCodeText>
                </ScanningCode>

                <BarcodeMask
                  width={320}
                  height={280}
                  showAnimatedLine={false}
                  backgroundColor={'#3A3A3A'}
                />

                <ContentBarCode>
                  <ContentTextBarCode>
                    Número do código de barras:
                  </ContentTextBarCode>

                  <TextBarCode>{barCode}</TextBarCode>
                </ContentBarCode>
              </>
            );
          }}
        </RNCamera>
      </Container>

      <ButtonConfirm onPress={handleNavigateNewProduct}>
        <ButtonConfirmText>Confirmar</ButtonConfirmText>
      </ButtonConfirm>
    </>
  );
};

export default BarCode;
