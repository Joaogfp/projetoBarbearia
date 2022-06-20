import React, { useState } from 'react';
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

export default () => {
  // const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [campoNome, setCampoNome] = useState();
  const [campoEmail, setCampoEmail] = useState('');
  const [campoSenha, setCampoSenha] = useState('');

  const handleCadastrarButton = async () => {
    if (campoNome != '' && campoEmail != '' && campoSenha != '') {
      let response = await Api.cadastrar(campoNome, campoEmail, campoSenha)

      if (response.token) {
        await AsyncStorage.setItem("token", response.token);
        console.log(response)
        ToastAndroid.showWithGravityAndOffset(
          "Cadastro realizado com sucesso!",
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          0,
          0
        );
      } else {
        console.log(response)
        ToastAndroid.showWithGravityAndOffset(
          "Erro:" + response.error,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          0,
          0
        );
      }

    } else {
      ToastAndroid.showWithGravityAndOffset(
        "Preencha todos os campos para realizar o cadastro!",
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        0
      );
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'Login' }]
    });
  }

  return (
    <Container>
      <LogoBarbearia width="100%" height="160" />

      <InputArea>
        <LoginInput
          placeholder="Informe seu nome"
          value={campoNome}
          onChangeText={t => setCampoNome(t)}
        />

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


        <CustomButton onPress={handleCadastrarButton}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>

      </InputArea>

      <CadastroMessageButton onPress={handleMessageButtonClick}>
        <CadastroMessageButtonText>Já está cadastrado?</CadastroMessageButtonText>
        <CadastroMessageButtonTextBold>Realize o login</CadastroMessageButtonTextBold>
      </CadastroMessageButton>

    </Container>
  )
}
