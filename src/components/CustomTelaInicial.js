import React from 'react';
import styled from 'styled-components/native';

import IconeHome from '../images/home.svg';
import IconeAgendamentos from '../images/today.svg';
import IconePerfil from '../images/account.svg';

const EspacoTab = styled.View`
  height: 60px;
  background-color: #ff7043;
  flex-direction: row;
`;

const TabIcon = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({state, navigation}) => {

  const redireciona = (nomeTela) => {
    navigation.reset({
      routes: [{ name: nomeTela }]
    });
  }

  return (
    <EspacoTab>
      <TabIcon onPress={()=> redireciona('Home')}>
        <IconeHome style={{opacity: state.index===0 ? 1 : 0.7}} width="24" height="24" fill="#FFFFFF" />
      </TabIcon>
      <TabIcon onPress={()=> redireciona('Agendamento')}>
        <IconeAgendamentos style={{opacity: state.index===1 ? 1 : 0.7}} width="24" height="24" fill="#FFFFFF" />
      </TabIcon>
      <TabIcon onPress={()=> redireciona('Perfil')}>
        <IconePerfil style={{opacity: state.index===2 ? 1 : 0.7}} width="24" height="24" fill="#FFFFFF" />
      </TabIcon>
    </EspacoTab>
  );
}