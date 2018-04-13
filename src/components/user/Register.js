import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

import { Auth } from 'aws-amplify'

import RegisterUserForm from './RegisterUserForm'

class Register extends React.Component{
  state = {
    toConfirm: false
  }

  signUp = ({username, password, phone_number, email}) => {
    Auth.signUp({
      username,
      password,
      attributes: {
        phone_number,
        email
      }
    }).then((response) => {
      this.setState({
        toConfirm: true
      })
      console.log("Successful ba", response)
    }).catch((error) => {
      console.log("Error", error)
    })
  }

  confirmSignUp = ({username, confirmationCode}) => {
    Auth.confirmSignUp(username, confirmationCode).then((response) => {
      this.setState({
        toConfirm: false
      })
      console.log("Successful confirm", response)
    }).catch((error) => {
      console.log("Error", error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <RegisterUserForm {...this.props} onSubmit={this.signUp} confirmSubmit={this.confirmSignUp} toConfirm={this.state.toConfirm} />
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

export default (Register);
