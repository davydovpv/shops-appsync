import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './aws-exports'

Amplify.configure(AWSConfig)

import Routes from './src/routes'

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
