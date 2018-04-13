import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Client from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'
import { ApolloProvider } from 'react-apollo'

import config from './appsync'

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './aws-exports'

Amplify.configure(AWSConfig)

import Routes from './src/routes'

const client = new Client({
  url: config.graphqlEndpoint,
  region: config.region,
  auth: {
    type: config.authenticationType,
    apiKey: config.apiKey
  }
})

export default class App extends React.Component {
  render() {
    //Rehydrated wait to render, based on offline stored data
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
          <Routes />
        </Rehydrated>
      </ApolloProvider>
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
