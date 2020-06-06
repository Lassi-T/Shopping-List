import { AsyncStorage } from 'react-native'

const STOREGE_KEY = '@key'

const SaveData = async (items) => {
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
    if (dataJSON !== null) {
      console.log('Data retrived succesfully')
      return dataJSON
    }
  } catch (error) {
    console.log('Error retriving data')
  }
}

export default {
  SaveData,
  RetriveData,
}