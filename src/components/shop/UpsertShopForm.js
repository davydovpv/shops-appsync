import React from 'react'
import {
  View, Text, Button
} from 'react-native'
import { Form, Item, Input, Label } from 'native-base'
import _ from 'lodash'

class UpsertShopForm extends React.Component{
  state = {
    name: this.props.activeData.name || '',
    description: this.props.activeData.description || ''
  }

  changeState = (name) => {
    return (value) => {
      this.setState({
        [name]: value
      })
    }
  }

  submitForm = () => {
    let payload = _.clone(this.state)
    this.props.onSubmitForm(payload);
  }

  render() {
    const {name, description} = this.state
    return (
      <Form>
        <Item floatingLabel>
          <Label>Name</Label>
          <Input
            value={name}
            onChangeText={this.changeState('name')}
          />
        </Item>
        <Item floatingLabel>
          <Label>Description</Label>
          <Input
            multiline
            value={description}
            onChangeText={this.changeState('description')}
            style={{
              height: 400,
              textAlignVertical: 'top'
            }}
          />
        </Item>
        <Button
          title={this.props.actionType}
          onPress={this.submitForm}
        />
      </Form>
    )
  }
}

export default (UpsertShopForm);
