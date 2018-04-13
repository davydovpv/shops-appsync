import React from 'react'
import {
  View, Text, StyleSheet, Button
} from 'react-native'
import { Auth } from 'aws-amplify'

import ShopList from './shop/ShopList'

class Home extends React.Component{
  signIn = () => {
    this.props.navigation.navigate("Login")
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={{textAlign:'center'}}>Hello {Auth.user.username}!</Text> */}
        {/* <Text style={{textAlign:'center'}}>Hello!</Text> */}
        <ShopList />
        {/* <Button
          title="Sign In"
          onPress={this.signIn}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center'
  }
})

export default (Home);
