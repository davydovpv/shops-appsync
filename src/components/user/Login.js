import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

import { Auth } from 'aws-amplify'

import LoginUserForm from './LoginUserForm'

class Login extends React.Component{
  state = {
    toConfirm: false,
    user: {}
  }
  signIn = ({username, password}) => {
    Auth.signIn(username, password).then((response) => {
      this.setState({
        toConfirm: true,
        user: response
      })
      console.log("Successful signin", response)
    }).catch((error) => {
      console.log("Error signing in", error)
    })
  }

  confirmSignIn = ({confirmationCode}) => {
    Auth.confirmSignIn(this.state.user, confirmationCode).then((response) => {
      this.setState({
        toConfirm: false
      }, () => {
        this.props.screenProps.authenticate(true)
      })
      console.log("Successful confirmSignIn", response)
    }).catch((error) => {
      console.log("Error confirmSignIn", error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginUserForm
          onSubmit={this.signIn}
          onConfirmSubmit={this.confirmSignIn}
          toConfirm={this.state.toConfirm}
          {...this.props}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center'
  }
})

export default (Login);
