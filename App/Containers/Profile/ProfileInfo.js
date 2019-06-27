/* eslint-disable react-native/no-color-literals */
/* eslint-disable camelcase */
/* eslint-disable react-native/sort-styles */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import { Thumbnail, Button } from 'native-base'

export default class ProfileInfo extends Component {
  render() {
    const { username, profile_pic_url, userInfo } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.sectionProfile}>
          <View>
            <Thumbnail style={styles.image} source={{ uri: profile_pic_url }} />
          </View>
          <View style={styles.sectionUsername}>
            <Text style={styles.username}>{username}</Text>
          </View>
        </View>
        <View style={styles.sectionInfo}>
          <View style={styles.rowCenter}>
            <View style={styles.flex}>
              <Text style={styles.title}>{userInfo.posting}</Text>
              <Text style={styles.subtitle}>{lang.posting}</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.title}>{userInfo.follower}</Text>
              <Text style={styles.subtitle}>{lang.follower}</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.title}>{userInfo.followed}</Text>
              <Text style={styles.subtitle}>{lang.followed}</Text>
            </View>
          </View>
          <Button block small bordered transparent style={styles.button}>
            <Text style={styles.textButton} onPress={this.props.onChangeProfile}>
              {lang.change_profile}
            </Text>
          </Button>
        </View>
      </View>
    )
  }
}

ProfileInfo.propTypes = {
  username: PropTypes.string,
  profile_pic_url: PropTypes.string,
  userInfo: PropTypes.object,
  onChangeProfile: PropTypes.func,
}

const lang = {
  posting: 'Postingan',
  follower: 'Pengikut',
  followed: 'Mengikuti',
  change_profile: 'Edit Profile',
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  rowCenter: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  sectionProfile: {
    flex: 3,
    alignContent: 'center',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 50,
  },
  sectionInfo: {
    flex: 7,
  },
  sectionUsername: {
    paddingVertical: 10,
  },
  username: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
  },
  subtitle: {
    fontSize: 13,
    alignSelf: 'center',
    color: 'grey',
  },
  button: {
    margin: 7,
    borderRadius: 3,
    borderColor: 'grey',
  },
  textButton: {
    color: 'black',
    fontWeight: 'bold',
  },
})
