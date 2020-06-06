import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SaveData from './Storage'

const AddItem = ({ addItem, SaveData }) => {
  const [text, setText] = useState('')

  const onPress = () => {
    addItem(text)
    setText('')
    SaveData()
  }

  return (
    <View>
      <TextInput placeholder='Add item' value={text} style={styles.input} onChangeText={setText}/>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}> <Icon name='plus' size={20}/> Add item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#89f075',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'green',
    fontSize: 20,
    textAlign: 'center',
  },
})

export default AddItem
