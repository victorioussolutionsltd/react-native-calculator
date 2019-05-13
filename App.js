"use strict";

import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import { red } from 'ansi-colors';

import * as math from 'mathjs';

import Operations from "./components/Operations";

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      expressionText: "",
      resultText: ""
    }

    this.operations = [ 'D', '+', '-', '*', '/']

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

  buttonPressed(text){

    if (text == '='){
      this.calculateResult();
      return;
    }

    this.setState({
      expressionText: this.state.expressionText+text
    });
  }

  operate(operation){
    switch(operation){
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
        if(this.operations.indexOf(lastChar) > 0 ) return;
        
        this.setState({
          expressionText: this.state.expressionText + operation
        });
    }
  }

  render() {
    const buttonLabels = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    let rows = []
    for( let i = 0; i < 4; i++){
      let row = []
      for(let j=0; j < 3; j++){
        row.push(<TouchableOpacity onPress={() => this.buttonPressed(buttonLabels[i][j])}key={(i+2)*j} style={styles.btn}><Text style={styles.btntext}>{buttonLabels[i][j]}</Text></TouchableOpacity>
          )
      }

      rows.push(<View key={i}style={styles.row}>{row}</View>)
    }


    let ops = []
    for(let i = 0; i < 5 ; i++)
    {
      ops.push(<TouchableOpacity onPress={()=> this.operate(this.operations[i])} key={i} style={styles.btn}><Text style={[styles.btntext, styles.white]}key={i}>{this.operations[i]}</Text></TouchableOpacity>);
    }


    return (
      <View style={styles.container}>

        <View style={styles.result}>
          <Text style={styles.expressionText}>{this.state.expressionText}</Text>
        </View>

        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.resultText}</Text>
        
        </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
            {rows}
            </View>
            <View style={styles.operations}>
              {ops}
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  expressionText: {
    flex: 5,
    fontSize: 39,
    color: 'white',
    justifyContent: 'center',
    paddingTop: 30
    },
  btn: {
    flex: 1
  },
  btntext: {
    fontSize: 40,
    alignItems: 'center',
    alignSelf: 'center'

  },
  white: {
    color: 'white'
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
  },
  numbers: {
    flex: 3,
    backgroundColor: '#3F88C9',
  },
  operations: {
    flex: 1,
    backgroundColor: 'black',
  }
});
