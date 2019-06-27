/* eslint-disable react-native/no-color-literals */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Thumbnail } from 'native-base'

export default class CircleImageGradient extends Component {
  render() {
    const { source, small, disabled } = this.props
    const padding = { padding: disabled ? 1 : 2 }

    return (
      <LinearGradient
        colors={disabled ? colors.disabled : colors.active}
        start={gradient.start}
        end={gradient.end}
        style={[styles.circle, padding]}
      >
        <Thumbnail small={small} style={styles.image} source={{ uri: source }} />
      </LinearGradient>
    )
  }
}

CircleImageGradient.propTypes = {
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  source: PropTypes.string,
}

const colors = {
  active: ['#b5465c', '#bc318f', '#e33f5f', '#f77638', '#fec66d'],
  disabled: ['#FFFFFF', '#FFFFFF'],
}

const gradient = {
  start: { x: 0, y: 0.4 },
  end: { x: 1, y: 0.6 },
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
  },
  image: {
    borderColor: 'white',
    borderWidth: 2,
  },
})
