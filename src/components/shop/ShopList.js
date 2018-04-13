import React from 'react'
import {
  View, Text, FlatList
} from 'react-native'
import { List, ListItem, Body, Right, Icon } from 'native-base'
import { graphql } from 'react-apollo'
import ListShops from '../../queries/ListShops'

class ShopList extends React.Component{

  goToShop = (item) => {
    console.log("item", item)
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
    console.log("props: ", this.props)
    return (
      <View>
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
    shops: props.data.listShops?props.data.listShops.items:[]
  })
})(ShopList)
