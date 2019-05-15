import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';

class Operations extends React.Component{

    constructor(props){
        super(props);
        this.operations = props.operations;
    }

    operation = (val) => {
        const text = val + '';
        this.props.buttonClicked(text);
    }

    render(){
        let ops = [];
        for(let i = 0; i < this.operations.length; i++)
        {
          ops.push(<TouchableOpacity onPress={()=> this.operation(this.operations[i])} key={i} style={styles.btn}><Text style={[styles.btntext, styles.white]}key={i}>{this.operations[i]}</Text></TouchableOpacity>);
        }

        return (
         <View style={styles.operations}>
            {ops}
          </View>
        );
    }
}


const styles = StyleSheet.create({
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
  operations: {
    flex: 1,
    backgroundColor: 'black',
  }
});


export default Operations;