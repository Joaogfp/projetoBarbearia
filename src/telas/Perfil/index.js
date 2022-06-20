import React from 'react';
import { Container, TextHome, CustomButton, CustomButton2, CustomButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';

export default () => {

  const navigation = useNavigation();

  const handleSairButton = async () => {
    await Api.sairApp();
    navigation.reset({
      routes: [{ name: 'Login' }]
    });
  }

  return (
    <Container>
      <TextHome>Perfil</TextHome>
      <CustomButton2 style="cursor: pointer;">
        <CustomButtonText>Alterar senha</CustomButtonText>
      </CustomButton2>
      <CustomButton2 style="cursor: pointer;">
        <CustomButtonText>Informações de cadastro</CustomButtonText>
      </CustomButton2>
      <CustomButton style="cursor: pointer;" onPress={handleSairButton}>
        <CustomButtonText>Sair</CustomButtonText>
      </CustomButton>
    </Container>
  );

}


