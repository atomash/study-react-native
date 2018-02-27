import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import PlaceInput from './src/component/PlaceInput';
import PlaceList from './src/component/PlaceList';
import placeImage from './src/assets/test.jpg';
import PlaceDetail from './src/component/PlaceDetail';

export default class App extends React.Component {
  state ={
    places: [],
    selectedPlace: null
  }
  pSubmit = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      }
    })
  }
  sItem = key => {
    this.setState(prevState => {
        return {
          selectedPlace: prevState.places.find(place => {
            return place.key === key
          })
        }
    });
  }
  rmPlace = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    });
  }

  closeModal = () => {
    this.setState({
      selectedPlace: null
    })
  }
  render() { 
    
    return (
      <View style={styles.container}>
      <PlaceDetail 
      selectedPlace={this.state.selectedPlace} 
      removePlace={this.rmPlace}
      closeModal={this.closeModal}
      />
       <PlaceInput placeAdd={this.pSubmit} />
       <PlaceList 
       places={this.state.places} 
       selectItem={this.sItem}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start"
  }
})