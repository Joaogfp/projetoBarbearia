import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #FFF;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #000000;
  margin-left: 10px;
`;

export default ({placeholder, value, onChangeText, senha}) => (
    <InputArea>
      <Input 
        placeholder={placeholder}
        placeholderTextColor="#454545"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={senha}
      />
    </InputArea>
)