
import React, { useState, useEffect } from 'react';

import { SafeAreaView, Text, View, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'Agendamentoservico.db' });

export default function App() {

  const [Nome_Servico, setNome] = useState('');
  const [Valor_Servico, setValor] = useState();
  const [Dia_Servico, setData] = useState();
  const [Mes_Servico, setMes] = useState();

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Agendamento_Table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Agendamento_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Agendamento_Table(agendamento_id INTEGER PRIMARY KEY AUTOINCREMENT, nome_servico VARCHAR(30), valor_servico INT(15), dia_servico INT(15), mes_servico INT(15))',
              []
            );
          }
        }
      );
    })

  }, []);

  const insertData = () => {

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO Agendamento_Table (nome_servico, valor_servico, dia_servico, mes_servico) VALUES (?,?,?,?)',
        [Nome_Servico, Valor_Servico, Dia_Servico, Mes_Servico],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Agendamento realizado com sucesso....');
          } else Alert.alert('Falha em realizar o agendamento....');
        }
      );
    });

    mostrarServico();

  }

  const mostrarServico = () => {

    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Agendamento_Table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          console.log(temp);
        }
      );
    });

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>

        <Text style={{ fontSize: 24, textAlign: 'center', color: '#FFF' }}>
          Agendamento
        </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (text) => setNome(text)
          }
          placeholder="Informe o serviço"
          value={Nome_Servico} />

        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (text) => setValor(text)
          }
          placeholder="Informe o valor do serviço"
          keyboardType={'numeric'}
          value={Valor_Servico} />

        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (text) => setData(text)
          }
          placeholder="Informe o dia"
          keyboardType={'numeric'}
          value={Dia_Servico} />

        <TextInput
          style={[styles.textInputStyle, { marginBottom: 20 }]}
          onChangeText={
            (text) => setMes(text)
          }
          placeholder="Informe o mês"
          keyboardType={'numeric'}
          value={Mes_Servico} />

        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={insertData}>

          <Text style={styles.touchableOpacityText}> Finalizar Agendamento </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#111111'
  },

  touchableOpacity: {
    backgroundColor: '#d34115',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  touchableOpacityText: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
    padding: 8
  },

  textInputStyle: {
    height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#d34115',
    borderRadius: 7,
    marginTop: 15,
    color: '#000',
    backgroundColor: '#ffffff'
  },
});