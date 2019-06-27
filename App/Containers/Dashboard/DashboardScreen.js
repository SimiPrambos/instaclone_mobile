import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import StoryView from '../AddStory/StoryView'
import PostView from '../AddPost/PostView'
import PostService from '../../Services/PostService'
import StoryService from '../../Services/StoryService'

class DashboardScreen extends Component {
  constructor() {
    super()
    this.state = {
      stories: [],
      posts: []
    }
  }

  async componentDidMount() {
    let posts = await PostService.fetchPosts()
    // console.log(posts)
    // let stories = await StoryService.fetchStories()
    this.setState({ posts, stories: posts })
  }

  static navigationOptions = {
    tabBarIcon: ({ focused }) => {
      let color = focused ? 'black' : 'grey'
      return <Ionicons name='md-home' size={25} style={{ color }} />
    }
  }

  _renderStory({ item }) {
    return (
      <StoryView
        title={item.user.username}
        thumbnail={item.user.profile_pic_url}
        onPress={() => alert(JSON.stringify(item))}
      />
    )
  }

  _renderPost({ item }) {
    return (
      <PostView {...item} />
    )
  }

  render() {
    return (

      <Container>
        <Header androidStatusBarColor='lightgrey' style={{ backgroundColor: 'white', height: 50 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Button transparent>
                <SimpleLineIcons name='camera' size={25} />
              </Button>
            </View>
            <View style={{ flex: 7, justifyContent: 'center', marginLeft: -20, paddingTop: 10 }}>
              <Text style={{ fontFamily: 'Billabong', fontSize: 27 }}> Instagram </Text>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Button transparent>
                <FontAwesome name='tv' size={25} />
              </Button>
              <Button transparent>
                <FontAwesome name='send-o' size={25} />
              </Button>
            </View>

          </View>
        </Header>
        <Content>
          <FlatList
            horizontal
            data={this.state.stories}
            renderItem={this._renderStory}
            keyExtractor={item => item.id.toString()}
            scrollEventThrottle={5}
            showsHorizontalScrollIndicator={false} />
          <FlatList
            data={this.state.posts}
            renderItem={this._renderPost}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
             />
        </Content>

      </Container>

    )
  }

}

export default DashboardScreen
