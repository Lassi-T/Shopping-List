import React, { useState } from 'react'
import { StyleSheet, StatusBar, View, FlatList, Alert, Image } from 'react-native'
import Item from './components/Item'
import Header from './components/Header'
import AddItem from './components/AddItem'
import Splash from './assets/splash.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const App = () => {
  const [id, setId] = useState(0)
  const [items, setItems] = useState([])

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter a item')
    } else {
      setItems((prevItems) => {
        setId(id + 1)
        const newItem = { id: id, text }
        return [...prevItems, newItem]
      })
    }
  }

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#27c408' />
      <Header />
      <FlatList data={items} renderItem={({ item }) => <Item item={item} deleteItem={deleteItem} />} />
      <AddItem addItem={addItem} />
    </View>
  )
}

export default App
