import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import Config from '../Config'

function postApiClient(token) {
  return axios.create({
    baseURL: `${Config.API_URL}/posts`,
    headers: {
      authorization: token,
    },
    timeout: 3000,
  })
}

function fetchPosts() {
  AsyncStorage.getItem('@jwt')
    .then((value) => {
      return postApiClient(`Bearer ${value}`)
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

const PostService = {
  fetchPosts,
}

export default PostService
