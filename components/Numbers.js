import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

function Numbers(props) {

    let buttonLabels = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];
 
    buttonPressed = (val) => {
        const text = val + '';
        props.buttonClicked(text);
    }

    let rows = []
    for( let i = 0; i < buttonLabels.length; i++){
    let row = []
    for(let j=0; j < 3; j++){
        row.push(<TouchableOpacity onPress={() => buttonPressed(buttonLabels[i][j])}key={(i+2)*j} style={styles.btn}><Text style={styles.btntext}>{buttonLabels[i][j]}</Text></TouchableOpacity>
        )
    }
    rows.push(<View key={i}style={styles.row}>{row}</View>)
    }

    return (
        <View style={styles.numbers}>
        {rows}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    btn: {
      flex: 1
    },
    btntext: {
      fontSize: 40,
      alignItems: 'center',
      alignSelf: 'center'
    },
    numbers: {
      flex: 3,
      backgroundColor: '#3F88C9',
    }
  });


  export default Numbers;