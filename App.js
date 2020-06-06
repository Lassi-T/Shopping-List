import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, View, FlatList, Alert, AsyncStorage } from 'react-native'
import Item from './components/Item'
import Header from './components/Header'
import AddItem from './components/AddItem'
//import RetriveData from './components/Storage'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const App = () => {
  const [id, setId] = useState(0)
  const [items, setItems] = useState([])

  useEffect(() => {
    RetriveData().then(data => setItems(data))
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
  
  const STOREGE_KEY = '@Storage:key'

  const SaveData = async () => {
    try {
      await AsyncStorage.setItem(STOREGE_KEY, JSON.stringify(items))
      console.log('Data succesfully saved')
    }
    catch (error) {
        console.log('Error saving data')
    }
  }

  const RetriveData = async () => {
    try {
      const dataStirng = await AsyncStorage.getItem(STOREGE_KEY)
      const dataJSON = JSON.parse(dataStirng)
      console.log(dataJSON)
      if (dataJSON !== null) {
        console.log('Data retrived succesfully')
        return dataJSON
      }
      else {
        console.log('No data to retrive')
      }
    } catch (error) {
      console.log('Error retriving data')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#27c408' />
      <Header />
      <FlatList data={items} renderItem={({ item }) => <Item item={item} deleteItem={deleteItem} />} />
      <AddItem addItem={addItem} SaveData={SaveData} />
    </View>
  )
}

export default App
