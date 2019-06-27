import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, Animated, StyleSheet, Text } from 'react-native'
import CircleImage from '../../Components/CircleImage'

export default class StoryView extends Component {
  constructor() {
    super()
    this.state = {
      scale: new Animated.Value(1),
    }
  }

  scaleIn() {
    Animated.timing(this.state.scale, {
      toValue: 0.9,
      duration: 100,
    }).start()
  }

  scaleOut() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 100,
    }).start()
  }

  limitedText(text) {
    if (text.length > 10) {
      return `${text.slice(0, 8)}..`
    }
    return text
  }

  render() {
    const { title, thumbnail, disabled } = this.props
    const animatedScale = { transform: [{ scale: this.state.scale }] }

    return (
      <View>
        <View style={styles.circle}>
          <TouchableWithoutFeedback
            onPress={this.props.onPress}
            onPressIn={() => this.scaleIn()}
            onPressOut={() => this.scaleOut()}
            onLongPress={this.props.onLongPress}
          >
            <Animated.View style={[animatedScale, styles.center]}>
              <CircleImage disabled={disabled} source={thumbnail} />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>{this.limitedText(title)}</Text>
        </View>
      </View>
    )
  }
}

StoryView.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func,
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
  },
  circle: {
    marginHorizontal: 7,
    marginVertical: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 13,
  },
  title: {
    flex: 1,
    paddingHorizontal: 2,
  },
})
