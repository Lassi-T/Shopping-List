import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, View, FlatList, Alert } from 'react-native'
import Item from './components/Item'
import Header from './components/Header'
import AddItem from './components/AddItem'
import Clear from './components/Clear'
import Storage from './components/Storage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const App = () => {
  const [id, setId] = useState(0)
  const [items, setItems] = useState([])

  useEffect(() => {
    Storage.RetriveData().then(data => setItems(data))
  }, [])

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
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#27c408' />
      <Header />
      <FlatList data={items} renderItem={({ item }) => <Item item={item} deleteItem={deleteItem} />} />
      <AddItem items={items} addItem={addItem} />
      <Clear setItems={setItems} />
    </View>
  )
}

export default App
