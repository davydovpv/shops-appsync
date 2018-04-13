import React from 'react'
import { ActivityIndicator } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from '../src/components/Home'
import Login from '../src/components/user/Login'

const Navigator = StackNavigator({
  Home: {
    screen: Home
  }
})

const NavWrapper = () => {
  //check if user exist here
  // if(loading) return <ActivityIndicator size="large" />
  // if(!user) return <Login />
  // return <Navigator screenProps={{user}} />
  return <Navigator />
}

export default NavWrapper
