import React, { Component } from 'react'
import {
  View, ScrollView, FlatList
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {
  Container, Header, Left, Button, Right, Thumbnail
} from 'native-base'

import AntIcon from 'react-native-vector-icons/AntDesign'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import PostView from '../AddPost/PostView'

import SwitchAccount from './SwitchAccount'
import ProfileInfo from './ProfileInfo'
import StoryHighlight from './StoryHighlight'
import styles from './ProfileStyles'
import GridView from './GridView'

import UserService from '../../Services/UserService'
import PostService from '../../Services/PostService'

export default class ProfileScreen extends Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0,
      posts: [],
      user: {},
      posting: 0,
      follower: 0,
      followed: 0
    }
  }

  async componentDidMount() {
    let user = await UserService.fetchUser()
    this.setState({
      user,
      posting: user.posts.length,
      follower: 130,
      followed: 73
    })

    let userpost = await PostService.fetchPosts()
    this.setState({
      posts: userpost.filter(post => post.user_id === user.id),
    })
  }

  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      let color = focused ? 'black' : 'grey'
      return <AwesomeIcon name='user' size={25} color={color} />
    }
  }

  tabHeader = [
    { component: MaterialIcons, name: 'grid-on' },
    { component: MaterialIcons, name: 'view-day' },
    { component: MaterialIcons, name: 'perm-contact-calendar' },
  ]

  tabContent = [
    (
      <GridView />
    ),
    (
      <FlatList
        data={[]}
        renderItem={this._renderPost}
        keyExtractor={item => item.id.toString()}
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false} />
    ),
    (
      <GridView />
    ),
  ]

  _handleTabChange(tabIndex) {
    this.setState({ tabIndex })
  }

  _getIconColor(tabIndex) {
    return this.state.tabIndex === tabIndex ? '#3897f0' : 'grey'
  }

  _renderContent() {
    return (
      this.tabContent[this.state.tabIndex]
    )
  }

  _renderPost({ item }) {
    return (
      <PostView {...item} />
    )
  }


  async _handleLogout() {
    await AsyncStorage.removeItem('@jwt').then(() => {
      this.props.navigation.navigate('Guest')
    })
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <SwitchAccount title={this.state.user.username} onLogout={() => this._handleLogout()} />
          </Left>
          <Right>
            <Button transparent dark large>
              <AntIcon name='clockcircleo' size={25}></AntIcon>
            </Button>
            <Button transparent dark large>
              <AntIcon name='menufold' size={25}></AntIcon>
            </Button>
          </Right>
        </Header>
        <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
          <View>
            <ProfileInfo
              username={this.state.user.username}
              profile_pic_url={this.state.user.profile_pic_url}
              userInfo={{
                posting: this.state.posting,
                follower: this.state.follower,
                followed: this.state.followed
              }}
              onChangeProfile={() => alert('Edit Profile clicked!')} />

            <StoryHighlight
              data={this.state.posts} />
          </View>
          <View style={styles.tabSection}>
            <View style={styles.tabButton}>
              {
                this.tabHeader.map((icon, index) => (
                  <View key={index} style={{ flex: 1 }}>
                    <Button large transparent full onPress={() => this._handleTabChange(index)}>
                      <icon.component name={icon.name} size={25} color={this._getIconColor(index)} />
                    </Button>
                  </View>
                ))
              }

            </View>
          </View>
          <View style={styles.contentSection}>
            {/* {this._renderContent()} */}
            {this.state.tabIndex === 1 && (
              <FlatList
                data={this.state.posts}
                renderItem={this._renderPost}
                keyExtractor={item => item.id.toString()}
                scrollEventThrottle={5}
                showsVerticalScrollIndicator={false} />
            )}
          </View>

        </ScrollView>
      </Container>
    )
  }
}
