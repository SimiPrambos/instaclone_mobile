import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'

class SearchScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      let color = focused ? 'black' : 'grey'
      return <Ionicons name='md-search' size={25} color={color} />
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>SearchScreen</Text>
        </Content>
      </Container>
    )
  }
}

export default SearchScreen
