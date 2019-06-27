/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Accordion } from 'native-base'
import StoryView from '../AddStory/StoryView'

export default class StoryHighlight extends Component {

  _renderContentAccordion({ content }) {
    return (
      <View style={styles.container}>
        <Text>{lang.save_favorite_story}</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.scrollView}
        >
          {content.map((story, index) => (
            <StoryView
              key={index}
              title={story.caption}
              thumbnail={story.media_url}
              onPress={() => alert('story highlight pressed!')}
            />
          ))}
        </ScrollView>
      </View>
    )
  }

  render() {
    return (
      <Accordion
        dataArray={[{ title: lang.story_highlight, content: this.props.data }]}
        expanded={0}
        headerStyle={styles.transparent}
        contentStyle={styles.transparent}
        style={styles.border}
        renderContent={this._renderContentAccordion}
      />
    )
  }
}

StoryHighlight.propTypes = {
  data: PropTypes.array,
}

const lang = {
  story_highlight: 'Sorotan Cerita',
  save_favorite_story: 'Simpan cerita favorit di profil Anda',
  new: 'Baru',
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  scrollView: {
    maxHeight: 95,
    marginHorizontal: -15,
    paddingHorizontal: 10,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  border: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
})
