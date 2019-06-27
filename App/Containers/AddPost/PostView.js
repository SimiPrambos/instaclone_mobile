/* eslint-disable camelcase */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, View, Text } from 'react-native'
import { Card, CardItem, Button, Left, Body, Right } from 'native-base'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CircleImage from '../../Components/CircleImage'
import ReadMore from 'react-native-read-more-text'
import styles from './PostViewStyles'

export default class PostView extends Component {
  _randerTrucatedFooter(handlePress) {
    return (
      <Text style={[styles.grey]} onPress={handlePress}>
        ..lainnya
      </Text>
    )
  }

  render() {
    const { user, media_url, caption, likes, comments } = this.props

    return (
      <Card noShadow style={styles.container}>
        <CardItem>
          <Left>
            <CircleImage small source={user.profile_pic_url} />
            <Body>
              <Text>{user.username}</Text>
            </Body>
          </Left>
          <Right>
            <Button transparent>
              <AntIcon name="ellipsis1" size={20} style={styles.iconOption} />
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody style={styles.imageSection}>
          <Image source={{ uri: media_url }} style={styles.image} />
        </CardItem>
        <CardItem cardBody style={styles.button}>
          <Left>
            <Button transparent>
              <AntIcon name="hearto" size={25} color="black" />
            </Button>
            <Button transparent>
              <FontAwesome name="comment-o" size={25} color="black" />
            </Button>
            <Button transparent>
              <FontAwesome name="send-o" size={22} color="black" />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <FontAwesome name="bookmark-o" size={25} color="black" />
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody style={styles.caption}>
          <View style={[styles.spanText, styles.padded]}>
            <Text style={[styles.bold, styles.black]}>{likes} suka</Text>
            <ReadMore
              numberOfLines={1}
              renderTruncatedFooter={this._randerTrucatedFooter}
              renderRevealedFooter={() => {}}
            >
              <Text style={[styles.black, styles.bold]}>{user.username} </Text>
              <Text style={[styles.black]}>{caption}</Text>
            </ReadMore>
            {/* {comments.length > 0 && <Text style={[]}>Lihat semua {comments.length} komentar</Text>} */}
          </View>
        </CardItem>
      </Card>
    )
  }
}

PostView.propTypes = {
  // username: PropTypes.string.isRequired,
  // profile_pic_url: PropTypes.string.isRequired,
  media_url: PropTypes.string.isRequired,
  caption: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.array,
}
