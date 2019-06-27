import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Button } from 'native-base'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import languages from '../../Services/LanguageServices'
import styles from './ChooseLanguageStyles'

const { height } = Dimensions.get('screen')

export default class LanguageModal extends Component {
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
          <Text note>Indonesia (Indonesia)</Text>
          <AntIcon name="down" />
        </Button>
        <Modal
          isVisible={this.state.modalVisible}
          deviceHeight={height}
          onBackButtonPress={() => this.onBackButtonPressed()}
        >
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>Choose language</Text>
            </View>
            <ScrollView>
              {languages.map((language, index) => (
                <TouchableWithoutFeedback
                  onPress={() => alert(JSON.stringify(language))}
                  key={index}
                >
                  <View style={styles.item}>
                    <Text style={styles.title}>{language.title}</Text>
                    <Text style={styles.subtitle}>{language.subtitle}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </ScrollView>
          </View>
        </Modal>
      </View>
    )
  }
}
