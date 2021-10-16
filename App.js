/*
* @bainloko
* DDM I
* 05/10/2021
*/

import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native';

export default class App extends React.Component {
  state = {
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0
  }

  atualizaValor1 = (number) => {
    this.setState({valor1:number})
  }

  atualizaValor2 = (number) => {
    this.setState({valor2:number})
  }
  
  somar(){
    this.state.resultado = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  subtrair(){
    this.state.resultado = parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  multiplicar(){
    this.state.resultado = parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  dividir(){
    this.state.resultado = parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  render(){
    return(
      <View style={meuEstilo.container}>
        <StatusBar />
        <Text>Operações Matemáticas...</Text>
        <TextInput style={meuEstilo.inputExemplo} underlineColorAndroid="transparent" placeholder="Digite o primeiro valor" autoCapitalize="none" onChangeText={this.atualizaValor1} keyboardType="numeric" />
        <TextInput style={meuEstilo.inputExemplo} underlineColorAndroid="transparent" placeholder="Digite o segundo valor" autoCapitalize="none" onChangeText={this.atualizaValor2} keyboardType="numeric" /> 
        <TouchableOpacity onPress={()=>this.somar(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Somar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.subtrair(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Subtrair</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.multiplicar(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.dividir(this.state.valor1, this.state.valor2, this.state.resultado)}>
          <Text style={meuEstilo.fonteExemplo}>Dividir</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

/** 
* como fazer as operações (funções) fora da classe?
* como chamar os valores como argumentos, uma vez que estão tipados na classe?
* como verificar erros na entrada de dados? (letras, caracteres especiais no lugar dos números...) - como inserir try catch ...
* como colocar os botões um ao lado do outro? inline-block ou ...
* como fazer uma interface de app de verdade? ideias behance ou aguardar próximas aulas
*/

const meuEstilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputExemplo: {
    border: '1px solid black',
    marginTop: 2
  },

  fonteExemplo: {
    color: 'blue',
    fontSize: 15
  }
});