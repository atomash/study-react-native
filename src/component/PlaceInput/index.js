import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class PlaceInput extends React.Component {
    state = {
        placeName: ""
      }
    hand = val => {
        this.setState({placeName: val})
      }
    handSubmit = () => {
        if(this.state.placeName.trim() === ""){
            return;
        }
        this.props.placeAdd(this.state.placeName)

    }
    render() { 
        return (
            <View style={styles.inputContainer}>
            <TextInput
            placeholder="input..."
            style={styles.testInput}
            value={this.state.placeName}
            onChangeText={this.hand}
            
            />
            <Button 
            style={styles.testButton}
            title="add"
            onPress={this.handSubmit} 
            />
            </View>  
        );
    }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  testInput: {
    width: '70%'
  },
  testButton: {
    width: '30%'
  }
})