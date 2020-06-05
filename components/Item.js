import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
})

const Item = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Icon name='remove' size={20} color='firebrick' onPress={() => deleteItem(item.id)}/>
      </View>
    </TouchableOpacity>
  )
}

export default Item
