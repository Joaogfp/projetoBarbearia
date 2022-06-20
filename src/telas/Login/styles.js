import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #111111;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #ff7043;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #FFF;
`;

export const CadastroMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;
export const CadastroMessageButtonText = styled.Text`
  font-size: 16px;
  color: #FFF;
`;
export const CadastroMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  margin-left: 5px;
`;