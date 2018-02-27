import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import ListItem from '../ListItem';

const PalceList = (props) => {
    return (
        <FlatList 
        style={styles.listContainer}
        data={props.places}
        renderItem={(info) => (
            <ListItem 
            placeName={info.item.name}
            placeImage={info.item.image}
            placePress={() => props.selectItem(info.item.key)} 
            />
        )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
      }
  })

export default PalceList