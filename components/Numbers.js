import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

class Numbers extends React.Component{

    constructor(props){
        super(props);
        this.buttonLabels = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
    }

    buttonPressed = (val) => {
        const text = val + '';
        this.props.buttonClicked(text);
    }

    render(){

        let rows = []
        for( let i = 0; i < this.buttonLabels.length; i++){
        let row = []
        for(let j=0; j < 3; j++){
            row.push(<TouchableOpacity onPress={() => this.buttonPressed(this.buttonLabels[i][j])}key={(i+2)*j} style={styles.btn}><Text style={styles.btntext}>{this.buttonLabels[i][j]}</Text></TouchableOpacity>
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