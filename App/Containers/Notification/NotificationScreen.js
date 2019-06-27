import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import AntIcon from 'react-native-vector-icons/AntDesign'

class NotificationScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
        let color = focused ? 'black' : 'grey'
        return <AntIcon name='heart' size={25} color={color} />
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Text>NotificationScreen</Text>
        </Content>
      </Container>
    )
  }
}

export default NotificationScreen
