import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Button, Thumbnail } from 'native-base'
import styles from './ProfileStyles'

export default class GridView extends Component {
  render() {
    return (
      <View style={styles.gridSection}>
        {this.props.data.map((item, index) => (
          <Button
            key={index}
            onPress={() => alert('pict clicked')}
            style={[styles.gridImage, styles.marged]}
          >
            <Thumbnail square source={{ uri: item.media_url }} style={styles.gridImage} />
          </Button>
        ))}
      </View>
    )
  }
}

GridView.propTypes = {
  data: PropTypes.array,
}
