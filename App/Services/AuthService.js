/* eslint-disable no-return-await */
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import Config from '../Config'

function authApiClient(token) {
  return axios.create({
    baseURL: `${Config.API_URL}`,
    headers: {
      authorization: token,
    },
    timeout: 3000,
  })
}

async function getToken() {
  let token = await AsyncStorage.getItem('@jwt')
  return token
}

async function setToken(token) {
  await AsyncStorage.setItem('@jwt', token)
}

async function login(username, password) {
  let token = await getToken()
  return await authApiClient(`Bearer ${token}`)
    .post('/auth/login', {
      username,
      password,
    })
    .then(async (response) => {
      if (response.status === 200) {
        await setToken(response.data.jwt)
        return true
      }
      return false
    })
}

async function isLoggedIn() {
  let savedToken = await getToken()
  if (savedToken !== null) {
    return await authApiClient(`Bearer ${savedToken}`)
      .get('/users/me')
      .then((response) => {
        if (response.status === 200) {
          return true
        } else {
          return false
        }
      })
      .catch((error) => {
        console.log(error)
        return false
      })
  }
}

const UserService = {
  login,
  isLoggedIn
}

export default UserService
