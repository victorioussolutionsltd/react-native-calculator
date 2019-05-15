import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';

function Operations({buttonClicked, operations}) { 

    operation = (val) => {
        const text = val + '';
        buttonClicked(text);
    }

    let ops = [];
    for(let i = 0; i < operations.length; i++)
    {
      ops.push(<TouchableOpacity onPress={()=> operation(operations[i])} key={i} style={styles.btn}><Text style={[styles.btntext, styles.white]}key={i}>{operations[i]}</Text></TouchableOpacity>);
    }

    return (
      <View style={styles.operations}>
        {ops}
      </View>
    );
   
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: 'space-around'
  },
  btntext: {
    fontSize: 40,
    alignItems: 'center',
    alignSelf: 'center'
  },
  white: {
    color: 'white'
  },
  operations: {
    flex: 1,
    backgroundColor: 'black'
  }
});


export default Operations;