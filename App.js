"use strict";

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as math from 'mathjs';

import Operations from "./components/Operations";
import Numbers from "./components/Numbers";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      expressionText: "",
      resultText: "",
    }

    this.operations = [ '+', '-', '*', '/', 'D', 'C']
  }

  operationClicked = (operation) =>{
    switch(operation){
      case 'C':
        this.setState({
          expressionText: '',
          resultText: ''
        });
        break;
      case 'D':
        let text = this.state.expressionText.split('');
          text.pop();
          this.setState({
            expressionText: text.join('')
          });
          break;
      case '+':
      case '-':
      case '*':
      case '/':

      const lastChar = this.state.expressionText.split('').pop();
      if(this.operations.indexOf(lastChar) > -1 ) return;

      if(lastChar == '.') return;

        this.setState({
          expressionText: this.state.expressionText + operation
        });
    }

  }

  numberClicked = (text) => {

    const lastChar = this.state.expressionText.split('').pop();

    const numberEnteredBefore = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ].indexOf(lastChar) > -1;

    if(text == '.' && !numberEnteredBefore) return;



    if (text == '='){
      this.calculateResult();
      return;
    }

    this.setState({
      expressionText: this.state.expressionText+text
    });
  }

  calculateResult(){
    const text= this.state.expressionText + '';

    let result;
    try {
     result = math.eval(text);
    }
    catch(error)
    {
      console.log("Expression is invalid");
      return;
    }

    this.setState({resultText: result + ''});
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.expressionText}>{this.state.expressionText}</Text>
        </View>

        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.resultText}</Text>
        
        </View>
          <View style={styles.buttons}>
            <Numbers buttonClicked ={this.numberClicked.bind(this)}/>
            <Operations operations={this.operations} buttonClicked={this.operationClicked.bind(this)}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  expressionText: {
    flex: 5,
    fontSize: 39,
    color: 'black',
    justifyContent: 'center',
    paddingTop: 30
    },
  btn: {
    flex: 1
  },
  calculation: {
    flex: 1,
    backgroundColor: '#3F88C5',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculationText: {
    fontSize: 40,
    color: 'white'    
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  }
});
