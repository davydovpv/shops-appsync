import React from 'react'
import {
  View, Text
} from 'react-native'
import { graphql } from 'react-apollo'
import CreateShop from '../../mutations/CreateShop'
import ListShops from '../../queries/ListShops'
import UpsertShopForm from './UpsertShopForm'
import uuidv4 from 'uuid/v4'

class UpsertShop extends React.Component{
  onSubmitForm = (shop) => {
    if(!this.props.navigation.state.params.id){
      const { name, description } = shop
      this.props.onAdd({
        id: uuidv4(),
        name,
        description
      })
      this.props.navigation.goBack();
    }else{
      console.log("For update")
    }
  }

  render() {
    const {params} = this.props.navigation.state
    return (
      <View>
        <UpsertShopForm
          actionType={params.id?"Update Shop":"Add Shop"}
          onSubmitForm={this.onSubmitForm}
          activeData={params || {}}
        />
      </View>
    )
  }
}

export default graphql(CreateShop, {
  // options: {
  //   refetchQueries: ["ListShops"]
  // },
  props: props => ({
    onAdd: shop => props.mutate({
      variables: shop,
      optimisticResponse: {
        __typename: 'Mutation',
        createShop: { ...shop, __typename: 'Shop' }
      },
      update: (proxy, { data: {createShop} }) => {
        const data = proxy.readQuery({query: ListShops})
        let hasBeenAdded = false
        _.map(data.listShops.items, (item) => {
          if(item.id === createShop.id) hasBeenAdded = true
        })
        if(hasBeenAdded) return
        data.listShops.items.push(createShop)
        proxy.writeQuery({query: ListShops, data  })
      }
    })
  })
})(UpsertShop);
