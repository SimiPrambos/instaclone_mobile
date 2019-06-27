/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'

const { height } = Dimensions.get('screen')

export default class SwitchAccount extends Component {
  constructor() {
    super()
    this.state = {
      modalVisible: false,
    }
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  onBackButtonPressed() {
    this.setState({ modalVisible: false })
  }

  render() {
    return (
      <View>
        <Button onPress={() => this.toggleModal()} transparent>
          <Text note>{this.props.title}</Text>
          <AntIcon name="down" />
        </Button>
        <Modal
          isVisible={this.state.modalVisible}
          deviceHeight={height}
          onBackButtonPress={() => this.onBackButtonPressed()}
          onSwipeComplete={() => this.onBackButtonPressed()}
          swipeDirection="down"
          propagateSwipe
          style={styles.modal}
        >
          <View style={styles.transparent}>
            <View style={styles.content}>
              <Button light block rounded>
                <Text style={styles.logout} onPress={this.props.onLogout}>
                  Logout
                </Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

SwitchAccount.propTypes = {
  title: PropTypes.string,
  onLogout: PropTypes.func,
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    bottom: -10,
    position: 'absolute',
    height: '30%',
    width: '100%',
    borderRadius: 10,
    padding: 15,
  },
  modal: { margin: 0 },
  transparent: { flex: 1, backgroundColor: 'transparent' },
  logout: { alignSelf: 'center', fontSize: 20 },
})
