import React from 'react'
import {
  View, Text, Button
} from 'react-native'
import { Form, Item, Label, Input } from 'native-base'

class RegisterUserForm extends React.Component{
  state = {
    username: '',
    password: '',
    phone_number: '',
    email: '',
    confirmationCode: '' // the two factor confirmation code
  }

  changeState = (name) => {
    return (value) => {
      this.setState({
        [name]: value
      })
    }
  }

  signUp = () => {
    let payload = {
      username: this.state.username,
      password: this.state.password,
      phone_number: this.state.phone_number,
      email: this.state.email
    }

    this.props.onSubmit(payload)
  }

  confirmSignUp = () => {
    let payload = {
      username: this.state.username,
      confirmationCode: this.state.confirmationCode
    }
    this.props.confirmSubmit(payload)
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
                onPress={this.confirmSignUp}
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
              <Item floatingLabel>
                <Label>Phone Number</Label>
                <Input
                  keyboardType="numeric"
                  value={this.state.phone_number}
                  onChangeText={this.changeState('phone_number')}
                />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  keyboardType="email-address"
                  value={this.state.email}
                  onChangeText={this.changeState('email')}
                />
              </Item>
              <Button
                title="Sign Up"
                onPress={this.signUp}
              />
            </Form>
          )
        }
      </View>
    )
  }
}

export default (RegisterUserForm);
