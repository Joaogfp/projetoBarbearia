import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Precarregamento from '../telas/Precarregamento';
import Login from '../telas/Login';
import Cadastrar from '../telas/Cadastrar';
import TelaInicial from './TelaInicial';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Precarregamento" component={Precarregamento}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Login" component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="Cadastrar" component={Cadastrar}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="TelaInicial" component={TelaInicial}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
)

