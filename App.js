import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/component/PlaceInput';
import PlaceList from './src/component/PlaceList';
import PlaceDetail from './src/component/PlaceDetail';

import { 
  addPlace, 
  deletePlace, 
  selectPlace, 
  unselectPlace 
} from './src/store/actions';

class App extends React.Component {
  pSubmit = placeName => {
    this.props.onAddPlace(placeName)
  }
  sItem = key => {
    this.props.onSelectPlace(key)
  }
  rmPlace = () => {
    this.props.onDeletePlace()
  }
  closeModal = () => {
    this.props.onUnselectPlace()
  }
  render() { 
    console.log(this.props)
    return (
      <View style={styles.container}>
      <PlaceDetail 
      selectedPlace={this.props.selectedPlace} 
      removePlace={this.rmPlace}
      closeModal={this.closeModal}
      />
       <PlaceInput placeAdd={this.pSubmit} />
       <PlaceList 
       places={this.props.places} 
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

const mapStateToProps = state => {
  
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onUnselectPlace: () => dispatch(unselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 