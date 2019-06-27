/* eslint-disable react/prop-types */
/* eslint-disable no-useless-return */
import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Text, Button, Header, Footer, Form, Item, Input } from 'native-base'
import styles from './SignInStyles'
import lang from './Localization'
import ChooseLanguage from './ChooseLanguage'

import AuthService from '../../Services/AuthService'

class SignInScreen extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
  }
  async componentWillMount() {
    const wasLoggedIn = await AuthService.isLoggedIn()
    if (wasLoggedIn) {
      this.handleSignInSuccess()
    }
  }

  handleSignInSuccess() {
    this.props.navigation.navigate('Auth')
  }

  async handleSignIn() {
    const { username, password } = this.state
    alert('try to signed in')
    const signInSuccess = await AuthService.login(username, password)
    if (signInSuccess) {
      this.handleSignInSuccess()
    }
  }

  _handleForgotAccount() {
    alert('forgot account!')
  }

  _handleCreateAccount() {
    alert('create account!')
  }

  render() {
    return (
      <Container>
        <Header noShadow androidStatusBarColor="black" style={[styles.center, styles.white]}>
          <ChooseLanguage />
        </Header>
        <View style={styles.body}>
          <View style={styles.container}>
            <Text style={styles.brand}> Instagram </Text>
            <Form>
              <Item regular style={styles.field}>
                <Input
                  placeholder={lang.username_or_email}
                  placeholderTextColor="grey"
                  style={styles.label}
                  onChangeText={(text) => this.setState({ username: text })}
                />
              </Item>
              <Item regular style={styles.field}>
                <Input
                  secureTextEntry={true}
                  placeholder={lang.password}
                  placeholderTextColor="grey"
                  style={styles.label}
                  onChangeText={(text) => this.setState({ password: text })}
                />
              </Item>
              <Button block style={styles.button} onPress={() => this.handleSignIn()}>
                <Text>{lang.login}</Text>
              </Button>
            </Form>
            <View style={styles.spanText}>
              <Text>
                <Text style={[styles.smallText, styles.greyText]}>{lang.forgot_password}</Text>
                <Text
                  style={[styles.smallText, styles.bold]}
                  onPress={() => this._handleForgotAccount()}
                >
                  {lang.get_help}
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <Footer style={[styles.center, styles.white]}>
          <View style={styles.spanText}>
            <Text>
              <Text style={styles.smallText}>{lang.no_account} </Text>
              <Text
                style={[styles.smallText, styles.bold]}
                onPress={() => this._handleCreateAccount()}
              >
                {lang.create_account}
              </Text>
            </Text>
          </View>
        </Footer>
      </Container>
    )
  }
}

export default SignInScreen
