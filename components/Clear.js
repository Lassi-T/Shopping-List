import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Storage from './Storage'

const AddItem = ({ setItems }) => {

  const onPress = () => {
    Storage.ClearData()
    setItems([])
  }
  
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}> <Icon name='times-circle' color='white' size={25}/> Clear all</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fa3434',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default AddItem
