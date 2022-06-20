import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/Context/UserContext';

export default () => (
  <UserContextProvider>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </UserContextProvider>
)