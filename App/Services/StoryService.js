import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import Config from '../Config'

function storiesApiClient(token) {
  return axios.create({
    baseURL: `${Config.API_URL}/stories`,
    headers: {
      authorization: token,
    },
    timeout: 3000,
  })
}

function fetchStories() {
  AsyncStorage.getItem('@jwt')
    .then((value) => {
      return storiesApiClient(`Bearer ${value}`)
        .get()
        .then((response) => {
          if (response.status === 200) {
            return response.data
          }
          return null
        })
    })
    .catch(() => {
      return null
    })
}

export default {
  fetchStories,
}
