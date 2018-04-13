import React from 'react'
import {
  View, Text, Button, StyleSheet
} from 'react-native'
import { Form, Item, Label, Input } from 'native-base'

class LoginUserForm extends React.Component{
  state = {
    username: '',
    password: '',
    confirmationCode: '',
    user: {}
  }

  changeState = (name) => {
    return (value) => {
      this.setState({
        [name]: value
      })
    }
  }

  signIn = () => {
    let payload = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.onSubmit(payload)
  }

  confirmSignIn = () => {
    let payload = {
      confirmationCode: this.state.confirmationCode
    }

    this.props.onConfirmSubmit(payload)
  }

  render() {
    return (
      <View>
        {
          this.props.toConfirm?(
            <Form>
              <Item floatingLabel>
                <Label>Confirmation Code</Label>
                <Input
                  value={this.state.confirmationCode}
                  onChangeText={this.changeState('confirmationCode')}
                />
              </Item>
              <Button
                title="Confirm"
                onPress={this.confirmSignIn}
              />
            </Form>
          ):(
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input
                  value={this.state.username}
                  onChangeText={this.changeState('username')}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry
                  value={this.state.password}
                  onChangeText={this.changeState('password')}
                />
              </Item>
              <Button
                title="Sign In"
                onPress={this.signIn}
              />
            </Form>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: "row"
  }
})

export default (LoginUserForm);
