import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../telas/Home';
import Agendamento from '../telas/Agendamento';
import Perfil from '../telas/Perfil';
import CustomTelaInicial from '../components/CustomTelaInicial';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTelaInicial {...props} />}>
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Agendamento" component={Agendamento}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Perfil" component={Perfil}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

