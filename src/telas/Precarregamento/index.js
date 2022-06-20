import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../Context/UserContext';
import MainTab from '../../stacks/TelaInicial';

import Api from '../../Api';

import LogoBarbearia from '../../images/logobarb.svg';

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const verifToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let response = await Api.checkToken(token);
        if (response.token) {

          await AsyncStorage.setItem('token', response.token);
  
           navigation.reset({
             routes: [{ name: 'TelaInicial'}]
           });
        } else {
          navigation.reset({
            routes: [{name: 'Login'}]
          });
        }
      } else {
        navigation.reset({
          routes: [{name: 'Login'}]
        });
      }
    }
    verifToken();
  }, []);

  return (
    <Container>
      <LogoBarbearia width="100%" height="160" />
      <LoadingIcon size="large" color="white" />
    </Container>
  )

}

