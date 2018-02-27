import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.placePress}>
        <View style={styles.itemList}>
        <Image 
        resizeMode="cover"
        source={props.placeImage}
        style={styles.placeImage} 
        />
            <Text>
                {props.placeName}
            </Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    itemList: {
     width: '100%',
     padding: 10,
     margin: 10,
     backgroundColor: "#eee",
     flexDirection: 'row',
     alignItems: 'center'
    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
  })

export default ListItem