import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'

import Home from '../src/components/Home'
import Login from '../src/components/user/Login'
import Register from '../src/components/user/Register'
import UpsertShop from '../src/components/shop/UpsertShop'
import Shop from '../src/components/shop/Shop'

const UserActionTab = TabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Sign In"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Sign Up"
    }
  }
}, {
  // tabBarPosition: 'top'
})

const Navigator = StackNavigator({
  Home: {
    screen: Home
  },
  UpsertShop: {
    screen: UpsertShop
  },
  Shop: {
    screen: Shop
  }
})

class NavWrapper extends React.Component{
  state = {
    isAuthenticated: false
  }

  authenticate = (isAuthenticated) => {
    this.setState({
      isAuthenticated
    })
  }

  render() {
    //check if user exist here
    // if(loading) return <ActivityIndicator size="large" />
    // if(!user) return <Login />
    // return <Navigator screenProps={{user}} />
    if(this.state.isAuthenticated) return <Navigator />

    // return <UserActionTab screenProps={{
    //   authenticate: this.authenticate
    // }} />
    return <Navigator />
  }
}

export default NavWrapper
