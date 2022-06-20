import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../Context/UserContext';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  CadastroMessageButton,
  CadastroMessageButtonText,
  CadastroMessageButtonTextBold
} from './styles';
import LoginInput from '../../components/LoginInput';
import LogoBarbearia from '../../images/logobarb.svg';
import Api from '../../Api';
import { ToastAndroid } from "react-native";
import TelaInicial from '../../stacks/TelaInicial';

export default () => {
  // const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [campoEmail, setCampoEmail] = useState('');
  const [campoSenha, setCampoSenha] = useState('');

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'Cadastrar' }]
    });
  }

  const handleLoginButton = async () => {
    if (campoEmail != '' && campoSenha != '') {
      let response = await Api.login(campoEmail, campoSenha);


      if (response.token) {
        await AsyncStorage.setItem('token', response.token)

         navigation.reset({
           routes: [{ name: 'TelaInicial' }]
         });

      } else {
        ToastAndroid.showWithGravityAndOffset(
          "E-mail ou senha incorretos!",
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          0,
          0
        );
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "Preencha todos os campos para realizar o login!",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        0
      );
    }
  }

  return (
    <Container>
      <LogoBarbearia width="100%" height="160" />

      <InputArea>
        <LoginInput
          placeholder="Informe seu e-mail"
          value={campoEmail}
          onChangeText={t => setCampoEmail(t)}
        />

        <LoginInput
          placeholder="Informe sua senha"
          value={campoSenha}
          onChangeText={t => setCampoSenha(t)}
          senha={true}
        />


        <CustomButton onPress={handleLoginButton}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>

      </InputArea>

      <CadastroMessageButton onPress={handleMessageButtonClick}>
        <CadastroMessageButtonText>Ainda não está cadastrado?</CadastroMessageButtonText>
        <CadastroMessageButtonTextBold>Cadastre-se</CadastroMessageButtonTextBold>
      </CadastroMessageButton>

    </Container>
  )
}
