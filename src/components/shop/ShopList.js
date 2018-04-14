import React from 'react'
import {
  View, Text, FlatList
} from 'react-native'
import { List, ListItem, Body, Right, Icon } from 'native-base'
import { graphql } from 'react-apollo'
import ListShops from '../../queries/ListShops'
import NewShopSubscription from '../../subscriptions/NewShopSubscription'

import { CustomStyles } from '../../styles/'

class ShopList extends React.Component{
  componentDidMount() {
    // this.props.subscribeToNewShops()
  }

  goToShop = (item) => {
    return () => {
      let payload = {
        id: item.id,
        name: item.name,
        description: item.description
      }
      this.props.navigation.navigate("Shop", payload)
    }
  }

  renderShops = ({item}) => {
    return (
      <ListItem onPress={this.goToShop(item)}>
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    )
  }

  render() {
    return (
      <View style={CustomStyles.paddedCont}>
        <List>
          <FlatList
            data={this.props.shops}
            renderItem={this.renderShops}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    )
  }
}

export default graphql(ListShops, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: props => ({
    shops: props.data.listShops?props.data.listShops.items:[],
    subscribeToNewShops: params => { //listen for new updates
      props.data.subscribeToMore({
        document: NewShopSubscription,
        updateQuery: (prev, { subscriptionData: {data: { onCreateShop }} }) => {
          return {
            ...prev, //return previous values
            listShops: {
              __typeName: 'ShopConnection',
              items: [onCreateShop, _.filter(...prev.listShops.items, (shop) => {
                shop.id !== onCreateShop.id
              })]
            }
          }
        }
      })
    }
  })
})(ShopList)
